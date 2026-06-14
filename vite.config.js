import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // El portal es la raíz del dominio (essenz.cl/).
  base: '/',
  build: {
    chunkSizeWarningLimit: 3000
  }
})
