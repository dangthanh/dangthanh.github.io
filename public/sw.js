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
    "revision": "d9165f51e35c0cfc01ef15df27ca62e6"
  },
  {
    "url": "about/index.html",
    "revision": "ef1984e04f64dd85698b3786cbbf0b8a"
  },
  {
    "url": "algolia.json",
    "revision": "ee779d98cc7cbe4f244f9ddb703d5e7a"
  },
  {
    "url": "archives/index.html",
    "revision": "00a2477d5d95b8213f02d1278c5db696"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "2adb73f3225306db2849e965a485dcd3"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "9f081cf9668122fe8128dc9ab46752b4"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "86c6de12e3302f92a3e00644de24b9e6"
  },
  {
    "url": "blog/classes-javascript-va-vue/index.html",
    "revision": "fc9d71824b9e9ae5baa8fe19589ac91a"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "501db6d260e60ff87f8401bd6f966538"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "c9b260ce59f38836d5526aaeec8db3e5"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "a92666c268f66159e34cf9f6e7b90be3"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "9026156d8a04c8702e29255127bdd91a"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "7e524ca3c1565c2699b2cfdfec5a6f77"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "fe6f830274ec0f5216d63a8a41ee8aaf"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "5c9bdd78e3d6b1dde567d1ab80416362"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "7a7875bca74ca28da5e7a1b9e355ebf8"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "016955c2e79f3748b6e9ed2779947624"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "d8cb69891064d4def43d4f77ba767844"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "8fcb0ef4bd462b5ca3852e305a57c44d"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "4997c2860acd5819643fab392f45680e"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "dde37bd598c0fdd02ba65c1259d7ed47"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "11621e581e1bd2c755919a337d8e6436"
  },
  {
    "url": "categories/index.html",
    "revision": "ddf6b3d4b8c68a9e8489db0cd3cf4d0f"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.fae8a8668f86bb7645232066a03dc8246b767c120a851e8e61d596ec13b1d6f2.css",
    "revision": "fa1e3de2f980e57d3be7065c2323a613"
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
    "revision": "e38beef6dd3f0a578d5b80bf0449fd24"
  },
  {
    "url": "index.xml",
    "revision": "9e6656b5b263ae6c8715c53e5ccaed27"
  },
  {
    "url": "js/anitya.min.87d36a8e442765e0afc75780d52177aa07a30cd3414aebbd6e21050cfc3b9355.js",
    "revision": "23fe4c95f1358bf1b0eafbf814136aa0"
  },
  {
    "url": "labs/base.min.08dc0a7a3128be3b1595e79d38d54f7be4c899f71fbb84353aeb39d90c2b2da5.js",
    "revision": "d5bb0ceaecdd8e26e621c7c8e2e72855"
  },
  {
    "url": "labs/base.min.0b980d31098fdfcec59a2987f9d5ba6d336ebc5bdbff27813def484246f7082d.css",
    "revision": "2762b78d20d3864232a17d8eec6a4170"
  },
  {
    "url": "labs/index.html",
    "revision": "87966bb01cafdf54447e973d086b3750"
  },
  {
    "url": "labs/index.xml",
    "revision": "220626041d975f43b20c97ba98228b40"
  },
  {
    "url": "labs/longshadow-jquery-plugin/index.html",
    "revision": "fc4d2f75ecbf478d74066d7d2e7fc697"
  },
  {
    "url": "labs/longshadow-jquery-plugin/longshadow-jquery-plugin.min.b8fa0606111e921438e5de41deaa23abcb669550d287c559718b1675b5181859.css",
    "revision": "cb5958edb1009006df2f8dda96d3772a"
  },
  {
    "url": "labs/longshadow-jquery-plugin/longshadow-jquery-plugin.min.c7c0e22f448db63df35f100b0c93ec1b743fe716e3afb7793e95fe3e83790e60.js",
    "revision": "2a76f6bce7966cfc01075580c73707ff"
  },
  {
    "url": "labs/tipsy/index.html",
    "revision": "4218e57decf972c2738dadb80952b73c"
  },
  {
    "url": "labs/tipsy/tipsy.min.bd630386b0a49bfff3e11d0d65c31fbdd556a9ae1036e4d9237b72f10d7dec51.css",
    "revision": "21c850f7f30aabd2d1353b815e384ddd"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "9925bfe040e449fc878d96b2764cde3b"
  },
  {
    "url": "page/3/index.html",
    "revision": "b0849de66e376f6e73ab17f533ab23ee"
  },
  {
    "url": "page/4/index.html",
    "revision": "6039fb3d59624240ca77056a3a3144ee"
  },
  {
    "url": "post/index.html",
    "revision": "31135c0896e25eb3166f1dd73e2df8b0"
  },
  {
    "url": "post/index.xml",
    "revision": "ef23ffe675f608a47a8773f0d5c6b8f2"
  },
  {
    "url": "projects/index.html",
    "revision": "1f60af5312fc1192e901610ca641d2ae"
  },
  {
    "url": "sitemap.xml",
    "revision": "db6cdbdb725c792385e5f9f8abe2dba6"
  },
  {
    "url": "tags/css/index.html",
    "revision": "e41684117148d2c8751e5d72e85d2008"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "a710e911659f21c5b74a078af5483e92"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "f3c6459b2011b671f9c9019871e46564"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "69cdd12d04bddd7cca4fed907d97e26c"
  },
  {
    "url": "tags/index.html",
    "revision": "739f46c5006bde75bc2ee080d1a81398"
  },
  {
    "url": "tags/index.xml",
    "revision": "f95ff285782a43cc6ea36d4c6afd2557"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "e7b68a8f499be5639e63798f60001238"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "8ca0bce3c195f03978931581666ea6e4"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "38d0b0b706667e4ebadc33c640055172"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "075558038177c92b2940ea11dffcf344"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "99337d5d210c757ee3f551ab76126c05"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "74a2d1dbb01ceb660dd63a16afd8aaf3"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "040c1b625a73351081b84aaaafc6dc42"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3ec12bb59e9042a8b1701e32c010205c"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "cfa8f8177ff00482a94e34a3a0f1e444"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "7c45ae3952558c2e4043cc3cde5a752e"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "dcdf516bad135079e7c8ba8e30e86a1f"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "852bd5ca902f9805a6827c15260e91ac"
  }
]);
