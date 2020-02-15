<template>
  <div class="container">
     <About :user="user" />
  </div>
</template>

<script>
import About from '~/components/Personal/About.vue'

export default {
  components: {
    About
  },
  data() {
    return {
      user: {
        name: 'Dang Van Thanh',
        position: 'Front-end Developer',
        companyName: 'Poeta Digital',
        companyWebsite: 'https://poetadigital.com'
      }
    }
  }
}
</script>

<style>
</style>
