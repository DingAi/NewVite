import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import path from "path";
import cesium from 'vite-plugin-cesium'; // 引入插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    // assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: [
        // 预设
        "vue",
        "vue-router",
        // 自定义预设
        {
          "@vueuse/core": [
            // 命名导入
            "useMouse", // import { useMouse } from '@vueuse/core',
            // 设置别名
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          "axios": [
            // 默认导入
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
          "[package-name]": [
            "[import-names]",
            // alias
            ["[from]", "[alias]"],
          ],
        },
        // example type import
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true,
        },
      ],
      // 第三方组件库的解析器
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的����
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue", "md"],
      // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0", //自定义主机名
    port: 8991, //自定义端口
    // 是否开启 https
    https: false,
    proxy: {
      "/fastapi": {
        target: "http://192.168.28.33:8000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fastapi/, ""),
      },
      "/xu": {
        target: "http://192.168.28.33:5000/",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/xu/, ""),
      },
      "/ws": {
        target: "ws://192.168.28.33:8060/",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/ws/, ""),
      },
      "/new": {
        target: "http://192.168.30.119:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/new/, ""),
      },
      "/mqtt": {
        target: "http://192.168.30.119:6001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mqtt/, ""),
      },
      "/mswitch": {
        target: "http://192.168.30.119:9900",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mswitch/, ""),
      },
      "/my": {
        target: "ws://127.0.0.1:8000",
        changeOrigin: true,
        ws:true,
        rewrite: (path) => path.replace(/^\/my/, ""),
      },
    },
  },

  resolve: {
    // 配置路径别名
    alias: [
      // @代替src
      {
        find: "@",
        replacement: path.resolve("./src"),
      },
    ],
  },
});