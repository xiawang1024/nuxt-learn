module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {type:'text/javascript',src:'//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js'},
      {type:'text/javascript',src:'/viewport.js'}  //引入静态资源
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000',height:'1px' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss:[
      require('postcss-cssnext')({}),
      require('postcss-px-to-viewport')({
        viewportWidth: 750, // (Number) The width of the viewport. 
        viewportHeight: 1334, // (Number) The height of the viewport. 
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
        viewportUnit: 'vw', // (String) Expected units. 
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
        mediaQuery: false // (Boolean) Allow px to be converted in media queries.
      }),
      require('postcss-viewport-units')({}),
      require('cssnano')({
        preset:'advanced',
        autoprefixer:false,
        "postcss-zindex":false
      })
    ]
  },
  router: {
    middleware: ['visits','count']
  }
}



