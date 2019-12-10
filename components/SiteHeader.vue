<template>
  <header role="banner" class="max-w-3xl mx-auto px-6 md:px-0">
    <div class="flex flex-wrap py-5">
      <div class="flex">
        <nuxt-link to="/" class="text-5xl">DT</nuxt-link>
      </div>
      <nav role="navigation" class="flex-1 text-right">
        <ul>
          <!-- <li class="inline-block px-3 py-5"><nuxt-link to="/projects">Dự án</nuxt-link></li> -->
          <li class="inline-block px-3 py-5"><nuxt-link to="/about">Về tôi</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader"
};
</script>
