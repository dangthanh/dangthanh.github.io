<template>
  <div>
    <div>
      My name is
      <span class="text-3xl">{{ user.name }}</span>.
    </div>
    <div>
      I'm a {{ user.position }} from
      <a
        :href="user.companyWebsite"
        target="_blank"
        rel="noopener noreferrer"
      >{{ user.companyName }}</a>.
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface User {
  name: string
  position: string
  companyName: string
  companyWebsite: string
}

export default Vue.extend({
  name: 'About',
  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User>
  }
})
</script>
