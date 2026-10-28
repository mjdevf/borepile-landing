import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  root: './',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 85, compressionLevel: 9 },
      jpeg: { quality: 80, progressive: true },
      jpg: { quality: 80, progressive: true },
      webp: { quality: 80 },
      avif: { quality: 75, effort: 9 },
      // NOTE: cache:true caused the plugin to write stray optimized copies
      // (og-image.jpg, icons/, images/) into the project root on every build.
      test: /\.(png|jpe?g|webp|avif)$/i,
      exclude: /\.(svg|ico)$/i,
      logStats: true,
    }),
  ],
  build: {
    cssCodeSplit: true,
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
                      if (id.includes('lucide-react')) return 'ui'
                      if (id.includes('react-router')) return 'router'
                      if (id.includes('react-dom')) return 'react-dom'
                    }
        },
      },
    },
     minify: 'terser',
     cssMinify: true,
     terserOptions: {
       compress: {
         drop_console: true,
         drop_debugger: true,
       },
     },
    // Mobile bundle optimization
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
    sourcemap: false,
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
    },
  },
})
