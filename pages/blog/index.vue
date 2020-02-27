<template>
  <div class="max-w-2xl mx-auto px-5">
      <article class="rounded mb-4 overflow-hidden" v-for="(post, i) in posts" :key="post.attributes.title">
        <div class="relative" :class="{ 'pb-2': i === 0, 'py-2': i !== 0 }">
          <!-- <span
            v-for="tag in post.attributes.tags"
            :key="tag"
            class="inline-block mr-2 text-gray-900"
          >#{{ tag }}</span> -->
          <h2 class="font-merriweather m-0 mb-3">
            <nuxt-link :to="`/blog/${post.attributes.slug}`">
              {{
              post.attributes.title
              }}
            </nuxt-link>
          </h2>
          <time class="text-gray-700 text-sm">{{ $dateFns.format(post.attributes.date, 'dd MMM yyyy') }}</time>
        </div>
      </article>
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
