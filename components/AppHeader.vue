<template>
  <header role="banner" class="bg-green mb-8">
    <div class="max-w-2xl mx-auto px-5">
      <div class="flex flex-wrap items-center">
        <h1 class="text-xl my-3 leading-none">
          <nuxt-link class="block c-logo text-2xl" to="/">D</nuxt-link>
        </h1>
        <div class="flex-1 text-right">
          <nav class="c-nav">
            <nuxt-link class="inline-block px-3 py-1 rounded border border-transparent" to="/">Home</nuxt-link>
            <nuxt-link class="inline-block px-3 py-1 rounded border border-transparent" to="/blog">Blog</nuxt-link>
            <!-- <nuxt-link class="inline-block px-3 py-1 rounded border border-transparent" to="/works">Works</nuxt-link> -->
            <nuxt-link class="inline-block px-3 py-1 rounded border border-transparent" to="/about">About</nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
</style>
