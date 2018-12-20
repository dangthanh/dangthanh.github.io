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
workbox.precaching.precacheAndRoute([]);
