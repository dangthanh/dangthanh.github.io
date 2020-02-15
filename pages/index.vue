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
        firstName: 'Thanh',
        lastName: 'Dang Van'
      }
    }
  }
}
</script>

<style>
</style>
