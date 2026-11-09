import { isContactRateLimited, RateLimitUnavailableError } from '../lib/rateLimit.js'

const RECIPIENT_EMAIL = 'adegokeanutimilehin0@gmail.com'
const MAX_BODY_BYTES = 12_000
const ENQUIRY_TYPES = new Set([
  'Retailer',
  'Wholesaler',
  'Distributor',
  'Business partner',
  'General customer',
  'Other enquiry',
])

function sendJson(response, status, payload) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(payload))
}

async function readRequestBody(request) {
  // Vercel's Node functions may parse JSON before invoking the handler.
  if (request.body !== undefined) {
    if (Buffer.byteLength(typeof request.body === 'string' ? request.body : JSON.stringify(request.body), 'utf8') > MAX_BODY_BYTES) {
      throw new Error('too_large')
    }
    if (typeof request.body === 'string') return JSON.parse(request.body)
    return request.body
  }

  const chunks = []
  let totalBytes = 0

  for await (const chunk of request) {
    totalBytes += chunk.length
    if (totalBytes > MAX_BODY_BYTES) throw new Error('too_large')
    chunks.push(chunk)
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

function cleanField(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function validateFields(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return null

  const details = {
    fullName: cleanField(payload.fullName),
    email: cleanField(payload.email),
    phone: cleanField(payload.phone),
    enquiryType: cleanField(payload.enquiryType),
    message: cleanField(payload.message),
    website: cleanField(payload.website),
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phonePattern = /^[+()\d.\s-]{7,30}$/

  if (details.website) return { spam: true }
  if (details.fullName.length < 2 || details.fullName.length > 100) return null
  if (details.email.length > 254 || !emailPattern.test(details.email)) return null
  if (!phonePattern.test(details.phone)) return null
  if (!ENQUIRY_TYPES.has(details.enquiryType)) return null
  if (details.message.length < 5 || details.message.length > 3000) return null

  return details
}

function requestHasTrustedOrigin(request) {
  const origin = request.headers.origin
  if (!origin) return true

  const forwardedHost = request.headers['x-forwarded-host']
  const requestHost = (Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost || request.headers.host || '').split(',')[0].trim().toLowerCase()

  try {
    return requestHost !== '' && new URL(origin).host.toLowerCase() === requestHost
  } catch {
    return false
  }
}

// Shared by Vercel production and Vite's local development middleware.
export default async function handleContactRequest(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return sendJson(response, 405, { message: 'Use the contact form to send a message.' })
  }

  if (!requestHasTrustedOrigin(request)) {
    return sendJson(response, 403, { message: 'This form request could not be verified. Please reload the page and try again.' })
  }

  const contentType = request.headers['content-type'] || ''
  if (!contentType.toLowerCase().includes('application/json')) {
    return sendJson(response, 415, { message: 'Please submit the contact form using the website.' })
  }

  let payload
  try {
    payload = await readRequestBody(request)
  } catch (error) {
    const tooLarge = error instanceof Error && error.message === 'too_large'
    return sendJson(response, tooLarge ? 413 : 400, {
      message: tooLarge ? 'Your message is too long. Please shorten it and try again.' : 'The form could not be read. Please check it and try again.',
    })
  }

  const details = validateFields(payload)
  if (details?.spam) return sendJson(response, 200, { accepted: true })
  if (!details) return sendJson(response, 400, { message: 'Please check all required fields and try again.' })

  try {
    if (await isContactRateLimited(request)) {
      response.setHeader('Retry-After', '900')
      return sendJson(response, 429, {
        message: 'Too many enquiries were sent from this connection. Please wait a little and try again.',
      })
    }
  } catch (error) {
    if (!(error instanceof RateLimitUnavailableError)) {
      console.error('Contact rate limiter encountered an unexpected error.')
    } else {
      console.error('Contact rate limiter unavailable.')
    }
    return sendJson(response, 503, {
      message: 'The enquiry form is temporarily unavailable. Please use the phone or email links instead.',
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const hasPlaceholderSetting = apiKey?.includes('your_server_side_key') || fromEmail?.includes('your-verified-domain.com')
  if (!apiKey || !fromEmail || hasPlaceholderSetting) {
    return sendJson(response, 503, {
      message: 'Online email is not configured yet. Please use one of the direct contact links below.',
    })
  }

  const text = [
    `Name: ${details.fullName}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Enquiry type: ${details.enquiryType}`,
    '',
    'Message:',
    details.message,
  ].join('\n')

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [RECIPIENT_EMAIL],
        reply_to: details.email,
        subject: `Website enquiry: ${details.enquiryType}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!resendResponse.ok) {
      // Do not return provider details or any submitted personal information.
      console.error(`Resend rejected contact email with status ${resendResponse.status}.`)
      return sendJson(response, 502, {
        message: 'We could not send your message right now. Please try again or use the phone and email links on this page.',
      })
    }

    const result = await resendResponse.json()
    return sendJson(response, 200, { accepted: true, id: result.id })
  } catch {
    console.error('Resend contact email request failed.')
    return sendJson(response, 502, {
      message: 'We could not connect to the email service. Please try again or use the phone and email links on this page.',
    })
  }
}
