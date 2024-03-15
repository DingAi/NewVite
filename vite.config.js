import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',//自定义主机名
    port: 8991,//自定义端口
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'http://47.92.170.190:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/django': {
        target: 'http://127.0.0.1:8800/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/django/, '')
      },
      '/fastapi': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fastapi/, '')
      },
      '/xu': {
        target: 'http://192.168.28.33:8060/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/xu/, '')
      },
      '/shuangchan': {
        target: 'http://192.168.30.100:9006/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/xu/, '')
      },
    }
  },
  resolve: {
    // 配置路径别名
    alias: [
      // @代替src
      {
        find: '@',
        replacement: path.resolve('./src'),
      },
    ],
  },
})
