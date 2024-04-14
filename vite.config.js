import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'https://farmers-friend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/socket': {
        target: 'wss://farmers-friend.onrender.com',
        ws: true,
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})