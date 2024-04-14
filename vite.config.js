import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://farmers-friend.onrender.com'
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})


// '/api': {
//   target: 'https://farmers-friend.onrender.com',
//   changeOrigin: true,
//   rewrite: (path) => path.replace(/^\/api/, '')
// },
// '/socket.io': {
//   target: 'ws://farmers-friend.onrender.com',
//   ws: true,
//   // changeOrigin: true,
// }