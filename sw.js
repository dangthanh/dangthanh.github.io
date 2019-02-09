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
    "revision": "d15cbb00f8b1fdca701492bafc549713"
  },
  {
    "url": "about/index.html",
    "revision": "be711e435679db7223b0e276e6585e50"
  },
  {
    "url": "algolia.json",
    "revision": "91f58713512805cb7e6f69e875073e6e"
  },
  {
    "url": "archives/index.html",
    "revision": "aee2a2d25c3cbe6f63107b2e5fa8c716"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "31fcfd9626cde80f6ac955825037241f"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "87b812862bee69640c6958a21fe96338"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "8edf17de9884c1fc1bb2ea6264cde102"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "d41f6e26cd2a4de9273b6f05e1667c21"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "d273dafaede4766f179ce8cf3b50ed75"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "05b22aeea1389cea8c5a752e9e3b451d"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "5cd08b4a361f33b7014464849ff2f305"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "b82065d31999e7da799cc0a2a375dcc6"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "09e09f4174c448aeade524ce89bdd882"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "78eb20a022c70b9b4974f6c07ce39ee7"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "e6625d8398090e017b80ce56b1bade4b"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "0a3553853df05d648d6d45abe3714629"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "a3b0c73eceb40fea5c9cf57578815cf9"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "9d4b03867f2fc7476cca4fc817879a78"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "127b842c0ee0c5235ed800fa3e0f6ec5"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "2f19482206e3e175ef59d39510c7594e"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "98e2a04cb9a1e108378bfe09b1ff328d"
  },
  {
    "url": "categories/index.html",
    "revision": "0eb7b528e215af67d6cd9bd9fa74bfb7"
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
    "revision": "8a975cf6ea09b113fa66c7003543216d"
  },
  {
    "url": "index.xml",
    "revision": "61bda19f48e08f55220c81d842788a96"
  },
  {
    "url": "js/anitya.min.c0ce56129619f9a4321ce92360d85884e71f628e4a9a2fcc559f4b54dbc37654.js",
    "revision": "6dadee6db31c81bcc422747e9dc5f72a"
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
    "revision": "c675f7f9f275a021bc7c5ea2096d5d79"
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
    "revision": "9a55113ee0c446c71bb87929f49e853d"
  },
  {
    "url": "page/3/index.html",
    "revision": "1b13d0c48ad3d99485400ff74fcf6b1a"
  },
  {
    "url": "page/4/index.html",
    "revision": "c0691245543f350d0a9f70893ad83173"
  },
  {
    "url": "post/index.html",
    "revision": "69b0489735f615ca8295a9b2983bf978"
  },
  {
    "url": "post/index.xml",
    "revision": "f8df27f1c32ad023dabd81d127363aab"
  },
  {
    "url": "projects/index.html",
    "revision": "4610dcde5168809ae3f1cdfb85cc741d"
  },
  {
    "url": "sitemap.xml",
    "revision": "70d275609c0fd0c665e0f7ef3433be0f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "bf205cc19380869dfeefa1bf2fca0319"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "a710e911659f21c5b74a078af5483e92"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "0462e2fa6e0462a93231e4330e768056"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "69cdd12d04bddd7cca4fed907d97e26c"
  },
  {
    "url": "tags/index.html",
    "revision": "61df8092811b6cfcc39c68f2117ba8c7"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "c3d2d7658754ae4b525dc78d3b71b0cb"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "5bdd17da118c4ab3be3c1cc112a88f79"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "5620d0607436f12fe871448359992879"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "075558038177c92b2940ea11dffcf344"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "d8b02b4132e73a2add85b4cd2e6a2825"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "74a2d1dbb01ceb660dd63a16afd8aaf3"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "db31f74e2d8f2db552b57af1cd19f793"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3ec12bb59e9042a8b1701e32c010205c"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "04ccbf5914eae512d7a419d9ddc8aba2"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "d47d32d5e08d1edfe34d18df7c952ba9"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2c4a571bafdc16cf7626775317f8c54b"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
