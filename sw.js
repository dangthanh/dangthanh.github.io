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
    "revision": "ccafd63867bffe4869390a0c2a369bd6"
  },
  {
    "url": "about/index.html",
    "revision": "67aa879a203a0214a5368467dfd07837"
  },
  {
    "url": "algolia.json",
    "revision": "cc089ab407fe1ddfef4d39cb061333f8"
  },
  {
    "url": "archives/index.html",
    "revision": "98389d956d51599359a016892507d90d"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "6b397a9a203724a9d87a2fa877ce0071"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "e5efe81c867ea0c57f3cb09c267b6eb7"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "1e1b452f5c3e28c884bceb0e120a3d99"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "d22867e28f5e4a090fcda24e2f10564d"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "82799254098413b9684232a00ac9bf83"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "295a33313b6a1f26ba1b220364eb3f10"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "dd423ef3772f5ab0f9565515d2f65245"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "1b69bdd450c052e9e3538485035720aa"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "96c01c50c3dfc155d30ef43830032f85"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "d80b51b8732dd82dd7ba96d66a6c3c2a"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "c6e9c7977d860eec834753cce4116f3d"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "310cc672f3536af2bf2b9048df18d2d6"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "4b7753a688342113906815d109c8b2d2"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "5a22b8491cda9f8deb09b3eb880a50b0"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "a6a24b318b08a5cb8ca280dd9be51c64"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "7a7bd731be917b4814986f0697dc79de"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "b227f94ef8a7b7692a843b241121bb4c"
  },
  {
    "url": "categories/index.html",
    "revision": "aba51f3f31c0983c1cb4d8f7f73af411"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.90d891acf21b6ceba2cbd8ff7de9d103aca8f5912c4e376c2f19f515c1dcfa26.css",
    "revision": "2fd89f80df7cdf457db1817ab826280b"
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
    "revision": "94373b88661b3bd0f95252f3002e0eac"
  },
  {
    "url": "index.xml",
    "revision": "a14f59ee4fcec5cfdbaa9cdaf0b2496b"
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
    "revision": "14036dbcd279f7f716b02ba1995780f9"
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
    "revision": "e01942d5355b5ca9d1d76b2664dcf8d5"
  },
  {
    "url": "page/3/index.html",
    "revision": "1bc65df1c72aa8606e7d8c6ca8951d4b"
  },
  {
    "url": "post/index.html",
    "revision": "164ea85d1ae321d54cd72203a4222005"
  },
  {
    "url": "post/index.xml",
    "revision": "500f2067477f5b546fb1190083ba53f3"
  },
  {
    "url": "projects/index.html",
    "revision": "065d3d887dc4d2a1dffb15b0edc215fb"
  },
  {
    "url": "sitemap.xml",
    "revision": "70d275609c0fd0c665e0f7ef3433be0f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "cdc2945477ab2820066a4d391bd30c3f"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "2b7e77eac4f3438551b78841f4cbd71c"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "d0776f45802a1e04c235cc6e785393bf"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "69cdd12d04bddd7cca4fed907d97e26c"
  },
  {
    "url": "tags/index.html",
    "revision": "8278e2fec3c22dbfe09a809843175e53"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "03d708b30359eddf4bc11950fee5de92"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "a9b0e13ce840489590dd51b68a0f4c83"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "fe447ef6246dbc110f45cdd7795bbefa"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "075558038177c92b2940ea11dffcf344"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "831d2c67ec91194081bae54a02ef0e04"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "74a2d1dbb01ceb660dd63a16afd8aaf3"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "40862bdc2c3a95e2bca516ec7254145a"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3784ddeb75b82a9d889ddc458179fce4"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "7fcee9c1c047c974e9c2bb568b0d6c74"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "fe16b8a2a2310957e735fbfda431d84d"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9c4f6c15e69e2c6f28e1c15788ebd683"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
