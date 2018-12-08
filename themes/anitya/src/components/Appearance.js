const Appearance = {
  template: `
    <div class="site-corner">
      <a href="#" class="site-corner js-corner" :aria-label="label" @click.prevent="changeTheme">
        <i class="icon" :class="{ 'icon-sun': isDay, 'icon-moon': !isDay }"></i>
      </a>
    </div>
  `,
  data() {
    return {
      label: 'Day',
      isDay: true
    };
  },
  created() {
    if (localStorage.getItem('anitya::theme') !== null) {
      const theme = localStorage.getItem('anitya::theme');
      this.isDay = theme === 'day' ? true : false;
      this.updateTheme(this.isDay);
    } else {
      this.updateTheme(this.isDay);
    }
  },
  methods: {
    updateTheme(isDay) {
      var body = document.querySelector('body');

      if (isDay) {
        this.label = 'Day';
        this.isDay = true;
        body.classList.remove('night');
        body.classList.add('day');
      } else {
        this.label = 'Night';
        this.isDay = false;
        body.classList.remove('day');
        body.classList.add('night');
      }
    },
    changeTheme() {
      this.isDay = !this.isDay;
      this.updateTheme(this.isDay);
      const theme = this.isDay ? 'day' : 'night';
      localStorage.setItem('anitya::theme', theme);
    }
  }
};

export default Appearance;
