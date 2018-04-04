module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500&amp;subset=latin-ext', hid: 'googleFontRoboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:400,500,700&amp;subset=latin-ext', hid: 'googleFontRubik' }
    ]
  },
  modules: [
    ['nuxt-rfg-icon', { masterPicture: 'assets/favicon.png' }],
    '@nuxtjs/manifest'
  ]
}
