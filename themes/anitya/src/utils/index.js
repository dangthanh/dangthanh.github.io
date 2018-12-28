export function getLinks() {
  var links = document.querySelectorAll('a');
  var isActiveExist = false;

  [].forEach.call(links, link => {
    var linkHref = link.getAttribute('href');
    var linkDataLink = link.getAttribute('data-link');
    var pathname = window.location.pathname;
    var host = window.location.host;

    if (
      linkHref &&
      linkHref.indexOf('http') > -1 &&
      linkHref.indexOf(host) === -1
    ) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }

    if (pathname.indexOf(linkDataLink) > -1) {
      link.classList.add('is-active');
      isActiveExist = true;
    }
  });

  if (!isActiveExist) {
    document.querySelector('a[data-link="home"]').classList.add('is-active');
  }
}

export function getCanvas() {
  var canvas = document.getElementById('site-canvas');

  if (canvas != null) {
    var WIDTH = 650;
    var HEIGHT = 400;
    var ctx = canvas.getContext('2d');

    var branch = function(size, angle) {
      size < 10
        ? ctx.strokeRect(0, 0, size, size)
        : ctx.fillRect(0, 0, size, size);
      if (size < 2) return;
      var v1 = size * Math.cos((angle * Math.PI) / 180);
      ctx.save();
      ctx.translate(size, 0);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.translate(-v1, -v1);
      branch(v1, 15 + Math.random() * 60);
      ctx.restore();
      var v2 = size * Math.sin((angle * Math.PI) / 180);
      ctx.save();
      ctx.rotate(((angle - 90) * Math.PI) / 180);
      ctx.translate(0, -v2);
      branch(v2, 15 + Math.random() * 60);
      ctx.restore();
    };

    var tree = function() {
      if (window.innerWidth < 800) {
        var PADDING = 32;
        WIDTH = window.innerWidth - PADDING;
      }

      var width = (canvas.width = WIDTH);
      var height = (canvas.height = HEIGHT);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#111';
      ctx.globalCompositeOperation = 'xor';
      var size = Math.min(width, height) / 7;
      ctx.save();
      ctx.translate(0.5 * width - size * 0.5, height - size);
      branch(size, 15 + Math.random() * 60);
      ctx.restore();
    };

    window.addEventListener('resize', tree, false);

    var events = ['resize', 'click', 'touchdown'];

    events.forEach(event => {
      document.addEventListener(event, tree, false);
    });

    tree();
  }
}

export function getLazyImage() {
  let images = [...document.querySelectorAll('.lazy-image')];

  if ('IntersectionObserver' in window) {
    const interactSettings = {
      rootMargin: '100px 0px',
      threshold: 0.01
    };

    function onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          const image = entry.target;
          observer.unobserve(image);
          loadImage(image);
        }
      });
    }

    let observer = new IntersectionObserver(onIntersection, interactSettings);

    images.forEach(image => observer.observe(image));
  } else {
    images.forEach(image => loadImage(image));
  }
}

function loadImage(image) {
  const src = image.dataset.src;
  fetchImage(src).then(() => {
    image.src = src;
    image.classList.add('loaded');
  });
}

function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

export function getBeforeInstallPrompt() {
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', e => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    showAddToHomeScreen();
  });

  function showAddToHomeScreen() {
    var a2hsBtn = document.querySelector('.a2hs-prompt');
    a2hsBtn.style.display = 'none';
    a2hsBtn.addEventListener('click', addToHomeScreen);
  }

  function addToHomeScreen() {
    var a2hsBtn = document.querySelector('.a2hs-prompt');

    // Hide our user interface that shows our A2HS button
    a2hsBtn.style.display = 'none';

    if (deferredPrompt) {
      // Show the prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        deferredPrompt = null;
      });
    }
  }

  showAddToHomeScreen();

  window.addEventListener('appinstalled', function() {
    console.log('a2hs', 'installed');
  });
}
