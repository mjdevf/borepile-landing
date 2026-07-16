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
       cache: true,
      test: /\.(png|jpe?g|webp|avif)$/i,
      exclude: /\.(svg|ico)$/i,
      logStats: true,
    }),
  ],
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
                      if (id.includes('leaflet')) return 'map'
                      if (id.includes('lucide-react')) return 'ui'
                      if (id.includes('motion')) return 'motion'
                      if (id.includes('react-router')) return 'router'
                      if (id.includes('react-dom')) return 'react-dom'
                      return 'vendor'
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
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable, s-maxage=86400, stale-while-revalidate=86400',
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'motion/react'],
    force: true,
  },
  // Critical CSS inline for above-the-fold
  transformIndexHtml(html) {
    return html.replace(
      '</head>',
      `<style>
        .hero { min-height: 100dvh; display: flex; align-items: center; background: #000000; }
        .text-white { color: #ffffff !important; }
        .max-w-7xl { max-width: 80rem; margin: 0 auto; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        @media (min-width: 640px) { .sm\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; } }
        .mt-28 { margin-top: 7rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .text-xs { font-size: 0.75rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .text-emas-500 { color: #d4a843 !important; }
        .text-beton-200 { color: #d6d3d1 !important; }
        @media (min-width: 640px) { .sm\:text-lg { font-size: 1.125rem; } }
      </style></head>`
    );
  },
})
