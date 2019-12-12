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
    } catch {
      return false;
    }
  },
  components: { AppPostItem },
  // head: {
  //   title: `Dang Thanh Blog`,
  //   meta: [
  //     { name: 'author', content: 'Dang Van Thanh' },
  //     {
  //       name: 'description',
  //       property: 'og:description',
  //       content: '',
  //       hid: 'description'
  //     }
  //   ]
  // },
  computed: {
    title() {
      if (this.post) {
        return this.post.attributes.title;
      }

      return '';
    }
  }
};
</script>
