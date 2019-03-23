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
    "revision": "f1fe5d6b300ec2fb1cdb1d00e6e9dbae"
  },
  {
    "url": "about/index.html",
    "revision": "9a4c4a4153e92fe68b9b54dc4703789e"
  },
  {
    "url": "algolia.json",
    "revision": "ee779d98cc7cbe4f244f9ddb703d5e7a"
  },
  {
    "url": "archives/index.html",
    "revision": "b821cb27eaf97fd6d2bea9a502b4dee9"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "1fe27a6f20fd2cff109dce0e1fae8e83"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "cabc99273b0fe4de31639073b12daa54"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "38e5ce7045e46f4c83e7bd8391e4a761"
  },
  {
    "url": "blog/classes-javascript-va-vue/index.html",
    "revision": "13c5155fe823dba42a052aec2e90a543"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "54fd4e6c3385544a07d4e43314d9d1b5"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "451dcfdd45219dc16f08380f729527e8"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "80a8cefa76399048de7f8e613b5c95ee"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "6f4ee556236db0c4a514a8c1a1279354"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "441cc996f9da22b86acc23f526266963"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "34e8dd20af9f1616f358bef6c5637483"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "a99379edf3c576381f7f501c16aee652"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "89165ef719a744463bd13a2dc45bcde7"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "e7eb9497be3541f6eb613a265a753c8b"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "557c6f813cd75c3ec6105bc6a18c3c7a"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "0d597e65db40070bf0447a1483495a83"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "0b2459a9169c70443e6f50c584471381"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "1056596e3376a698d732d3ac8ed4b460"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "0f717ce2059b6396c0dbac06a2ae7800"
  },
  {
    "url": "categories/index.html",
    "revision": "85afcfb1ea83a1e3f1f53b9496aaf481"
  },
  {
    "url": "categories/index.xml",
    "revision": "386333cebf890b5b23dc859de56d65d8"
  },
  {
    "url": "css/anitya.min.a847b8197b90569a092353c6b97ac8bc09ef0e805879cd3853500c24f4416742.css",
    "revision": "25433da3d26df74ac595f88a4e936cb3"
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
    "revision": "1f6570db98e6a09ea95d63cd438c522d"
  },
  {
    "url": "index.xml",
    "revision": "5a11ed51e5a5c25efd246350c84c2860"
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
    "revision": "36b4cc666dc5a222b2d97e8834699189"
  },
  {
    "url": "labs/index.xml",
    "revision": "e376995e6adc7ffda3da8885e78696ce"
  },
  {
    "url": "labs/longshadow-jquery-plugin/index.html",
    "revision": "168ff4bfc17242bb9909be257381be09"
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
    "revision": "ed53060e53d03585430a52e9bd051f86"
  },
  {
    "url": "labs/tipsy/tipsy.min.bd630386b0a49bfff3e11d0d65c31fbdd556a9ae1036e4d9237b72f10d7dec51.css",
    "revision": "21c850f7f30aabd2d1353b815e384ddd"
  },
  {
    "url": "page/1/index.html",
    "revision": "96d1621a6e9b366b88736b1ca7f38b78"
  },
  {
    "url": "page/2/index.html",
    "revision": "fa84152a7a38b73f31686e3f22dfd083"
  },
  {
    "url": "page/3/index.html",
    "revision": "992089328ed66349b88a793a20020d90"
  },
  {
    "url": "page/4/index.html",
    "revision": "4e61bd4a286f2af62221e123dde463f0"
  },
  {
    "url": "post/index.html",
    "revision": "1a646243383c8c6e69e8e43e02da672d"
  },
  {
    "url": "post/index.xml",
    "revision": "95e81913781ca206048663e7468e1f2b"
  },
  {
    "url": "projects/index.html",
    "revision": "4d0bbf334e7901ef815269ab2b61a122"
  },
  {
    "url": "sitemap.xml",
    "revision": "3aaf0abd0e3101fc376a325e8b339e65"
  },
  {
    "url": "tags/css/index.html",
    "revision": "9aed67ac9c4e0f00afdb1887740e50ab"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "beee56434646eecef61a2eeb10a3f811"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "c52372ed9e2dc4a9de054d3a037cb79c"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "bca14116f3aac7e4dd6bcdae053e7068"
  },
  {
    "url": "tags/index.html",
    "revision": "7d9df9d636c09db6223f9f10ba527e6a"
  },
  {
    "url": "tags/index.xml",
    "revision": "c0e383a5b4828e13b44fd4297edaef05"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "8faf8800b1f9f12a41877d8bfc2fa52e"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "e39459a620005494e7846e58584ef115"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "ec44df9051e277bbc9c550343f1ce066"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "7a776781e503a5e72f33dccedc769dd1"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "165cfaa8dff0de75ea9eb46b74f56efa"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "21a5e7a1033cf52b580527a8d579a270"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "003d8c96999e53d39a4161fbb1bf942d"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "b140d42a5b7ab759ecb0c917673d474d"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "22426ac1eedfc85fca88e45214cfe2a4"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "297a95cddd97a3610918d695678a8ec1"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "7a165923d33ebdae9273549dd1a733d5"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "d2c2b804a98cfe15b5685403ee9d876e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b1c6d408d5334d8b64b2a4ab80aedbe3"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "74435ca3ab4eb5807aceed709d69cf02"
  }
]);
