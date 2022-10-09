/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-05 16:39:50
 * @LastEditTime: 2022-10-09 10:01:45
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import path from 'path'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte'],
      /** 配置时要去除.ts文件，否则会报错[vite] Internal server error: Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated. You must therefore provide a 
     value for the "parserOptions.project" property for @typescript-eslint/parser.*/
      include: [
        'src/**/*.js',
        'src/*.js',
        'src/**/*.tsx',
        'src/*.tsx',
        'src/**/*.vue',
      ],
      exclude: ['**/node_modules/**']
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 指定传递给 CSS 预处理器的选项
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
