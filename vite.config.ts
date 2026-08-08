import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const projectRoot = resolve(__dirname)

export default defineConfig({
  root: projectRoot,
  publicDir: resolve(projectRoot, 'public'),
  appType: 'spa',
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: '/',
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
    open: '/',
  },
  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src'),
      '@react': resolve(projectRoot, 'src'),
      '@typescript': resolve(projectRoot, 'src'),
      '@css': resolve(projectRoot, 'src/styles'),
    },
  },
})
