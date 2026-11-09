import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contactHandler from './api/contact.js'

function localContactApi(env) {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      // Keep server-only values in Node's environment; do not expose them to the client bundle.
      for (const key of [
        'RESEND_API_KEY',
        'RESEND_FROM_EMAIL',
        'UPSTASH_REDIS_REST_URL',
        'UPSTASH_REDIS_REST_TOKEN',
      ]) {
        if (env[key] && !process.env[key]) process.env[key] = env[key]
      }

      server.middlewares.use('/api/contact', (request, response, next) => {
        contactHandler(request, response).catch(next)
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const serverEnv = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      localContactApi(serverEnv),
    ],
  }
})
