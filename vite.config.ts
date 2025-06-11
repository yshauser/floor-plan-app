import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ghPages from 'vite-plugin-gh-pages'
// import { StrictMode } from 'react'

// https://vite.dev/config/
export default defineConfig({
  base: '/floor-plan-app/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  assetsInclude: ['**/*.svg'],
  server:{
    port: 5715,
    strictPort: true,
  }
})
