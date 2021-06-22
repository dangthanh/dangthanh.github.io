<template>
  <div class="max-w-2xl mx-auto px-5">
    <article v-for="(post, i) in posts" :key="post.title" class="rounded mb-4 overflow-hidden">
      <div class="relative" :class="{ 'pb-2': i === 0, 'py-2': i !== 0 }">
        <h2 class="font-merriweather m-0 mb-3">
          <NuxtLink :to="`/blog/${post.slug}`">
            {{ post.title }}
          </NuxtLink>
        </h2>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    // const resolve = require.context('~/content/', true, /\.md$/)
    // let posts = resolve
    //   .keys()
    //   .map((key) => {
    //     const [, name] = key.match(/\/(.+)\.md$/)
    //     return resolve(key)
    //   })
    //   .sort((a, b) => {
    //     return new Date(b.attributes.date) - new Date(a.attributes.date)
    //   })

    const posts = await $content('blog').fetch()

    posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

    return {
      posts,
    }
  },
  head() {
    return {
      title: 'Blog - Dang Thanh Blog',
      meta: [
        { name: 'author', content: 'Dang Van Thanh' },
        {
          name: 'description',
          property: 'og:description',
          content: 'Blog',
          hid: 'description',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://dangthanh.org/blog',
        },
      ],
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
