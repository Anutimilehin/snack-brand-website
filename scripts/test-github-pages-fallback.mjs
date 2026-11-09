import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import vm from 'node:vm'

function getInlineScript(html) {
  const match = html.match(/<script>([\s\S]*?)<\/script>/)
  assert.ok(match, 'Expected an inline fallback script.')
  return match[1]
}

function run404Script(script, { pathname, search = '', hash = '' }) {
  let redirectUrl = ''
  const location = {
    origin: 'https://anutimilehin.github.io',
    pathname,
    search,
    hash,
    replace(url) {
      redirectUrl = url
    },
  }

  vm.runInNewContext(script, { URLSearchParams, window: { location } })
  return new URL(redirectUrl)
}

function runIndexScript(script, { pathname, search = '', hash = '' }) {
  let restoredUrl = null
  const location = { pathname, search, hash }
  const window = {
    location,
    history: {
      replaceState(_state, _title, url) {
        restoredUrl = url
      },
    },
  }

  vm.runInNewContext(script, { URLSearchParams, window })
  return restoredUrl
}

const [indexHtml, fallbackHtml] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../public/404.html', import.meta.url), 'utf8'),
])
const indexScript = getInlineScript(indexHtml)
const fallbackScript = getInlineScript(fallbackHtml)

const redirected = run404Script(fallbackScript, {
  pathname: '/snack-brand-website/products',
  search: '?filter=snacks&page=2',
  hash: '#plantain-chips',
})
const restored = runIndexScript(indexScript, {
  pathname: redirected.pathname,
  search: redirected.search,
  hash: redirected.hash,
})

assert.equal(
  restored,
  '/snack-brand-website/products?filter=snacks&page=2#plantain-chips',
  'A routed URL should preserve its path, query string, and hash.',
)

assert.equal(
  runIndexScript(indexScript, {
    pathname: '/snack-brand-website/',
    search: '?p=campaign',
  }),
  null,
  'A normal homepage ?p= query parameter must not trigger route restoration.',
)

console.log('GitHub Pages fallback tests passed.')
