import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
        plugins: [
          {
            name: 'preset-default',
          },
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
    }),
  ],
})