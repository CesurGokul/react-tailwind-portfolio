import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ Changed from '/react-tailwind-portfolio/' to '/'
  plugins: [react()],
})