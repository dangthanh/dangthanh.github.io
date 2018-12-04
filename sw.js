importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

workbox.routing.registerRoute(
  'https//codepen.io/assets/embed/ei.js',
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  'https//unpkg.com/vue@2.5.17/dist/vue.min.js',
  workbox.strategies.cacheFirst()
);

workbox.strategies.networkFirst();
workbox.googleAnalytics.initialize();
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "1d0434a100b96210fd3494ecb6aa8615"
  },
  {
    "url": "about/index.html",
    "revision": "0d9e86be31e647596ea0cabe51a2a2f4"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "1b98df60cc59599afea19aa982de8ef5"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "348fda9e7b306d8ac41d68687d280342"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "3dac185111fb874dcf06eb0ad61e30b4"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "487be622c8ceeae1fc6f54dc5902f373"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "15742096c05d98c95d00e80dc639b063"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "4f7876d098762a944af3fb3939b51ce2"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "1c9a903333ebc3e03e894bd51c3c1882"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "64112a54251f5865125b7ffc2dfd7a54"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "ffae12df094cfc91097693d97e51a5f2"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "e8048de0956518b81fb6c26376f2ddbb"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "cac7a124c2797588fd986ba04dcb5bcc"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "5a287faa93636fc5704904d49dac8900"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "5ddcd4db8e69461d0fbd7f1dbc7b5d52"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "c01d20367d9f51d4a9aee59e055ce06c"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "2705e3242351b3ff80676063c0d752ee"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "d9e9788b63ab0afde81882446caf4332"
  },
  {
    "url": "categories/index.html",
    "revision": "6e6d2e558fb47608205c0fd35738e810"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.c5976143e53437c15c493eb9104606a358243e42c079fdd4736d7365ab5f0890.css",
    "revision": "652f9ceca5a1e29663af57a4589b1e8e"
  },
  {
    "url": "images/blog_v1.png",
    "revision": "15869ac1296c611f8a961dff6487b3bb"
  },
  {
    "url": "images/blog_v2.png",
    "revision": "36f598eb7364a002b421c8f8f33171ff"
  },
  {
    "url": "images/favicon/android-icon-144x144.png",
    "revision": "f4b5153a2ee629a92a77392a6083d063"
  },
  {
    "url": "images/favicon/android-icon-192x192.png",
    "revision": "63e34a514f65df82ea06b1eee5b24672"
  },
  {
    "url": "images/favicon/android-icon-36x36.png",
    "revision": "e8e30536b3b359f9fa2137e65ce71e83"
  },
  {
    "url": "images/favicon/android-icon-48x48.png",
    "revision": "b8892a3ad65f28b98ba1b9145abe4eb5"
  },
  {
    "url": "images/favicon/android-icon-512x512.png",
    "revision": "63e34a514f65df82ea06b1eee5b24672"
  },
  {
    "url": "images/favicon/android-icon-72x72.png",
    "revision": "687eb895fbf37078a1c9d27c75b4965d"
  },
  {
    "url": "images/favicon/android-icon-96x96.png",
    "revision": "18b4cd4e7e5bc8b66d33fb5740dfd8be"
  },
  {
    "url": "images/favicon/apple-icon-114x114.png",
    "revision": "7025d6bab10a376ba0c5f34dd035e8e3"
  },
  {
    "url": "images/favicon/apple-icon-120x120.png",
    "revision": "2299ace92433195bc4e945b26c882d77"
  },
  {
    "url": "images/favicon/apple-icon-144x144.png",
    "revision": "f4b5153a2ee629a92a77392a6083d063"
  },
  {
    "url": "images/favicon/apple-icon-152x152.png",
    "revision": "2628af3dde0e88035d3572f9bd01dcf8"
  },
  {
    "url": "images/favicon/apple-icon-180x180.png",
    "revision": "6bfb7836ffa85211057f7084e1b0acf3"
  },
  {
    "url": "images/favicon/apple-icon-57x57.png",
    "revision": "14f1519c5a5e65efc2674d6ad34865fa"
  },
  {
    "url": "images/favicon/apple-icon-60x60.png",
    "revision": "f8733ac82ca52b1b226d0f4b9fdc8ba4"
  },
  {
    "url": "images/favicon/apple-icon-72x72.png",
    "revision": "687eb895fbf37078a1c9d27c75b4965d"
  },
  {
    "url": "images/favicon/apple-icon-76x76.png",
    "revision": "49a2160419d2b62f6b42f4ea5e3a8a8d"
  },
  {
    "url": "images/favicon/apple-icon-precomposed.png",
    "revision": "81abdbed764061ed12024aea0e4054d6"
  },
  {
    "url": "images/favicon/apple-icon.png",
    "revision": "81abdbed764061ed12024aea0e4054d6"
  },
  {
    "url": "images/favicon/browserconfig.xml",
    "revision": "1c32f682ad780c7a0ddb0d3608b14e8b"
  },
  {
    "url": "images/favicon/favicon-16x16.png",
    "revision": "dffa80cc118a99ca89f6658a1e8686c1"
  },
  {
    "url": "images/favicon/favicon-32x32.png",
    "revision": "c112ce3ad52a226a1b19538705d2561e"
  },
  {
    "url": "images/favicon/favicon-96x96.png",
    "revision": "18b4cd4e7e5bc8b66d33fb5740dfd8be"
  },
  {
    "url": "images/favicon/favicon.ico",
    "revision": "0fdea87b3347f8371cf143f3434fd6b5"
  },
  {
    "url": "images/favicon/manifest.json",
    "revision": "2d4884c8eeff85b55d730fa48ea10090"
  },
  {
    "url": "images/favicon/ms-icon-144x144.png",
    "revision": "f4b5153a2ee629a92a77392a6083d063"
  },
  {
    "url": "images/favicon/ms-icon-150x150.png",
    "revision": "61144027f42ac4f011313177506f2508"
  },
  {
    "url": "images/favicon/ms-icon-310x310.png",
    "revision": "594a160823468b80ae4d682e87e9e9be"
  },
  {
    "url": "images/favicon/ms-icon-70x70.png",
    "revision": "59ee754500d41511040f15e1227aab17"
  },
  {
    "url": "images/favicon/mstile-150x150.png",
    "revision": "c330b03ade52363eaf5fa3ea363b59fc"
  },
  {
    "url": "images/favicon/safari-pinned-tab.svg",
    "revision": "4b97844e43aa4f27137e607b0d426b72"
  },
  {
    "url": "images/icomoon.jpg",
    "revision": "ef562440f335f1a91db4cd9670828053"
  },
  {
    "url": "images/localstorage.jpg",
    "revision": "5b1560091fd1ab4bc90764dcdb08e6cb"
  },
  {
    "url": "images/package_control.jpg",
    "revision": "b6e48f09cf6f0cd78974c50bf87c4f05"
  },
  {
    "url": "images/portfolio/css_flag.jpg",
    "revision": "e3269774f190a3a12e1a1f7efd1e2ebe"
  },
  {
    "url": "images/portfolio/jquery-longshadow.png",
    "revision": "c8de9c68875a3730b17c8721bffabb30"
  },
  {
    "url": "images/portfolio/longshadow_jquery_plugin.jpg",
    "revision": "260e9d1fa9e970d935c2f1b3a40c416e"
  },
  {
    "url": "images/portfolio/postcss-longshadow.png",
    "revision": "114fb03efe8af415b1f74782cd37fd07"
  },
  {
    "url": "images/portfolio/tipsy-sass.png",
    "revision": "1cbd74e838dc59f12ddfdd619bdb6962"
  },
  {
    "url": "images/portfolio/vue-rollup-boilerplate.png",
    "revision": "8d35067a7de287752f8b6cac5e719f59"
  },
  {
    "url": "images/rubyinstaller.jpg",
    "revision": "a80f843adf350fd2773f724a2c3a5d37"
  },
  {
    "url": "images/sublime_text_2.jpg",
    "revision": "e74458efe434308c8f51045921cd3a42"
  },
  {
    "url": "images/weloveiconfonts.jpg",
    "revision": "90d15fc06086ee0e617502eb458ba0ec"
  },
  {
    "url": "index.html",
    "revision": "38e26317087976a33882e9a86d1de08b"
  },
  {
    "url": "index.xml",
    "revision": "6a261df9ef2fc8e1e40c964849564e51"
  },
  {
    "url": "js/anitya.min.22de4c3dec4cfff4f2518fde252216a0afafb6a670c774cfe26416c399ecee92.js",
    "revision": "c063e0bd7c656995d7fbd73537195565"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "9ac4b556fdffabe87bef3cb2cc037a55"
  },
  {
    "url": "page/3/index.html",
    "revision": "a2ba883f78ddb295c636e792d98edc76"
  },
  {
    "url": "page/4/index.html",
    "revision": "0f2e659f0111b5e16c4cfc9a25a8763f"
  },
  {
    "url": "post/index.html",
    "revision": "9c731e5743564131e81fafb3649760fe"
  },
  {
    "url": "post/index.xml",
    "revision": "cefada6711ded68dffce2d7aea9fd72a"
  },
  {
    "url": "projects/index.html",
    "revision": "6e15fa5eacf15d17d4a70e00c44770b7"
  },
  {
    "url": "sitemap.xml",
    "revision": "94839610c1819bb21ad1330054fe5b9a"
  },
  {
    "url": "tags/css/index.html",
    "revision": "bb3676b1aac071707e0cf5d167a752a6"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fed537b199a2b024c818a8d3b814ffee"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "7de6e12c73b560e2e1540aa625f8e268"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "8a256e566d9ac4ddf7d9863743984ff9"
  },
  {
    "url": "tags/index.xml",
    "revision": "0ff16c4ef3eabc9b7bf647fe2ba361e2"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "d939eba3664827b9e9be0f3b70d45d08"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "963937b26bf89fcc6380b547fa57bf2e"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "6f45df29304e5343b6736044430ce975"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "8917374fc91d7c79650489359f3a81b9"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "5f64757b17d239bd63a22bf24638bfdb"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "44300890f8e5689598a815bab0fec3ff"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "9c351648cbb0e309a2e9c57a2751e54b"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1ef72734c23ef313f9154deab2e8cef6"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "ac987b82f1b22400bf60cd77d593a2b3"
  }
]);
