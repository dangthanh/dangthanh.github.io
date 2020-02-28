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
import { defineComponent } from '@vue/composition-api'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import '~/assets/css/app.css'

export default defineComponent({
  components: { AppHeader, AppFooter }
})
</script>

<style>
</style>
