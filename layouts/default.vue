<template>
  <div>
    <app-header />
    <main role="main" class="my-8 lg:my-12">
    <nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default Vue.extend({
  components: { AppHeader, AppFooter }
})
</script>
