import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/juanslr.github.io/',
  plugins: [react()],
})
