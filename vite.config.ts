import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync, rmSync } from 'fs'
import { resolve } from 'path'

const projectRoot = resolve(__dirname)
const htmlEntry = '/html/index.html'

function htmlEntryPlugin() {
  function serveIndexHtml(req: { url?: string }) {
    const pathname = req.url?.split('?')[0] ?? ''

    if (pathname === '/' || pathname === '/index.html') {
      req.url = htmlEntry + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '')
      return
    }

    const isAsset =
      pathname.includes('.') ||
      pathname.startsWith('/@') ||
      pathname.startsWith('/__') ||
      pathname.startsWith('/node_modules') ||
      pathname.startsWith('/src')

    if (!isAsset) {
      req.url = htmlEntry
    }
  }

  return {
    name: 'html-entry',
    configureServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void } }) {
      server.middlewares.use((req, _res, next) => {
        serveIndexHtml(req)
        next()
      })
    },
    configurePreviewServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void } }) {
      server.middlewares.use((req, _res, next) => {
        serveIndexHtml(req)
        next()
      })
    },
    closeBundle() {
      const nestedIndex = resolve(projectRoot, 'dist/html/index.html')
      const rootIndex = resolve(projectRoot, 'dist/index.html')

      if (existsSync(nestedIndex)) {
        copyFileSync(nestedIndex, rootIndex)
        rmSync(resolve(projectRoot, 'dist/html'), { recursive: true, force: true })
      }
    },
  }
}

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
    rollupOptions: {
      input: resolve(projectRoot, 'html/index.html'),
    },
  },
  plugins: [react(), tailwindcss(), htmlEntryPlugin()],
  resolve: {
    alias: {
      '@react': resolve(projectRoot, 'react'),
      '@typescript': resolve(projectRoot, 'typescript'),
      '@css': resolve(projectRoot, 'css'),
      '@js': resolve(projectRoot, 'javascript'),
    },
  },
})
