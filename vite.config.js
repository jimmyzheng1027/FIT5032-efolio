import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 这里使用 ES 模块语法定义 publicPath
  base: process.env.NODE_ENV === 'production'
    ? '/FIT5032-efolio/'  // 如果是生产环境，设置 base 路径
    : '/',                // 如果是开发环境，使用根路径
})
