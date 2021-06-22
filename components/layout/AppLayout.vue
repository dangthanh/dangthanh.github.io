<template>
  <div>
    <AppHeader />
    <main role="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: { AppHeader, AppFooter },
}
</script>

<style></style>
