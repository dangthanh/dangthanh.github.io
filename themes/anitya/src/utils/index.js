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

  const interactSettings = {
    root: document.getElementById('main'),
    rootMargin: '0px 0px 200px 0px'
  };

  function onIntersection(imageEntites) {
    imageEntites.forEach(image => {
      if (image.isIntersecting) {
        observer.unobserve(image.target);
        image.target.src = image.target.dataset.src;
        image.target.onload = () => image.target.classList.add('loaded');
      }
    });
  }

  let observer = new IntersectionObserver(onIntersection, interactSettings);

  images.forEach(image => observer.observe(image));
}
