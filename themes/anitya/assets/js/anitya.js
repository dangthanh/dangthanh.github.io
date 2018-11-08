var jsCorner = document.querySelector('.js-corner');

var getTheme = function(isDay) {
  var body = document.querySelector('body');
  var icon = jsCorner.querySelector('.icon');

  if (isDay) {
    jsCorner.setAttribute('aria-label', 'Day');
    icon.classList.remove('icon-moon');
    icon.classList.add('icon-sun');
    body.classList.remove('night');
    body.classList.add('day');
  } else {
    jsCorner.setAttribute('aria-label', 'Night');
    icon.classList.remove('icon-sun');
    icon.classList.add('icon-moon');
    body.classList.remove('day');
    body.classList.add('night');
  }
};

var getLinks = function() {
  var links = document.querySelectorAll('a');
  var isActiveExist = false;

  [].forEach.call(links, link => {
    var linkHref = link.getAttribute('href');
    var linkDataLink = link.getAttribute('data-link');
    var pathname = window.location.pathname;
    var host = window.location.host;

    if (linkHref.indexOf('http') > -1 && linkHref.indexOf(host) === -1) {
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
};

var getCanvas = function() {
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
};

var handlerTheme = function(e) {
  e.preventDefault();
  var theme = jsCorner.getAttribute('aria-label').toLowerCase();
  var isNight = theme === 'night' ? true : false;
  getTheme(isNight);
  localStorage.setItem('anitya::theme', theme);
};

var Caniuse = {
  template: `
		<div class="browsers">
      <h2 class="browser-title">{{ browserTitle}}</h2>
	    <div class="browser-categories">
	      <span class="browser-category" v-for="category in browserCategories">{{ category }}</span>
      </div>
      <div class="browser-description" v-if="description != ''">{{ description }}</div>
	    <div class="browser-support">
	      <div v-for="browser in browsers" class="browser-support-item" v-bind:class="{ 'no': browser.version == 0 }">
	        <span v-if="browser.name == 'ie'" class="browser-support-logo">
	          <svg viewBox="0 0 128 128">
	            <path fill="#1ebbee" d="M126.11 66.834c0-9.82-2.539-19.034-6.991-27.051 18.978-42.95-20.334-36.653-22.523-36.225-8.328 1.629-16.034 4.249-23.142 7.566-1.048-.059-2.102-.09-3.166-.09-26.525 0-48.729 18.501-54.411 43.303 13.98-15.684 23.765-22.012 29.624-24.544-.936.835-1.851 1.681-2.751 2.532l-.885.855c-.594.571-1.186 1.143-1.765 1.72-.344.343-.68.689-1.019 1.035-.514.522-1.026 1.044-1.527 1.569l-1.052 1.122c-.468.501-.934 1.003-1.39 1.506l-1.053 1.175c-.432.487-.861.974-1.285 1.463-.351.405-.698.81-1.042 1.216-.401.473-.797.947-1.189 1.42-.347.419-.692.838-1.031 1.256-.367.453-.726.905-1.083 1.356-.348.438-.695.875-1.034 1.312l-.953 1.246c-.356.469-.715.938-1.063 1.404l-.731.998c-2.205 3.01-4.221 5.961-6.041 8.796l-.013.021c-.479.747-.941 1.482-1.395 2.211l-.074.12c-.454.732-.892 1.451-1.319 2.164l-.045.075c-1.148 1.917-2.213 3.764-3.172 5.501-5.027 9.111-7.475 15.477-7.581 15.854-15.876 56.759 33.674 32.791 40.588 29.213 7.445 3.678 15.827 5.973 24.692 5.973 24.275-.001 44.925-15.906 52.612-36.906h-29.331c-4.34 7-12.694 12.049-22.293 12.049-14.065 0-25.466-11.049-25.466-24.049h79.842c.303-2 .458-4.73.458-7.166zm-112.584 49.983c-3.916-4.015-4.608-13.795 4.032-31.616 4.36 12.537 13.061 23.041 24.307 29.708-5.593 3.079-20.441 10.009-28.339 1.908zm32.161-57.817c.446-13 11.564-23.005 25.226-23.005 13.661 0 24.781 10.005 25.227 23.005h-50.453zm44.776-44.204c5.166-2.495 17.958-7.771 25.22-2.871 4.807 3.245 8.663 8.34 2.042 25.499-6.351-10.213-15.905-18.224-27.262-22.628z"></path>
	          </svg>
	        </span>
	        <span v-else-if="browser.name == 'chrome'" class="browser-support-logo">
	          <svg viewBox="0 0 128 128">
	          <path fill="#ce4e4e" d="M64 37h54.186c-9.944-20-30.64-33.633-54.562-33.633-19.367 0-36.619 9.173-47.764 23.271l21.123 35.748c1.032-13.906 11.017-25.316 27.017-25.386zM120.126 41h-41.832c7.403 6 12.299 13.884 12.299 23.369 0 4.663-1.183 8.631-3.268 13.631h.015l-27.757 47.511c1.335.087 2.682-.022 4.04-.022 33.609 0 60.855-27.746 60.855-61.355.001-8-1.546-15.134-4.352-23.134zM63.624 91.445c-11.672 0-21.611-7.414-25.368-17.789l-25.186-43.071c-6.505 9.686-10.303 21.345-10.303 33.889 0 30.632 22.634 55.972 52.089 60.224l20.996-36.179c-3.671 1.871-7.827 2.926-12.228 2.926z"></path>
	          </svg>
	        </span>
	        <span v-else-if="browser.name == 'firefox'" class="browser-support-logo">
	          <svg viewBox="0 0 128 128">
	            <path fill-rule="evenodd" clip-rule="evenodd" fill="#dd732a" d="M7.275 51.747l-3.221 2.579c-.477-1.941-.046-3.636.455-5.277 1.034-3.391 2.858-6.386 4.936-9.232.753-1.032 1.29-2.053 1.267-3.443-.085-4.919.436-9.778 2.122-14.443.86-2.379 2.022-4.592 4.008-6.514.783 3.826 1.493 7.503 3.586 10.261 1.51-1.339 3.021-2.613 4.457-3.965 8.624-8.111 18.778-13.179 30.482-14.847 14.681-2.093 28.23 1.056 40.53 9.432 1.162.792 2.496 1.333 3.763 1.962 5.825 2.893 10.222 7.198 12.976 13.119.462.991.82 2.03 1.227 3.046l.366-.063-1.584-9.499c6.35 8.911 8.353 18.801 8.895 29.179 1.186-1.655 1.177-3.615 1.819-5.49.211 1.362.475 2.719.624 4.087.586 5.377-.457 10.593-1.447 15.845-2.339 12.405-7.712 23.385-15.81 32.926-9.22 10.864-20.737 18.118-35.143 19.84-20.904 2.498-38.465-4.219-52.648-19.764-6.806-7.455-11.307-16.133-13.322-26.016-1.524-7.481-1.157-14.921 1.326-22.198l.389-1.116c.022-.065-.016-.15-.053-.409zm94.636-9.92l.396-.342 4.464 3.447c-.059-1.046-.014-2.147-.195-3.208-.795-4.628-3.6-7.983-7.086-10.862-4.369-3.608-9.383-6.09-14.579-8.244-.511-.212-1.012-.449-1.516-.674l.062-.522 7.325-.434c-2.706-4.465-7.356-5.711-12.068-6.993l.587-.311c-9.55-2.982-19.015-3.216-28.551-.776-8.871 2.27-22.19 10.357-24.248 14.72l.6-.146c3.348-.822 6.69-1.048 10.062-.07.367.106.979-.137 1.295-.421 3.159-2.829 6.672-5.044 10.742-6.297 1.282-.395 2.604-.658 3.908-.981-.108.441-.305.621-.521.77-4.22 2.9-7.064 6.714-7.857 11.877-.043.283 0 .708.181.879 1.869 1.758 3.724 3.537 5.693 5.176.681.566 1.641.946 2.524 1.086 1.706.271 3.449.322 5.178.444 1.063.075 1.751.826 1.37 1.687-.565 1.282-1.182 2.471-2.479 3.336-2.454 1.638-4.726 3.551-7.093 5.322-.591.443-.614.845-.307 1.499.567 1.208 1.109 2.447 1.473 3.727.46 1.618.616 3.291.196 5.002-1.337-.295-2.562-.586-3.794-.831-1.238-.246-2.486-.438-3.728-.667-1.552-.285-2.876.259-3.672 1.524-.923 1.468-.938 3.002.049 4.26 2.011 2.561 4.288 4.858 6.977 6.712 2.225 1.536 4.726 2.39 7.388 1.82 1.853-.396 3.668-1.189 5.354-2.081 5.112-2.701 10.879-1.79 14.416 2.414.633.751 1.012 1.603.475 2.485-.516.847-1.382 1.046-2.377.797-1.034-.259-1.99-.081-2.924.539-2.465 1.636-4.886 3.378-7.5 4.744-4.211 2.201-8.8 2.942-13.539 2.766-.488-.016-.976 0-1.635 0 .244.289.331.412.438.515 3.423 3.319 7.347 5.87 11.876 7.363 4.987 1.644 10.084 2.317 15.258.888 5.799-1.601 10.354-5.114 14.25-9.553 1.57-1.79 2.994-3.707 4.485-5.565l.373.081-1.316 8.981c7.149-8.746 7.377-18.745 6.371-29.287 2.057 2.291 2.681 4.977 3.86 7.669 2.408-8.36 1.217-16.32-.641-24.265z"></path>
	          </svg>
	        </span>
	        <span v-else-if="browser.name == 'safari'" class="browser-support-logo">
	          <svg viewBox="0 0 128 128">
	            <path fill="#1b88ca" d="M64 1.5c-34.5 0-62.5 28-62.5 62.5s28 62.5 62.5 62.5 62.5-28 62.5-62.5-28-62.5-62.5-62.5zm56 57.9l-5 .4-.1-1 5-.4.1 1zm0 3.6v1h-9v-1h9zm-.6-8.4l-9.1 1.6-.2-1 9.1-1.6.2 1zm-1-4.8l-4.9 1.3-.3-1 4.9-1.3.3 1zm-1.4-4.7l-8.6 3.2-.3-.9 8.6-3.2.3.9zm-1.8-4.6l-4.5 2.1-.4-.9 4.5-2.1.4.9zm-2.3-4.3l-8 4.6-.5-.9 8-4.6.5.9zm-3.1-5l.6.8-4.1 2.9-.6-.8 4.1-2.9zm-2.4-3.1l-7.1 5.9-.6-.8 7.1-5.9.6.8zm-6.9-7l-5.9 7.1-.8-.6 5.9-7.1.8.6zm-4.7-3.6l.8.6-2.9 4.1-.8-.6 2.9-4.1zm-3.2-2.1l-4.6 8-.9-.5 4.6-8 .9.5zm-5.3-2.7l.9.4-2.1 4.5-.9-.4 2.1-4.5zm-4.5-1.8l.9.3-3.2 8.6-.9-.3 3.2-8.6zm-4.7-1.5l1 .3-1.3 4.9-1-.3 1.3-4.9zm-4.8-1l1 .2-1.6 9.1-1-.2 1.6-9.1zm-4.9-.6l1 .1-.4 5-1-.1.4-5zm-5.4.2h1v9h-1v-9zm-3.4-.2l.4 5-1 .1-.4-5 1-.1zm-4.9.6l1.6 9.1-1 .2-1.6-9.1 1-.2zm-4.8 1l1.3 4.9-1 .3-1.2-4.9.9-.3zm-4.7 1.5l3.2 8.6-.9.3-3.2-8.6.9-.3zm-4.5 1.8l2.1 4.5-.9.4-2.1-4.5.9-.4zm-4.4 2.2l4.6 8-.9.5-4.6-8 .9-.5zm-4.1 2.6l2.9 4.1-.8.6-2.9-4.1.8-.6zm-3.9 3l5.9 7.1-.8.6-5.9-7.1.8-.6zm-3.7 3.2l3.5 3.5-.7.8-3.5-3.5.7-.8zm-3.4 3.6l7.1 5.9-.6.8-7.1-5.9.6-.8zm-3 3.9l4.1 2.9-.6.8-4.1-2.9.6-.8zm-2.6 4.1l8 4.6-.6.9-8-4.6.6-.9zm-2.3 4.3l4.5 2.1-.4.9-4.5-2.1.4-.9zm-1.9 4.6l8.6 3.2-.3.9-8.7-3.2.4-.9zm-1.6 4.6l4.9 1.3-.3 1-4.9-1.3.3-1zm-1.1 4.8l9.1 1.6-.2 1-9.1-1.6.2-1zm-.7 4.9l5 .4-.1 1-5-.4.1-1zm9 4.5v1h-9v-1h9zm-9 5.3l5-.4.1 1-5 .4-.1-1zm.6 4.8l9.1-1.6.2 1-9.1 1.6-.2-1zm1 4.8l4.9-1.3.3 1-4.9 1.3-.3-1zm1.4 4.7l8.6-3.2.3.9-8.6 3.2-.3-.9zm1.8 4.6l4.5-2.1.4.9-4.5 2.1-.4-.9zm2.3 4.4l8-4.6.5.9-8 4.6-.5-.9zm3.1 4.9l-.6-.8 4.1-2.9.6.8-4.1 2.9zm9.5-2.8l.6.8-7.1 5.9-.6-.8 7.1-5.9zm-.2 12.9l5.9-7.1.8.6-5.9 7.1-.8-.6zm4.7 3.6l-.8-.6 2.9-4.1.8.6-2.9 4.1zm3.2 2.1l4.6-8 .9.5-4.6 8-.9-.5zm5.3 2.7l-.9-.4 2.1-4.5.9.4-2.1 4.5zm4.5 1.9l-.9-.3 3.2-8.6.9.3-3.2 8.6zm4.7 1.4l-1-.3 1.3-4.9 1 .3-1.3 4.9zm4.8 1l-1-.2 1.6-9.1 1 .2-1.6 9.1zm4.9.6l-1-.1.4-5 1 .1-.4 5zm4.4.1h-1v-9h1v9zm4.4-.1l-.4-5 1-.1.4 5-1 .1zm-47.4-13.2l37.7-48 48-37.7-36.8 48.9-48.9 36.8zm52.3 12.6l-1.6-9.1 1-.2 1.6 9.1-1 .2zm4.8-1l-1.3-4.9 1-.3 1.2 4.9-.9.3zm4.7-1.4l-3.2-8.6.9-.3 3.2 8.6-.9.3zm4.5-1.9l-2.1-4.5.9-.4 2.1 4.5-.9.4zm4.4-2.2l-4.6-8 .9-.5 4.6 8-.9.5zm4.1-2.6l-2.9-4.1.8-.6 2.9 4.1-.8.6zm3.9-2.9l-5.9-7.1.8-.6 5.9 7.1-.8.6zm3.7-3.3l-3.5-3.5.7-.7 3.5 3.5-.7.7zm3.4-3.6l-7.1-5.9.6-.8 7.1 5.9-.6.8zm3-3.9l-4.1-2.9.6-.8 4.1 2.9-.6.8zm2.6-4.1l-8-4.6.5-.9 8 4.6-.5.9zm2.3-4.3l-4.5-2.1.4-.9 4.5 2.1-.4.9zm1.9-4.5l-8.6-3.2.3-.9 8.6 3.2-.3.9zm1.6-4.7l-4.9-1.3.3-1 4.9 1.3-.3 1zm1.1-4.8l-9.1-1.6.2-1 9.1 1.6-.2 1zm.7-4.8l-5-.4.1-1 5 .4-.1 1z"></path>
	          </svg>
          </span>
	        <span v-if="browser.version > 0" class="browser-support-version">{{ browser.version | plus }}</span>
	        <span v-else class="browser-support-version">-</span>
	      </div>
	    </div>
	  </div>
	`,
  props: {
    features: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      browserTitle: '',
      browserCategories: [],
      browsers: [
        { name: 'ie', version: 0 },
        { name: 'chrome', version: 0 },
        { name: 'firefox', version: 0 },
        { name: 'safari', version: 0 }
      ],
      description: ''
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) {
        return '';
      }

      value = value.toString();

      if (value.length === 2) {
        return value.toUpperCase();
      }

      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    plus: function(value) {
      if (!value) {
        return '';
      }

      value = value.toString();

      return `${value}+`;
    }
  },
  mounted() {
    var vm = this;
    var caniuseUrl = `https://raw.githubusercontent.com/Fyrd/caniuse/master/features-json/${
      vm.features
    }.json`;

    fetch(caniuseUrl)
      .then(res => res.json())
      .then(res => {
        var supports = res.stats;

        vm.browserTitle = res.title;
        vm.browserCategories = res.categories;
        vm.description = res.description;

        for (var i = 0, len = vm.browsers.length; i < len; i++) {
          var browser = vm.browsers[i].name;
          var verions = supports[browser];
          for (var version in verions) {
            if (
              verions[version].indexOf('y') > -1 ||
              verions[version].indexOf('x') > -1
            ) {
              vm.browsers[i].version = version;
              break;
            }
          }
        }
      });
  }
};

if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('service-worker.js')
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
  if (localStorage.getItem('anitya::theme') !== null) {
    var theme = localStorage.getItem('anitya::theme');
    var isNight = theme === 'night' ? true : false;
    getTheme(isNight);
  } else {
    getTheme(true);
  }

  getLinks();

  jsCorner.addEventListener('click', handlerTheme, false);

  var app = new Vue({
    el: '#main',
    components: {
      Caniuse
    }
  });

  getCanvas();
});
