import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({  
  plugins: [react()],
  base: '/SDWOT-clone/',  // IMPORTANT: this should match your repo name exactly
})

