import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.ts"),
      name: 'mul-ui',
      fileName: (format) => `mul-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: { // 这里是对于外部引用的包的配置，可以是全局引用的包，也可以是局部引用的包
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
      alias: [
        { find: '@', replacement: pathResolve('src') },
        { find: 'public', replacement: pathResolve('public') }
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          // 引入 styles.scss 这样就可以在全局中使用 styles.scss中预定义的变量了
          // additionalData: '@import "@/styles/theme/styles.scss";'
          // additionalData: '@use "@/styles/var.scss" as *;'
        }
      }
    }
})
