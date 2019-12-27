const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
module.exports = withFonts(withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/terminos-y-condiciones': { page: '/terminos-y-condiciones' },
      '/vueltos': { page: '/vueltos' },
    }
  },
  // assetPrefix: '/invuelto-demo-landing', //para el deploy
  // target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}))
