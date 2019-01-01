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
    "revision": "721f615341d870f85cfc65b9d03c9ca6"
  },
  {
    "url": "about/index.html",
    "revision": "de63ba2ae839cc58cf9a22f8d8458acd"
  },
  {
    "url": "algolia.json",
    "revision": "f193f21103197be9774ce63660ec96eb"
  },
  {
    "url": "archives/index.html",
    "revision": "c7115828874c9cbf37a5516a98d88ff4"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "33a0c272abd7a8e4f5fb6d60b080ccb0"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "5d5637de05fb35eecbf5301468c75c89"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "28e7f4975646853e80dd2bbbfa7c80c0"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "10d54e7a62e306b3d69f26dd76aa4a70"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "6988fbbc379eb3042832a0f423467203"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "528b7e0f171d71563db96eb4fd226e63"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "cc7f900bc997002ff12750176843c088"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "8eb4eb0a1037667d752055b8ab27b738"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "f69a68f0462e959827310abb8cb5342e"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "1daa85a986dec46bc24172f0e5d0df5b"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tôi-hoc/index.html",
    "revision": "9e564d353afe0f89d2ed91ff3543fe6d"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "be61e3865115f5bf0a210f38b078f789"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "a2273f67fccbd16c9d8272efeec357b6"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "20091c672f9c333726388ab2cb7efeba"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "87ef6122a2ceb5ba9b65fdeab3248dce"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "144546801e9e8571a6f4359d3e692ef1"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "b96a0f1253a2b9938bc32e7d0e332edd"
  },
  {
    "url": "categories/index.html",
    "revision": "44bc53bb56292e370db7e194b6b3b803"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.7e60b3cb4ffa5aa102c6e8bea21e7a53f08737ba29652ebc955b06e8d8f7cfdf.css",
    "revision": "3f6acc1544a5de00022c69ad320cad10"
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
    "revision": "82004e8205a65ac6afc332e0aa5eccf2"
  },
  {
    "url": "index.xml",
    "revision": "56c8cc798cf3fc3f1c79e9b7702fe2fe"
  },
  {
    "url": "js/anitya.min.b0e2278ed7e15c035a16767ad5941d511033c93bbc5cdb84d379a4d1a1ebe309.js",
    "revision": "7b31e70927b20158b979717134d84683"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "e3ea4fb2ad3b7f005422af2e11029e08"
  },
  {
    "url": "page/3/index.html",
    "revision": "987c7a96723a53b2af101ce2a5310c54"
  },
  {
    "url": "page/4/index.html",
    "revision": "cdde465ec3999a12a6e1750e37729f60"
  },
  {
    "url": "post/index.html",
    "revision": "6c3106ccfe6622f6ad24af2ea5a18874"
  },
  {
    "url": "post/index.xml",
    "revision": "807fa096db924ea7fe4885c7ea46563d"
  },
  {
    "url": "projects/index.html",
    "revision": "8f481af075d83da563f183e9ef2b9780"
  },
  {
    "url": "sitemap.xml",
    "revision": "c013c935bbf06adf33d652bfd7e3a195"
  },
  {
    "url": "tags/css/index.html",
    "revision": "b42f2eb6ac0dd935cc851cfbeb5bca46"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fd2de10295f8fa2ed1e3ee87f58be3f3"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "8aa8d687bb05ce13b95427ffaf3392d9"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "55107a03e973ada5b23390263148badd"
  },
  {
    "url": "tags/index.html",
    "revision": "9ba9cf71e03700ce9cddebe0ab3e8363"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "ec1cb9160b89433dcfb1e5604a825746"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "db390bdb4d617638c22a853e6ccded73"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "9e97de2a767da1adb233a650b14ef516"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "2471fb040bf5511ee76b6fa5f07af218"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "dec3474357fb4fefd3bdb990b2564c8d"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "428939205356ef99b6184e616fb36537"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "310dc7d5348614604fcc34cb0da8aa11"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3784ddeb75b82a9d889ddc458179fce4"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "cdcbae8cd0ed9dbb4e17d5591c06e14d"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "79a15f9fa19b84e34788f60b641531dc"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3b372324ed82956918e74d0b07cb8d8b"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
