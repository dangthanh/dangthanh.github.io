let Projects = {
  template: `
		<div class="projects">
			<div class="project" v-for="project in projects">
				<h2 class="fl w-100 mt3 f5 ttu tracked fw3">{{ project.title }}</h2>
				<div class="cf">
					<article class="pv2 fl w-100 w-50-l pr0 pr4-l" v-for="item in project.items">
						<h3 class="f4-ns fw3 mb2 mt0"><a v-bind:href="item.urlLink" class="link dim black">{{ item.name }}</a></h3>
						<a v-bind:href="item.urlLink" class="db ba b--black-10">
							<img v-bind:src="item.urlImg | portfolioUrl" alt="" class="w-100 db v-mid">
						</a>
					</article>
				</div>
			</div>
    </div>
	`,
  filters: {
    portfolioUrl: function (value) {
      if (!value) {
        return ''
      }

      value = value.toString()

      return `/assets/images/portfolio/${value}`
    }
  },
  data () {
    return {
      projects: [
        {
          title: 'Sass/PostCSS',
          items: [
            {
              name: 'Tipsy.sass',
              urlLink: 'https://github.com/dangvanthanh/tipsy.sass',
              urlImg: 'tipsy-sass.png'
            },
            {
              name: 'Postcss-longshadow-text',
              urlLink: 'https://www.npmjs.com/package/postcss-longshadow-text',
              urlImg: 'postcss-longshadow.png'
            }
          ]
        },
        {
          title: 'Vue.js',
          items: [
            {
              name: 'Vue-rollup-boilerplate',
              urlLink: 'https://github.com/dangvanthanh/vue-rollup-boilerplate',
              urlImg: 'vue-rollup-boilerplate.png'
            }
          ]
        },
        {
          title: 'jQuery',
          items: [
            {
              name: 'jquery.longShadow',
              urlLink: 'https://github.com/dangvanthanh/jquery.longShadow',
              urlImg: 'jquery-longshadow.png'
            }
          ]
        }
      ]
    }
  }
}

export default Projects
