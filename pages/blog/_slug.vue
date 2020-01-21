<template>
  <div class="max-w-3xl mx-auto px-6 md:px-0">
    <PostItem :post="post" />
  </div>
</template>

<script>
import PostItem from '~/components/Post/PostItem';

export default {
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`);
      return {
        post
      };
    } catch (__) {}
  },
  components: { PostItem },
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
