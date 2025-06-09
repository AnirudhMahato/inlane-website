import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2017', // Or 'esnext' if you only support latest browsers
    minify: 'esbuild', // default, but explicit here for clarity
  }
})
