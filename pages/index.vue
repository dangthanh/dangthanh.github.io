<template>
  <div class="max-w-2xl mx-auto px-5">
    <article class="mb-8">
      <div class="text-3xl mb-3">
        Hello, I'm
        <strong class="font-semibold">Dang Van Thanh</strong>.
      </div>
      <div class="text-2xl">
        I'm write code with JavaScript and love cycling. Currently, I'm
        <strong
          class="font-semibold"
        >UI Developer</strong> at
        <a
          href="https://poetadigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >Poeta Digital</a>.
      </div>
    </article>
    <hr class="border-t mb-3 w-48 inline-block border-gray-300 border-solid" />
    <div>
      <h2 class="font-semibold text-lg pb-3 uppercase">Latest</h2>
      <article class="rounded mb-3 overflow-hidden" v-for="(post, i) in posts" :key="post.slug">
        <div class="relative" :class="{ 'pb-2': i === 0, 'py-2': i !== 0 }">
          <h2 class="font-merriweather m-0">
            <NuxtLink :to="`/blog/${post.slug}`">
              {{
              post.title
              }}
            </NuxtLink>
          </h2>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import IconStar from '~/components/IconStar'

export default {
  components: { IconStar },
  async asyncData({$content}) {
    let posts = await $content('blog').limit(5).only(['title','slug', 'date']).fetch();
    posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return {
      posts,
    }
  }
}
</script>

<style></style>
