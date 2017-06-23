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
    let today = new Date()
    this.copyright = today.getFullYear()
  }
}

export default Copyright
