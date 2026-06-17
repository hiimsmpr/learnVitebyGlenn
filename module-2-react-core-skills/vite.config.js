import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Keep config minimal for beginners while enabling React support.
export default defineConfig({
  plugins: [react()]
})
