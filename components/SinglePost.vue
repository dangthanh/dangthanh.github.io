<template>
  <article class="article bg-white rounded">
    <div class="m-3 p-3">
    <h1 class="text-4xl mb-5 font-semibold">{{ post.attributes.title }}</h1>
    <div class="article-body" v-html="post.html"></div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>
.article h3 {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

