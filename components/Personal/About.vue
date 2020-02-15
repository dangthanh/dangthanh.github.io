<template>
  <div>
    <div>
      My name is
      <span class="text-3xl">{{ fullName }}</span>.
    </div>
    <div>I'm Front End Developer from {{ company }}.</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface User {
  firstName: string
  lastName: string
}

export default Vue.extend({
  name: 'About',
  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User>
  },
  data() {
    return {
      company: 'Poeta Digital'
    }
  },
  computed: {
    fullName(): string {
      return `${this.user.lastName} ${this.user.firstName}`
    }
  }
})
</script>
