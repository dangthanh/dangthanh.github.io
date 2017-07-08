import zoomVanilla from './blog/zoom-vanilla'
import { addWebfont } from './blog/web-font-vanilla'
import { addZoomImage, addBlankLink } from './blog/blog-vanilla'
import Caniuse from './components/caniuse'
import Skills from './components/skills'
import Projects from './components/projects'
import Copyright from './components/copyright'

const app = new Vue({
  el: '#app',
  components: {
    Caniuse,
    Skills,
    Projects,
    Copyright
  }
})

addWebfont()
addZoomImage()
addBlankLink()

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js', { scope: './' }).then(function (registration) {
		console.log('Service Worker Registered')
	})

	navigator.serviceWorker.ready.then(function (registration) {
		console.log('Service Worker Ready')
	})
}
