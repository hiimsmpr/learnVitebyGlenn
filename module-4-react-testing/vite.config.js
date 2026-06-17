import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config plus test environment setup for Vitest.
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.js'
  }
})
