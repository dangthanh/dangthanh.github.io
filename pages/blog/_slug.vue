<template>
  <div class="max-w-3xl mx-auto px-6 md:px-0">
    <single-post :post="post"/>
  </div>
</template>

<script>
import SinglePost from '~/components/SinglePost.vue'

export default {
  components: {SinglePost},
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`);
      return {
        post
      };
    } catch {
      return false;
    }
  }
};
</script>
