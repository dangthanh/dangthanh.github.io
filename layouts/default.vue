<template>
  <div>
    <AppHeader />
    <main role="main" class="my-8 lg:my-12">
      <nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter }
}
</script>

<style>
/* purgecss start ignore */
@import '~/assets/css/app.css';
/* purgecss end ignore */
</style>
