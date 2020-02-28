<template>
  <div class="max-w-2xl mx-auto px-5">
      <article class="rounded mb-4 overflow-hidden" v-for="(post, i) in posts" :key="post.attributes.title">
        <div class="relative" :class="{ 'pb-2': i === 0, 'py-2': i !== 0 }">
          <h2 class="font-merriweather m-0 mb-3">
            <NuxtLink :to="`/blog/${post.attributes.slug}`">
              {{
              post.attributes.title
              }}
            </NuxtLink>
          </h2>
          <time class="text-gray-700 text-sm">{{ $dateFns.format(post.attributes.date, 'dd MMM yyyy') }}</time>
        </div>
      </article>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const resolve = require.context('~/content/', true, /\.md$/)
    let posts = resolve
      .keys()
      .map((key) => {
        const [, name] = key.match(/\/(.+)\.md$/)
        return resolve(key)
      })
      .sort((a, b) => {
        return new Date(b.attributes.date) - new Date(a.attributes.date)
      })

    return {
      posts
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
