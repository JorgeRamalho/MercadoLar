import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  root: resolve(__dirname),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'html/index.html'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'html-entry',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/html/index.html'
          }
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@react': resolve(__dirname, 'react'),
      '@typescript': resolve(__dirname, 'typescript'),
      '@css': resolve(__dirname, 'css'),
      '@js': resolve(__dirname, 'javascript'),
    },
  },
})
