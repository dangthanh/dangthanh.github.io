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
    "revision": "1129038557c33d62e958b9b6d68bc5cb"
  },
  {
    "url": "about/index.html",
    "revision": "5c104b8bf3edccdda40abb3178d94c45"
  },
  {
    "url": "algolia.json",
    "revision": "f193f21103197be9774ce63660ec96eb"
  },
  {
    "url": "archives/index.html",
    "revision": "db5c981012890ef9e9bb5bcc63693cdd"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "91f6bb3720950a46c5671727a9ebd5f9"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "005d4c87c655f05ade6808c41f5e5bfc"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "e3e4cfa3553d8917cc1bd9e7ff67f55c"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "574f78e0d53ae8310904ec2758fa1f9c"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "de47f47a8d0966d8a7572f39d1416112"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "b04866711961b7c46d3567a82c5d0116"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "1067616e2ad069816d59b5f2b7a5298d"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "943587b142eb4f6647975558d3f7bc8c"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "b0b19136d56b36df2de68975b7638633"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "4797991948679811ffd41af2140bdc58"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tôi-hoc/index.html",
    "revision": "499a3482e8168acb1a217972b8595e7c"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "cb4cb1b763ec52e18c4346bdc115819a"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "1270b76afd6090e48db6ad695091942f"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "6ea9daa0f2a320cc35043c53e43f14e3"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "05af41f383ddc00ad74516cea889fe4a"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "bb2872319b10f5d1bcbbc4c4e10bf2d4"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "2e27c12d8668271a5b6eaa683bd6aa9a"
  },
  {
    "url": "categories/index.html",
    "revision": "7de6fa96c3bca75f730dc83a88d30970"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.4039eaaf51fa0c132aa1099f0415f4dbed9872003b79fcd2e36f45bf2b5bd511.css",
    "revision": "35abc949fb8dda2c8200965a3d7516c9"
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
    "revision": "cd31586323f354edeb1349f82cba52c1"
  },
  {
    "url": "index.xml",
    "revision": "56c8cc798cf3fc3f1c79e9b7702fe2fe"
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
    "revision": "9a8d9bcb6c05b1f9b1f81244c854c17f"
  },
  {
    "url": "page/3/index.html",
    "revision": "bf434712b25bc741736e8968856c850f"
  },
  {
    "url": "page/4/index.html",
    "revision": "6e59f6fb52aacf04919f2561d319e527"
  },
  {
    "url": "post/index.html",
    "revision": "9e23cbad79d620a7ee20f84af9ebe9ed"
  },
  {
    "url": "post/index.xml",
    "revision": "807fa096db924ea7fe4885c7ea46563d"
  },
  {
    "url": "projects/index.html",
    "revision": "108fd7630e2637970a101bc60a7d67b3"
  },
  {
    "url": "sitemap.xml",
    "revision": "c013c935bbf06adf33d652bfd7e3a195"
  },
  {
    "url": "tags/css/index.html",
    "revision": "cb9db239ab5a9346ec96eeb799535b83"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fd2de10295f8fa2ed1e3ee87f58be3f3"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "c25aec7f6f3e830cf2284d3ea4958802"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "55107a03e973ada5b23390263148badd"
  },
  {
    "url": "tags/index.html",
    "revision": "f8de758395d737ec3bc150dad572ac11"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "6608b2af67d07d99a2fdf0c12ebe0fb6"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "db390bdb4d617638c22a853e6ccded73"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "52beb7a63b2818af2fb6eb38a61914be"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "2471fb040bf5511ee76b6fa5f07af218"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "d29029c9b0164bff4ae8bc1b5d307c62"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "428939205356ef99b6184e616fb36537"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "5c18b8de2144ccc697cee3150124faaf"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3784ddeb75b82a9d889ddc458179fce4"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "281b014218a55f32395d22a4e51caa0f"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "ebf315027339f73ce881505de899892b"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ea8e4d53e7045919a87086745748fb3a"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
