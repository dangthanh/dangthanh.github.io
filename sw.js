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
    "revision": "83ac9788aa5ea66271bab62d1c9c2484"
  },
  {
    "url": "about/index.html",
    "revision": "4ab3fbc36bebbf14d712487450370433"
  },
  {
    "url": "algolia.json",
    "revision": "91f58713512805cb7e6f69e875073e6e"
  },
  {
    "url": "archives/index.html",
    "revision": "1d46f4b61a4d2b8cc16751282c3d6707"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "b5d701fe9c32e0b8fb828e7c7e446a76"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "3bc7fd92d71a2b402bc25b024c4b1cae"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "120bf3cd94a462c7eddab27d21bae0c4"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "84e2632240a8de3220a0e13634cc04fd"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "18cfc59adbfb0c28986b4077b18dd7e4"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "f083e017d44c3b4720824c1727b299b2"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "1df0ef9a8acca1452319df490bc0814c"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "b0c8d159a23b429e155cb83caf861bc6"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "4fdb41311e1ab3efdf62074cbc2c276b"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "fa23e73f60fe18e4cf857526631930f7"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "aeeaae980f5fc266b8c9fa3263edb800"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "822e119c83c3ff0a4ac1bbfaf06bd8d0"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "b8420be6ed931dc38caf555607627a20"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "1250774ff6996111b33dbd0703546490"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "84d4efb44f474c5cbbdd76470e7c81f2"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "62082e7ba9bd8ab0b56e456825e2d6d1"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "1372a6db09aed84a83c00058ede5fe60"
  },
  {
    "url": "categories/index.html",
    "revision": "e5facaa7d604f65fc55c8ce39da116be"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.31f6b7b578c61708d07b41bc7ceba26a1ff901003c7f14a0bced2247ed67218d.css",
    "revision": "159447c4bf7c8ab8f7fa85293b2df020"
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
    "revision": "eff30197dc45b4c6dc013e64d984eda1"
  },
  {
    "url": "index.xml",
    "revision": "61bda19f48e08f55220c81d842788a96"
  },
  {
    "url": "js/anitya.min.b0e2278ed7e15c035a16767ad5941d511033c93bbc5cdb84d379a4d1a1ebe309.js",
    "revision": "7b31e70927b20158b979717134d84683"
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
    "revision": "9aac1674bf9580936a635e795f46b4e6"
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
    "revision": "22062f62c161ecc4dab865059be799d3"
  },
  {
    "url": "page/3/index.html",
    "revision": "212612cc7712f6ea51046d53f5c1ee50"
  },
  {
    "url": "page/4/index.html",
    "revision": "9e480abf40da5c6d522af95c96f241ff"
  },
  {
    "url": "post/index.html",
    "revision": "4d7c6744d2ce9d364586fa9f4a9d468d"
  },
  {
    "url": "post/index.xml",
    "revision": "f8df27f1c32ad023dabd81d127363aab"
  },
  {
    "url": "projects/index.html",
    "revision": "cc484e065ef922b76a68208b052964c1"
  },
  {
    "url": "sitemap.xml",
    "revision": "70d275609c0fd0c665e0f7ef3433be0f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "f18ebbb072a822606c9c97b4d0a8c3e9"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "a710e911659f21c5b74a078af5483e92"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "5c6324c1b857b19b68ba3c26330d1e29"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "69cdd12d04bddd7cca4fed907d97e26c"
  },
  {
    "url": "tags/index.html",
    "revision": "eec0ba16d558f7dc808727cc156a9eb8"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "3f949f062668284b574c338553ce7a8f"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "5bdd17da118c4ab3be3c1cc112a88f79"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "89e9524f0a5a21c4d0d753ef646f529b"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "075558038177c92b2940ea11dffcf344"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "152a5749a5cec9556970f7a9f4742c29"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "74a2d1dbb01ceb660dd63a16afd8aaf3"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "a3601995fbd341a6e699b6908b2ea75a"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3ec12bb59e9042a8b1701e32c010205c"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "4fd63361c2bb5b9867ad590d3d9b194c"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "7e51966a3c0f8f3d7982d99b00f57128"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ac43a909e5c233a107f2fe455254b4fa"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
