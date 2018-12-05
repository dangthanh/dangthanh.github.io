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
    "revision": "3abddc4a91c2d1b4c648b126859ec10a"
  },
  {
    "url": "about/index.html",
    "revision": "01c953cec42eecb7a7d17e67aa33afab"
  },
  {
    "url": "algolia.json",
    "revision": "83e3549e2e39a6161842b115ff988a62"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "eaef3e6d2395e2403cb7eb4c77dcd03a"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "67a9670fc69063e8a9aa83c4f0a515d7"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "fc6addff5166b613d1f0e47a959819e8"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "593c906693dc84abadf002b1ca02c43d"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "ff9a0e73721f80029ee830b3ae3ce116"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "c2c777570c7615e7f3f11543e6622f60"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "2a76a0f11cab1b2e39597c9b01a71832"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "0e77521fedcf450069ccb08cd4bebb11"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "35b3271818118776078b0df7a3522ace"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "973fc4ce405ee533f59213432546ccd0"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "8e5c97e5d39143151640be04f5b0c610"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "b536237b58f9a78a2ed4331c49f259f6"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "2415a42d3eb3f45d40c71a5aeac22832"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "8b9d033454d5b69a79d9bc834a301f64"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "b9c749bd1f621383c79f1b1bbe3192de"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "e91cd6351bbcc5d7fc75ead61c18fa31"
  },
  {
    "url": "categories/index.html",
    "revision": "be691e95e78da78a905b46cee15935ba"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.5cd3b75da990dab3edebac43f693697b4de178a074c8f97e10d6e41a5a08cf84.css",
    "revision": "43aad11386e375f34156d2161c25d1e7"
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
    "revision": "125fd78d48208024c86f85c565c4b6bc"
  },
  {
    "url": "index.xml",
    "revision": "decf3a2fbe57b432e54894d19e2dec6f"
  },
  {
    "url": "js/anitya.min.da904f651a9aa5dd4485edcdf7cc26d2050c5affee32f6590ca476763cb85939.js",
    "revision": "2b88117710664b1c34566bb3b01f48ee"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "bb72fa6dda87c0baf2665a153eb528d7"
  },
  {
    "url": "page/3/index.html",
    "revision": "dae94f910972401f06ae8bc6e529d081"
  },
  {
    "url": "page/4/index.html",
    "revision": "8c8f29d81075dd870004be0675db6e4d"
  },
  {
    "url": "post/index.html",
    "revision": "4d6e62cce6aed69055e565a45c217cea"
  },
  {
    "url": "post/index.xml",
    "revision": "cefada6711ded68dffce2d7aea9fd72a"
  },
  {
    "url": "projects/index.html",
    "revision": "fc5153c2fd17ff2fa4702261880b5a0c"
  },
  {
    "url": "search/index.html",
    "revision": "cad23ee341b8cce4b0693fc4ccd0f857"
  },
  {
    "url": "sitemap.xml",
    "revision": "94a2d23bbc259a6c35be4c6a8e8c4e81"
  },
  {
    "url": "tags/css/index.html",
    "revision": "bdc2cf5211794257838b218ad15167fc"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fed537b199a2b024c818a8d3b814ffee"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "82e415d5ce5121a4a9d9ef141066c7a9"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "b2f71be936e87ac9bbbf3f570d013e97"
  },
  {
    "url": "tags/index.xml",
    "revision": "0ff16c4ef3eabc9b7bf647fe2ba361e2"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "2432d4e323f1275ce20edc0368fb2b86"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "963937b26bf89fcc6380b547fa57bf2e"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "c67b602f399fecbb2ef127e44a3b07b6"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "8fde7553639b0f2570369ef300aced1c"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "27720ff5b18ed4bc380649ba5ddeb187"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "e0a1bde807a0aaee36842f148509d6d6"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "4f3d5f19e613845f274b20a31fb1da7c"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8fd3b1e45ed47d9a455826c342e02d41"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "ac987b82f1b22400bf60cd77d593a2b3"
  }
]);
