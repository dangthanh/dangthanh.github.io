import {
  getLinks,
  getCanvas,
  getLazyImage,
  getBeforeInstallPrompt
} from './utils';
import Appearance from './components/Appearance';
import Caniuse from './components/Caniuse';
import Archives from './components/Archives';

if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(reg) {
        reg.onupdatefound = function() {
          var installingWorker = reg.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  console.log('New or updated content is available.');
                } else {
                  console.log('Content is now available offline!');
                }
                break;

              case 'redundant':
                console.error(
                  'The installing service worker became redundant.'
                );
                break;
            }
          };
        };
      })
      .catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#main',
    components: {
      'c-appearance': Appearance,
      'c-archives': Archives,
      'c-caniuse': Caniuse
    }
  });

  getLinks();
  getCanvas();
  getLazyImage();
  getBeforeInstallPrompt();
});
