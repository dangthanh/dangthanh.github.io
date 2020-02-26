const path = require('path');
const glob = require('glob');
const hljs = require('highlight.js');
const md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
          }</code></pre>`;
      } catch (__) { }
    }

    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

// const markdownPaths = ['blog'];
const dynamicRoutes = getDynamicPaths({
  blog: 'blog/*.md'
});

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  htmlAttrs: {
    lang: 'vi'
  },
  head: {
    title: 'Dang Thanh Blog - Blog chia sẻ về web và phát triển web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Blog chia sẻ về web và phát triển web'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fira+Code|IBM+Plex+Sans&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/solarized-light.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: ['~/assets/css/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],


  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true,
          markdown: body => {
            return md.render(body);
          }
        }
      });
    }
  },

  generate: {
    fallback: true,
    routes: dynamicRoutes
  }
};

function getDynamicPaths(urlPath) {
  return [].concat(
    ...Object.keys(urlPath).map(url => {
      const filePathGlob = urlPath[url];
      return glob
        .sync(filePathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}
