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
    "revision": "b0ec9b9281047e64085298652c88adb8"
  },
  {
    "url": "about/index.html",
    "revision": "b7733b3243fd02a62fa3d5b11c89eb4e"
  },
  {
    "url": "algolia.json",
    "revision": "2c1cd5dd99e50a9982c669591ce839c8"
  },
  {
    "url": "archives/index.html",
    "revision": "83844136bafd4a05d3e2e8749289f877"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "9d662e187a60838b00e06cbe4bcbfa51"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "2e277eec5a3ce9093f387802a50a925f"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "0a1aeccff14ba2d15d92d5a76c8bb86f"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "2b580e8e49746fed0c2194e8d8fb2505"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "6dbb689a8fc38e3466d9184af3f382f7"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "da25b2f22c1652dc05dcf5269a7e08d7"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "cba779690416cf31bad7a927c7b56b24"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "d7f56d2f333546905873bc20a764cba9"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "2aa812d23efabd87d2f1382371ebfbe0"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "9acd1bf0bc3e069ab637e13a3b102861"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "3ec1285ab263c6f27d6d5dd4d96fc7c2"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "729ecef325ff205f7f3716d32beed771"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "e0711427469dcea8d3dc44aea298da35"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "b4fa141dde11e5375bdfd41c1e4c384d"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "3c8c5f28dab3807a501c6f6435b7d88c"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "e18a895e407eed6cf30eefd90c4c1c93"
  },
  {
    "url": "categories/index.html",
    "revision": "2dee6c78812e78d00f9352925f4be493"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.4d35951a97d10f7f28a06a7e5f2542b647f98fbb1290c279c3cddbe17fc4fc34.css",
    "revision": "471dfe6430f04d1fe3cb29b0c193814a"
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
    "revision": "bf142a9cf31c86f8d3af010dbe8876a0"
  },
  {
    "url": "index.xml",
    "revision": "f12f2ac63e232806b1fe648c59c9d753"
  },
  {
    "url": "js/anitya.min.40ac9ea14207cae78b12e98b4709709dfb3d56e2f9bc6c6abbcf5652b2deecbd.js",
    "revision": "e7e36c36217b451ce4a99d01cb619f49"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "0d84dfbf9a2e636305bef529590ca593"
  },
  {
    "url": "page/3/index.html",
    "revision": "244587388f2514656c311988f478c307"
  },
  {
    "url": "page/4/index.html",
    "revision": "e979c7908e73c9bdb1b081ee0df584cb"
  },
  {
    "url": "post/index.html",
    "revision": "5f31259b0f18ee2cdbf231a591339799"
  },
  {
    "url": "post/index.xml",
    "revision": "cefada6711ded68dffce2d7aea9fd72a"
  },
  {
    "url": "projects/index.html",
    "revision": "48be0d29513a63b153bc49f4e7d4fe2c"
  },
  {
    "url": "sitemap.xml",
    "revision": "066efa86a28658dfa7aa498db58f84dc"
  },
  {
    "url": "tags/css/index.html",
    "revision": "d3eaece2211bd9a5010b26536a2a18b6"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fed537b199a2b024c818a8d3b814ffee"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "7e07bbd7c4ee46b476f8be6a7883e633"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "469e9cbd8751f9051cf74a96219d9c52"
  },
  {
    "url": "tags/index.xml",
    "revision": "0ff16c4ef3eabc9b7bf647fe2ba361e2"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "d32d1178099a15b319e38833e9e3a27f"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "963937b26bf89fcc6380b547fa57bf2e"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "2557b90f106adcf8ade1207fc56ff500"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "adbc235e5bf46f51788e0a70ec6ff4e7"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "486f4ead7cb94cf021fb27b7b1e37471"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "5c50e6eddef2899aa9eb10114deb44e6"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "539bdff02a6ce2c208d6c5144e9483f1"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c6e8fc9e661c8e0754403adc3782dcc5"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "ac987b82f1b22400bf60cd77d593a2b3"
  }
]);
