import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Searches_User_GitHub/', // Nome do repositório
  build: {
    outDir: 'dist',
  },
})
