// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    config: true,
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
      }
    }
  },
  modules: ['@unocss/nuxt'],
  app: {
    // baseURL: './'
    // buildAssetsDir: ''
    // cdnURL: ''
    // head: {}
  },
  css: ['@/assets/index.scss'],
  // builder: 'vite',
  vite: {},
  // generate: {},
  // buildDir: '',
  // serverDir: 'dist',
  // rootDir: './src',
  srcDir: './src'
});
