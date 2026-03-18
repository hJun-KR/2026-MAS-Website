import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      ansiColors: true,
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      svg: {
        multipass: true,
        plugins: [{ name: 'preset-default' }, { name: 'removeViewBox', active: false }],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      immediate: true, 
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'assets/**/*'],
      workbox: {
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,avif,ttf,otf}'],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif|ttf|otf)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-assets-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              }
            },
          },
        ],
      },
    })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    host: true,
    allowedHosts: [
      'mas-mirim.kr',
      'www.mas-mirim.kr',
    ]
  }
})