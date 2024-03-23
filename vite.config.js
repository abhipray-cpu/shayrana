import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Shayrana',
        short_name: 'Shay',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#CC6FDC',
        icons: [
          {
            src: './src/assets/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '167x167',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: './src/assets/logo.png',
            sizes: '144x144',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
