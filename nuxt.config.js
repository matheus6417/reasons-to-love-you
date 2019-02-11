const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        name: 'msapplication-TileColor"',
        content: '#000000'
      },
      {
        name: 'theme-color"',
        content: '#000000'
      }
    ],
    link: [{
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        href: '/favicon-16x16.ico'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#000000'
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#000"
  },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/fonts.css",
    "@/assets/css/bgs.css",
    "@/assets/css/main.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};