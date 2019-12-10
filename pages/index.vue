<template>
  <div class="max-w-3xl mx-auto px-6 md:px-0 px-6 md:px-0">
    <div v-for="post in posts" :key="post.attributes.title">
      <post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from '~/components/Post.vue';

export default {
  components: { Post },
  async asyncData({ params }) {
    const resolve = require.context('~/content/', true, /\.md$/);
    const imports = resolve
      .keys()
      .map(key => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      })
      .sort((a, b) => {
        return new Date(b.attributes.date) - new Date(a.attributes.date);
      });

    imports.map((item, itemIndex) => {
      if (itemIndex === imports.length - 1) {
        item.attributes.lastIndex = true;
      } else {
        item.attributes.lastIndex = false;
      }

      item.attributes.number = imports.length - itemIndex;

      return item;
    });

    return {
      posts: imports
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
