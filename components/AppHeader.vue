<template>
  <header role="banner" class="max-w-2xl mx-auto px-6 mb-8">
    <div class="flex flex-wrap">
      <div>
        <h1 class="text-xl my-1 leading-tight">
          <nuxt-link class="block" to="/">D</nuxt-link>
        </h1>
      </div>
      <div class="flex-1 text-right">
        <nav>
          <nuxt-link class="inline-block p-2" to="/">Home</nuxt-link>
          <nuxt-link class="inline-block p-2" to="/blog">Blog</nuxt-link>
          <!-- <nuxt-link class="inline-block p-2" to="/works">Works</nuxt-link> -->
          <nuxt-link class="inline-block p-2" to="/about">About</nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader'
})
</script>
