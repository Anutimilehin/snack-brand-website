import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Repository sites live beneath the repository name on GitHub Pages.
  // Keep the local development server at the root path.
  const base = mode === 'github-pages' ? '/snack-brand-website/' : '/'

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
    ],
  }
})
