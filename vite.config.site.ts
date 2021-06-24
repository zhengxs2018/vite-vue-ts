import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo/',
  server: {
    port: 2021,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [vue({ include: [/\.vue$/] }), vueJsx()],
  build: {
    target: 'es2015',
    // 输出给 vuepress 作为静态资源
    // 这样文档和示例可以一同打包
    outDir: './docs/.vuepress/public/demo',
  },
})
