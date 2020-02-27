<template>
  <footer role="contentinfo" class="py-3 bg-gray-800">
    <div class="max-w-2xl mx-auto px-5">
      <p class="mb-0 text-gray-300 text-sm">
        &copy; 2020. Made with
        <span class="text-red-600">&#10084;</span>
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> and
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js.</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter'
})
</script>
