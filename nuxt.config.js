export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  router: {
    base: '/wip/danceflood/dist/',
    mode: 'history',

    prefetchLinks: false
    // scrollBehavior: (to, from, savedPosition) => {
    //   if (to.hash) {
    //     console.log('yes', to.hash)

    //     const element = document.getElementById('mainArea')
    //     const target = document.querySelector(to.hash)
    //     element.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
    //     return { selector: to.hash }
    //   } else {
    //     console.log('not', to)
    //     return { x: 0, y: 0 }
    //   }
    // }
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/myplugin'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
