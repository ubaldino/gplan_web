import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        autoImportComponentCase: 'combined',
        sassVariables: 'src/quasar-variables.sass'
      }),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ],
    resolve: {
      alias: {
        "src": path.resolve(__dirname + "/src"),
        "stores": path.resolve(__dirname + "/src/stores/"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    build:{
      outDir:"./dist/",
      sourcemap:true
    },
    server: {
      hmr: false,
      proxy: {
        "/api": {
          target: env.VITE_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
          // withCredentials: true,
          // rewrite: (path) => path.replace(/^\/api/, ``),
        }
      },
      port: env.VITE_PORT
    },
  }
})
