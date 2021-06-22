<template>
  <AppLayout>
    <nuxt />
  </AppLayout>
</template>

<script lang="ts">
import AppLayout from '~/components/layout/AppLayout.vue'

export default {
  components: { AppLayout },
}
</script>

<style>
/* purgecss start ignore */
@import '~/assets/css/app.css';
/* purgecss end ignore */
</style>
