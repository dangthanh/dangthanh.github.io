const path = require('path');
const glob = require('glob');
const hljs = require('highlight.js');
const md = require('markdown-it')({
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`;
      } catch (__) {}
    }

    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});
const dynamicRoutes = getDynamicPath({
  '/blog': 'content/blog/*.md'
});

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title:
      process.env.npm_package_name ||
      'Dang Thanh Blog -Blog chia sẻ về web và phát triển web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/default.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/google-adsense'],
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
          markdown: body => {
            return md.render(body);
          },
          vue: true
        }
      });
    }
  },

  generate: {
    routes: dynamicRoutes
  },

  googleAnalytics: {
    id: 'UA-41117458-1'
  },

  'google-adsense': {
    id: 'ca-pub-0445843198703009'
  }
};

function getDynamicPath(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      // var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(`$/*.md`, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}
