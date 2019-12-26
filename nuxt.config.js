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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fira+Code|IBM+Plex+Sans&display=swap'
      }
    ],
    link: [
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/caniuse-plugin.js'],
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
  },

  googleAnalytics: {
    id: 'UA-41117458-1'
  },

  'google-adsense': {
    id: 'ca-pub-0445843198703009'
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
