<template>
  <header role="banner" class="bg-green mb-8">
    <div class="max-w-2xl mx-auto px-5">
      <div class="flex flex-wrap items-center">
        <h1 class="text-xl my-3 leading-none">
          <nuxt-link class="block c-logo text-2xl" to="/">D</nuxt-link>
        </h1>
        <div class="flex-1 text-right">
          <nav class="c-nav">
            <nuxt-link class="c-nav-item" to="/">Home</nuxt-link>
            <nuxt-link class="c-nav-item" to="/blog">Blog</nuxt-link>
            <nuxt-link class="c-nav-item" to="/projects">Projects</nuxt-link>
            <nuxt-link class="c-nav-item" to="/about">About</nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style>
.c-nav-item {
  @apply inline-block px-3 py-1 rounded border border-transparent;
}

.c-nav-item:hover,
.c-nav-item:focus,
.c-nav .nuxt-link-exact-active {
  background-color: rgba(64, 148, 107, 0.8);
}
</style>
