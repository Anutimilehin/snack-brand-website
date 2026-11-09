import { createHash } from 'node:crypto'

const LIMIT = 10
const WINDOW_SECONDS = 15 * 60
const localBuckets = new Map()

export class RateLimitUnavailableError extends Error {}

function getClientAddress(request) {
  const directAddress = request.headers['x-real-ip']
  if (typeof directAddress === 'string' && directAddress.trim()) return directAddress.trim()

  const forwardedAddress = request.headers['x-forwarded-for']
  if (typeof forwardedAddress === 'string' && forwardedAddress.trim()) {
    return forwardedAddress.split(',')[0].trim()
  }

  return request.socket?.remoteAddress || 'unknown-client'
}

function getBucketKey(request) {
  const digest = createHash('sha256').update(getClientAddress(request)).digest('hex')
  return `jidex:contact:${digest}`
}

async function checkSharedLimit(request, redisUrl, redisToken) {
  const key = getBucketKey(request)
  try {
    const response = await fetch(`${redisUrl.replace(/\/$/, '')}/multi-exec`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${redisToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        ['SET', key, '0', 'NX', 'EX', WINDOW_SECONDS],
        ['INCR', key],
      ]),
      signal: AbortSignal.timeout(4000),
    })

    if (!response.ok) throw new RateLimitUnavailableError('Rate limit service rejected the request.')

    const results = await response.json()
    if (!Array.isArray(results) || results.some((item) => item.error)) {
      throw new RateLimitUnavailableError('Rate limit service returned an invalid response.')
    }

    return Number(results[1]?.result) > LIMIT
  } catch (error) {
    if (error instanceof RateLimitUnavailableError) throw error
    throw new RateLimitUnavailableError('Rate limit service request failed.')
  }
}

function checkLocalLimit(request) {
  const now = Date.now()
  const key = getBucketKey(request)
  let bucket = localBuckets.get(key)

  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + WINDOW_SECONDS * 1000 }
    localBuckets.set(key, bucket)
  }

  bucket.count += 1

  // Bound memory use if a local server receives requests from many addresses.
  if (localBuckets.size > 5000) {
    for (const [entryKey, entry] of localBuckets) {
      if (entry.resetAt <= now) localBuckets.delete(entryKey)
    }
  }

  return bucket.count > LIMIT
}

export async function isContactRateLimited(request) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (redisUrl && redisToken) return checkSharedLimit(request, redisUrl, redisToken)
  if (redisUrl || redisToken || process.env.NODE_ENV === 'production' || process.env.VERCEL === '1') {
    throw new RateLimitUnavailableError('A shared rate limit service is required in production.')
  }

  return checkLocalLimit(request)
}
