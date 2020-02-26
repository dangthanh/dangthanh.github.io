<template>
  <div class="max-w-2xl mx-auto px-6">
    <div v-for="post in posts" :key="post.attributes.title">
      <article class="bg-white rounded mb-4 overflow-hidden">
        <div class="py-3 relative">
          <span
            v-for="tag in post.attributes.tags"
            :key="tag"
            class="inline-block mr-2"
            :class="`code-${tag}`"
          >#{{ tag }}</span>
          <h2>
            <nuxt-link :to="`/blog/${post.attributes.slug}`">
              {{
              post.attributes.title
              }}
            </nuxt-link>
          </h2>
          <!-- <time class="text-gray-600 text-sm">{{ $dateFns.format(post.attributes.date, 'dd-MM-yyyy') }}</time> -->
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const resolve = require.context('~/content/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, name] = key.match(/\/(.+)\.md$/)
        return resolve(key)
      })
      .sort((a, b) => {
        return new Date(b.attributes.date) - new Date(a.attributes.date)
      })

    imports.map((item, itemIndex) => {
      if (itemIndex === imports.length - 1) {
        item.attributes.lastIndex = true
      } else {
        item.attributes.lastIndex = false
      }

      item.attributes.number = imports.length - itemIndex

      return item
    })

    return {
      posts: imports
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
