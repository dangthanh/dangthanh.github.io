<template>
  <!-- <article :class="{ 'border-b border-gray-300': !post.attributes.lastIndex }"> -->
  <article class="bg-white rounded mb-4 overflow-hidden">
    <div class="flex flex-wrap p-5 relative">
      <div class="px-8 mb-3 md:px-0 md:mb-0 md:w-1/3">
        <img
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/server_down_s4lk.svg"
          alt=""
        />
      </div>
      <div class="md:flex-1 md:pl-5">
        <span
          v-for="tag in post.attributes.tags"
          :key="tag"
          class="uppercase text-xs font-bold mr-2"
          :class="`code-${tag}`"
          >{{ tag }}</span
        >
        <h2 class="text-3xl font-semibold mt-2">
          <nuxt-link :to="`/blog/${post.attributes.slug}`">{{
            post.attributes.title
          }}</nuxt-link>
        </h2>
        <span
          class="absolute article-number w-24 h-24 rounded-full bg-orange-400 text-2xl font-bold text-white"
        >
          <div class="text-center">
            {{ post.attributes.number }}
          </div>
        </span>
        <!-- <time class="text-gray-600 text-sm">{{ $dateFns.format(post.attributes.date, 'dd-MM-yyyy') }}</time> -->
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post']
};
</script>

<style>
.article-number {
  bottom: -48px;
  right: -48px;
}

.article-number > div {
  margin: 10px 0 0 -40px;
}
</style>
