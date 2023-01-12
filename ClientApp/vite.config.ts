import { fileURLToPath, URL } from 'node:url'
import Pages from 'vite-plugin-pages'

import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import basicSsl from '@vitejs/plugin-basic-ssl'

const root = resolve(__dirname)
const src = resolve(root, 'src')
const pages = resolve(src, 'pages')
const outdir = resolve('../wwwroot/app')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [vue(), vueJsx(), Pages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    //https: true,
    hmr: {
      protocol: 'ws',
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        home: resolve(pages, 'Home/HomeView.vue'),
      },
    },
  },
})
