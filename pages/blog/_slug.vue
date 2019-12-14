<template>
  <div class="max-w-3xl mx-auto px-6 md:px-0">
    <app-post-item :post="post" />
  </div>
</template>

<script>
import AppPostItem from '~/components/AppPostItem.vue';

export default {
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`);
      return {
        post
      };
    } catch (__) {}
  },
  components: { AppPostItem },
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
    };
  }
};
</script>
