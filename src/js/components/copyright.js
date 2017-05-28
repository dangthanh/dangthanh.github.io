let Copyright = {
  template: `
    <span>
      <span v-text="copyright"></span>
    </span>
  `,
  data () {
    return {
      copyright: ''
    }
  },
  mounted () {
    this.copyright = new Date().getFullYear()
  }
}

export default Copyright
