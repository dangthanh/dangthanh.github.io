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
    "revision": "2fe2d517e915b55f581d82f4f26a0279"
  },
  {
    "url": "about/index.html",
    "revision": "9aefe0c5b11ea6e49a5f80a4f3953700"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "a206ca955e584f43fb22032ea2ed3934"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "b65bc828bebe829ed2a2df62254ec87a"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "e2ee245a93eb7f209c0ae50c6b1c77e1"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "29b58d757a71352cc0ad25c24bd53f88"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "ef3a1048efa4c6a512c50df291b0b152"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "5fb78260643ae00fabb615dc9ef02c30"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "136801079789212d2aef55fb028af18d"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "aa842daebf6b44d7c2839232ff58d4fb"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "33bb0ad4a4d262edaabe110ac7823571"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "9e12ff976b4406ef00ca3dab44e0f5ee"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "31c401dbe10f3aece045704c7e6972e1"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "5800158e53118265ec77da84f1e1e03b"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "29efba5440f073253a399a88753f6102"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "419122b25f3f0bc927dbad9c8277f6f3"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "9e1e0553bc371cc5ef3bc32fa8687a62"
  },
  {
    "url": "categories/index.html",
    "revision": "0c61af1c878c2663f0df490fb5e801da"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.b9ea1e4344bb1863e4e2d8af779e041bf1cfe4e34caa544b51cf04ede4a80b39.css",
    "revision": "937a05d0e05c424a94758fdadde3300a"
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
    "revision": "d7dfeb04517eba78f5b82499f76eee97"
  },
  {
    "url": "index.xml",
    "revision": "199ea68fc596d8033c0f1c510be95759"
  },
  {
    "url": "js/anitya.min.72210058bd1aa87963f8d6d4ba6fd9e78c65d4eac4054982b312045cfb02bd68.js",
    "revision": "9df601c144af76ae1e53e2c8d1c7243c"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "9c9bb2e3087aad87403364d795692f3a"
  },
  {
    "url": "page/3/index.html",
    "revision": "c5369c66898b9fbbf434e826c1a52423"
  },
  {
    "url": "post/index.html",
    "revision": "686dc515ef9dd5cdc71c7fcc262a4751"
  },
  {
    "url": "post/index.xml",
    "revision": "a755da49b15db3a0f15175b2e8c85bd5"
  },
  {
    "url": "projects/index.html",
    "revision": "2aa68a5c7cca0cc476ac8c4c118f2bec"
  },
  {
    "url": "sitemap.xml",
    "revision": "9b23bd287a4fc1f81a6661e88eb151ae"
  },
  {
    "url": "tags/css/index.html",
    "revision": "110739cae7c76f670a4a8ba0bfd30260"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "297f024fc7549d266f76217c686bd647"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "36499e2ecea90c39645a41d6611ed02a"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "21b712824864f61cfc91daa197eb5dbc"
  },
  {
    "url": "tags/index.xml",
    "revision": "c18b5a5b89d540ff499cb72e930f67c7"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "e4cc9b0d7d8d193b6d4d43d3e6c07457"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "fd230d00b73361947f5fb558792ed5a0"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "2e387d6369d61a3a3fea5508bbfa75b8"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "d14401fd27137655ac222b3285b4f9bc"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "73d95cab64e88213f8bc136f376879bc"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "35260f026d0d6c2fb2670191fc79b4bf"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "a20890f0206bf8c5fb4794023d1dd339"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  }
]);
