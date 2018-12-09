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
    "revision": "d5ddc80b3930795417022f7dc99c5802"
  },
  {
    "url": "about/index.html",
    "revision": "15f826340b181d943cccc6407c99ca24"
  },
  {
    "url": "algolia.json",
    "revision": "88d5b58788efd920bd98301510e6c9f7"
  },
  {
    "url": "archives/index.html",
    "revision": "00df9200f7fc3f9c27ecf25b1fa0bd96"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "fa043b6d4fcec09c6befb65bbd1d6e0f"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "210356ac31778193a8719e97ce821a7c"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "1dc13fbe1ef2fef085b22e1cb487ea6f"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "6ca5829f7c0d8bbf92e1f3d221c05b98"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "027d471dc190ada2a70b54f832eebb02"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "cb015c0ff2b991e09f360778de766c4a"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "02a0eac7e590c5ed27389609c07e746a"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "764e5a686036d71e21b9468fdfec17a9"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "7ea5b7bcc6fcbe7ec70a46c26083b2a0"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "a8bc896a81542386e8c1449061997875"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tôi-hoc/index.html",
    "revision": "548763153b3d45d7b48e2ec0911bbbb5"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "95b4be2504d0084e162575eb171c97a6"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "c2b6c9067e41716b57be317a76cdd579"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "0b03e7535a3e7508d74050afd4158b43"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "c860c95f735a282bf3424aa988d40a3a"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "b2d56999643aeb280d4e4bb76b1137d0"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "70608977fb5d15fe99e8e81fcda3094b"
  },
  {
    "url": "categories/index.html",
    "revision": "17ae5ec3bb8158859d450332d63beb4b"
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
    "revision": "79aad9492f3c313e9c2732dd900743e4"
  },
  {
    "url": "index.xml",
    "revision": "8c9d7c1cd8ee18630ed0fc44b064d5fb"
  },
  {
    "url": "js/anitya-component.min.6d8d703ea312b20afb0dd5dea619d13c2d4eb592751883942f8300cf4edb4722.js",
    "revision": "d5d60a0b028d71b96984c702f9558c43"
  },
  {
    "url": "js/anitya.min.73005194729b4f433e31a0696c86448c7935999d61bab1aa54c7c88cdaf707ac.js",
    "revision": "0126a0be6c2386a998cbb85257cb4ef3"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "5e74467bcc120222e7ffcfa49d256044"
  },
  {
    "url": "page/3/index.html",
    "revision": "067598a4bdd1919e77ade1667acae680"
  },
  {
    "url": "page/4/index.html",
    "revision": "ca643aeca13fb3db6b21c943adb72ef3"
  },
  {
    "url": "post/index.html",
    "revision": "866a34a94883f1a9351481071a4230dd"
  },
  {
    "url": "post/index.xml",
    "revision": "807fa096db924ea7fe4885c7ea46563d"
  },
  {
    "url": "projects/index.html",
    "revision": "4fd231ef8cd022965a7e8fdfc7cf0ce9"
  },
  {
    "url": "sitemap.xml",
    "revision": "c013c935bbf06adf33d652bfd7e3a195"
  },
  {
    "url": "tags/css/index.html",
    "revision": "926d4d21c253864c31c32de5312c2e09"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fd2de10295f8fa2ed1e3ee87f58be3f3"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "729d6a148901dbf9a7551920a9606157"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "55107a03e973ada5b23390263148badd"
  },
  {
    "url": "tags/index.html",
    "revision": "a0672645056bd5b7e943473ae82d57ed"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "d10cb8343fd20bab5a9f5faeec918825"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "db390bdb4d617638c22a853e6ccded73"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "e8e0f4536fdaee3b5d1e2e87cdb25fcc"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "2471fb040bf5511ee76b6fa5f07af218"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "5fe4e3bfe38f8c9b73e343493cc1e561"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "428939205356ef99b6184e616fb36537"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "797b35d7889741cf4c4f891962e844aa"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3784ddeb75b82a9d889ddc458179fce4"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "be4a7f25f735fdf1dd0cd30884d7904b"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "4547b0990e70467af5d74002fa7e10d6"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3e7bb8ea9a65068aad98e5e44f098227"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
