<template>
  <div class="max-w-2xl mx-auto px-5">
    <article>
      <header>
        <h1
          class="text-4xl xl:text-5xl mb-3 font-semibold font-merriweather"
        >{{ post.attributes.title }}</h1>
        <div class="mb-4">
          <span
            v-for="tag in post.attributes.tags"
            :key="tag"
            class="inline-block mr-2 text-gray-500 bg-gray-200 p-2 rounded uppercase text-xs leading-none"
          >{{ tag }}</span>
        </div>
        <time
          class="text-gray-700 text-sm block"
        >{{ $dateFns.format(post.attributes.date, 'MMMM dd, yyyy') }}</time>
      </header>
      <hr class="border-b mt-6 mb-3 w-48 inline-block border-gray-300 border-solid" />
      <div v-html="post.html"></div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/content/blog/${params.slug}.md`)
    return {
      post
    }
  },
  head() {
    return {
      title: `Dang Thanh Blog - ${this.post.attributes.title}`,
      meta: [
        { name: 'author', content: 'Dang Van Thanh' },
        {
          name: 'description',
          property: 'og:description',
          content: this.post.attributes.title,
          hid: 'description'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://dangthanh.org/${this.post.attributes.slug}`
        }
      ]
    }
  }
}
</script>
