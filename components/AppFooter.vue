<template>
  <footer role="contentinfo" class="c-footer">
    <div class="c-container">
      <p class="mb-0 text-gray-300 text-sm">
        &copy; 2020. Made with
        <span class="text-red-600">&#10084;</span>
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="text-white"
          >Vue.js</a
        >
        and
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="text-white"
          >Nuxt.js.</a
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter',
})
</script>
