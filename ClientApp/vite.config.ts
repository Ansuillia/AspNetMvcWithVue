import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const root = resolve(__dirname)
const src = resolve(root, 'src')
const wwwroot = resolve('../', 'wwwroot')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [vue(), vueJsx()],
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
    manifest: false,
    rollupOptions: {
      input: {
        multistep: resolve(src, 'pages/multistep/main.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
    outDir: resolve(wwwroot, `app/`),
    assetsDir: resolve(wwwroot, `app/css/`),
  },
})
