<template>
  <div class="max-w-2xl mx-auto px-6">
    <h1 class="text-4xl mb-5 font-semibold">{{ post.attributes.title }}</h1>
    <div v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`)
      return {
        post
      }
    } catch (__) {}
  },
  head() {
    return {
      title: `Dang Thanh Blog`,
      meta: [
        { name: 'author', content: 'Dang Van Thanh' },
        {
          name: 'description',
          property: 'og:description',
          content: '',
          hid: 'description'
        }
      ],
      link: [
        {
          rel: 'canonical'
        }
      ]
    }
  }
}
</script>
