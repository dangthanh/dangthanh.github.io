<template>
  <div class="max-w-3xl mx-auto px-6 md:px-0">
      <!-- <h1 class="text-4xl mb-5 font-semibold">{{ post.attributes.title }}</h1> -->
      <!-- <div class="article-body" v-html="post.html"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  async asyncData() {
    // try {
    //   const post: any = await import(`~/content/blog/${params.slug}.md`);
    //   return {
    //     post
    //   };
    // } catch (__) {}
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
    };
  }
};
</script>
