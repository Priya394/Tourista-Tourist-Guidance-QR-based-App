import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Tourista-Tourist-Guidance-QR-based-App/',
  build: {
    rollupOptions: {
      external: []  // Remove react-router-dom from external
    }
  }
})
