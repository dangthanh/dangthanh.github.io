<template>
  <article class="bg-white rounded mb-4 overflow-hidden">
    <div class="p-5 relative">
      <span
        v-for="tag in post.attributes.tags"
        :key="tag"
        class="article-tag"
        :class="`code-${tag}`"
        >{{ tag }}</span
      >
      <h2 class="article-title">
        <nuxt-link :to="`/blog/${post.attributes.slug}`">{{
          post.attributes.title
        }}</nuxt-link>
      </h2>
      <!-- <time class="text-gray-600 text-sm">{{ $dateFns.format(post.attributes.date, 'dd-MM-yyyy') }}</time> -->
    </div>
  </article>
</template>

<script>
export default {
  props: ['post']
};
</script>

<style>
.article-title {
  @apply text-3xl font-semibold mt-2;
}

.article-number {
  bottom: -48px;
  right: -48px;
  @apply absolute w-24 h-24 rounded-full bg-orange-400 text-2xl font-bold text-white;
}

.article-number > div {
  margin: 10px 0 0 -40px;
}

.article-tag {
  @apply uppercase text-xs font-bold mr-2;
}
</style>
