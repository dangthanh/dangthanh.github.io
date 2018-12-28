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

workbox.routing.registerRoute(
  'https//cdn.jsdelivr.net/npm/vue-instantsearch@1.7.0/dist/vue-instantsearch.js',
  workbox.strategies.cacheFirst()
);

workbox.googleAnalytics.initialize();
workbox.strategies.networkFirst();
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "99dec250f54b0ec88ad37456cdc379ae"
  },
  {
    "url": "about/index.html",
    "revision": "c825c1ed3a970177efeb6663864c9cfe"
  },
  {
    "url": "algolia.json",
    "revision": "f193f21103197be9774ce63660ec96eb"
  },
  {
    "url": "archives/index.html",
    "revision": "ad0862962bbce56ba8171fd852fd6d53"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "06fb4ed9f2bd65459886d52ec2eded8f"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "52ca9233bf98aed54c4042a25591dbc5"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "343ea3e58cb4b508d0d288d653126bb7"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "6620ef374f0c3f8a67d48e6d7c719cd2"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "885d3b3613087fe200619bd59f202607"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "409db4b2d6cf50f54a6ccc3f7a04addb"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "00e260237996b4dbe339eb8f888044ff"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "4a6bf79f1bbeae19246032b29fd33025"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "141a2621479b5cc6061ee511c370734b"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "7966677a71e97a876c11a0f1c2166ad3"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tôi-hoc/index.html",
    "revision": "4f43d0601f26c2457d33920d72b2be1e"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "5fc70cb51729156ec3be1ffdacadc96f"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "36325b50935075e36d6441f79fedfa90"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "0ac21d2384f6fc12cc12a2084fec2461"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "e2c3200adb8998b9d17fe7525dbc725c"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "e31100a4875372c48a7e5e59c3dcbc82"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "17273ecccaaeb4c888a7475a94b991ab"
  },
  {
    "url": "categories/index.html",
    "revision": "5b07c5d00eb7f875ece4065ca56955c1"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.e4144f76918b202af5341cca419b318cd38b586be6b295577ff0a52174fe8b24.css",
    "revision": "dee4a39ca9ff3308022f334065cfe281"
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
    "revision": "ee4e026c61959527407d7fc01f93ec77"
  },
  {
    "url": "index.xml",
    "revision": "56c8cc798cf3fc3f1c79e9b7702fe2fe"
  },
  {
    "url": "js/anitya.min.f8bab136bdc3eb84c50f9968181c2cad3ae70a18f78fba1cc7f2e0e721b3e7f4.js",
    "revision": "8e818a7c5439e7514487fa571f6ec251"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "ee673fd2b32465ee3f60d30e766c8871"
  },
  {
    "url": "page/3/index.html",
    "revision": "2934ada89e34b750648e3709543ee6dc"
  },
  {
    "url": "page/4/index.html",
    "revision": "b1f561e1919af9d24f10eca2cd2a60fd"
  },
  {
    "url": "post/index.html",
    "revision": "4e4e637d79a553d9808fc2e94eb724ce"
  },
  {
    "url": "post/index.xml",
    "revision": "807fa096db924ea7fe4885c7ea46563d"
  },
  {
    "url": "projects/index.html",
    "revision": "70eeb31b53b9e8724b6ac132767c5247"
  },
  {
    "url": "sitemap.xml",
    "revision": "c013c935bbf06adf33d652bfd7e3a195"
  },
  {
    "url": "tags/css/index.html",
    "revision": "f6db6f94964bf4fd222dbd4041a85f99"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fd2de10295f8fa2ed1e3ee87f58be3f3"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "43278d721c28777705f6ec80cefca046"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "55107a03e973ada5b23390263148badd"
  },
  {
    "url": "tags/index.html",
    "revision": "c227395213e465450002c836485f3304"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "553696da99fbb0fd6d7a2689f1042ecf"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "db390bdb4d617638c22a853e6ccded73"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "b393c59681ee579ce7dbf7c808ca79b3"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "2471fb040bf5511ee76b6fa5f07af218"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "26d61516bd3325c9958681be4be9932e"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "428939205356ef99b6184e616fb36537"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "6082d992c6a1a02deef68f0304638947"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3784ddeb75b82a9d889ddc458179fce4"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "db5f04224455b54e058f82907b939812"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "bb2eda38a92c63b02670e4e88ba29c50"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "cdd8d73c34c736b3b1959857cbd83116"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
