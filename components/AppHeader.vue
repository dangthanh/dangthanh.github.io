<template>
  <header role="banner" class="bg-green mb-8">
    <div class="max-w-2xl mx-auto px-5">
      <div class="flex flex-wrap items-center">
        <h1 class="text-xl my-3 leading-none">
          <NuxtLink class="block c-logo text-2xl" to="/">D</NuxtLink>
        </h1>
        <div class="flex-1 text-right">
          <nav class="c-nav">
            <NuxtLink class="inline-block px-3 py-1 rounded border border-transparent" to="/">Home</NuxtLink>
            <NuxtLink class="inline-block px-3 py-1 rounded border border-transparent" to="/blog">Blog</NuxtLink>
            <!-- <NuxtLink class="inline-block px-3 py-1 rounded border border-transparent" to="/works">Works</NuxtLink> -->
            <NuxtLink class="inline-block px-3 py-1 rounded border border-transparent" to="/about">About</NuxtLink>
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
