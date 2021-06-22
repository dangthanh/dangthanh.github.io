module.exports = {
  components: true,
  target: 'static',
  htmlAttrs: {
    lang: 'en',
  },
  head: {
    title: 'Dang Thanh Blog - Digital garden about web technologies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Digital garden about web technologies',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Fira+Code|Merriweather|Montserrat:400,600&display=swap',
      },
    ],
  },
  loading: false,
  css: ['~/assets/css/app.css'],
  plugins: [],
  buildModules: ['@nuxtjs/dayjs'],
  modules: ['@nuxtjs/dotenv', '@nuxt/content'],
  build: {
    extend() {},
  },
}
