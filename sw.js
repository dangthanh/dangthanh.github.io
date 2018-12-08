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
    "revision": "9b32f3c63942771fd8d9aa0de009f02e"
  },
  {
    "url": "about/index.html",
    "revision": "6539fbdf5f3eab5f382315271716e2b5"
  },
  {
    "url": "algolia.json",
    "revision": "30d49431c8a0ad9e6650e07a99853469"
  },
  {
    "url": "archives/index.html",
    "revision": "6d74bd24f144c1f5d9a5891902589c80"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "bfba870f607d862a997e5b2d0e880380"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "9add204e3828e06fd65d8e12697ef71e"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "192f2faa6e63bd204ea3ce1821ecafae"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "9fe97f0a14f54b25e1cf0800aaaa30aa"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "2b9b975489fce17779418505a62c6e51"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "69711fa2e351080bd69bbe3a39961a45"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "9738ed54c7f65991a2c46787f6ce6c4b"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "a9061a5ad332e0106f2d00086141d9df"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "ee83dff1d864d68974b8e8f7b660af90"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "f6f0e612652c608d0b1f805fe399fd09"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "9eebdd26fdf61735d1f6864548a4f2d7"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "c401e84aec4f29f5502e7cdc828100ef"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "a8aa3d8a9a4cd180ff89df64ce7c26ce"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "c01724843eb765258008750fdfc73f6b"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "b02363420f303f692b6ade4c3c5705cc"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "3510bb76c04b353661c5a120cc056812"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "bcbdbd8f0238ee7677bf09c5c08c59a3"
  },
  {
    "url": "categories/index.html",
    "revision": "4012a91f153a29e8e76fa644db37d1d5"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.970cccd1e238e67b272bed8625e98fd30bfea791db2c2f491e6c940b3011241a.css",
    "revision": "cab95d0d2d22a18a3e992b1622ae5c80"
  },
  {
    "url": "images/algolia_create_app.png",
    "revision": "ee9b857dd00cad9d9d3601fe196532ff"
  },
  {
    "url": "images/algolia_create_index.png",
    "revision": "09a85403a4f8dfd6c3bd2cbb5d115d03"
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
    "revision": "b8c615252b62ed5153269f4549e1ce42"
  },
  {
    "url": "index.xml",
    "revision": "b6b4f03d48818efa44184aa35d4b82a7"
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
    "revision": "ef6df1ea000a31a9fe75f2e03408b8ed"
  },
  {
    "url": "page/3/index.html",
    "revision": "69666ae497dff6078333c42740b485de"
  },
  {
    "url": "page/4/index.html",
    "revision": "3285b216eaa0ba65e2e14b76a1b49eae"
  },
  {
    "url": "post/index.html",
    "revision": "4983943f1dd9d280afe60e5a4cecd0d4"
  },
  {
    "url": "post/index.xml",
    "revision": "53d5a69cd6aa315b131285ce29b128a3"
  },
  {
    "url": "projects/index.html",
    "revision": "8ebce1627f1ec66769005eb99eff26ba"
  },
  {
    "url": "sitemap.xml",
    "revision": "0463d84b92baad3faf64735b13acee6c"
  },
  {
    "url": "tags/css/index.html",
    "revision": "28f47b3ffe4253c1ddc66d50902fc917"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fed537b199a2b024c818a8d3b814ffee"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "47837bdca87e9a2dbf23798f4725e0a9"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "6d49e4a03decb3e0665287d0e9666ad9"
  },
  {
    "url": "tags/index.html",
    "revision": "0523ccf3ac1b75053295204330f9cd41"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "4526a42ec0a73707ce6992f904dbc095"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "e00b9ac0a6dfa2208c17514b874465fb"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "922c5072231018cb405bf7982b9bbed6"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "eb175f488b49a72631046ef644a0f266"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "12d545e0425ef1db33d5a8915c764d50"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "be2187a3998ce6e5b3ac8e026e9fa1fc"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "8fab99d7f58d5084d7d20c3d8bc28316"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c1ca6a1b4b27e7be10089933c87016e2"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "d8e8dbada5088bcec4617b7a39b55129"
  }
]);
