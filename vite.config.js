import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sdwot-clone/',  // IMPORTANT: this should match your repo name exactly
  plugins: [react()],
})
