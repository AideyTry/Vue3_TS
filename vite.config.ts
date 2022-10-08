import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

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
        'src/**/*.vue'
      ],
      exclude: ['**/node_modules/**']
    }),
    vueJsx(),
  ],
})
