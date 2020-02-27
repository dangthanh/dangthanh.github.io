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
    <article>
      <h2 class="font-normal text-xl pb-3 uppercase">
        I
        <span class="text-red-600">&#10084;</span> Open Source
      </h2>
      <div class="border border-gray-300 border-solid rounded shadow">
        <div v-for="repo in repos" :key="repo.id" class="flex flex-wrap items-center">
          <div
            class="w-full flex flex-wrap items-center p-3 border-b border-t-0 border-r-0 border-l-0 border-gray-300 border-solid"
          >
            <div class="flex-1">
              <a
                :href="repo.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold"
              >{{ repo.name }}</a>
              <span class="text-sm">
                in
                <span>{{ repo.language }}</span>
              </span>
              <p class="text-gray-600 text-sm mb-0">{{ repo.description }}</p>
            </div>
            <div class="w-32 text-gray-600 text-sm text-right">
              <icon-star />
              {{ repo.stars }}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import IconStar from '~/components/IconStar'

export default {
  components: { IconStar },
  async asyncData() {
    const res = await fetch(
      `https://api.github.com/users/dangvanthanh/repos?per_page=100`
    )
    const data = await res.json()
    const repos = data
      .filter((d) => d.stargazers_count >= 10)
      .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1))
      .map((d) => ({
        name: d.name,
        stars: d.stargazers_count,
        language: d.language,
        repoUrl: d.html_url,
        description: d.description
      }));
    return {
      repos
    }
  }
}
</script>

<style></style>
