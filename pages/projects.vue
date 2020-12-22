<template>
  <div class="max-w-2xl mx-auto px-5">
    <article>
      <h2 class="font-normal text-lg pb-3 uppercase">
        I
        <span class="text-red-600">&#10084;</span> Open Source
      </h2>
      <div class="border border-gray-300 border-solid rounded shadow">
        <div
          v-for="repo in repos"
          :key="repo.id"
          class="flex flex-wrap items-center"
        >
          <div
            class="w-full flex flex-wrap items-center p-3 border-b border-t-0 border-r-0 border-l-0 border-gray-300 border-solid"
          >
            <div class="flex-1">
              <a
                :href="repo.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold"
                >{{ repo.name }}</a
              >
              <span class="text-sm">
                in
                <span>{{ repo.language }}</span>
              </span>
              <p class="text-gray-600 text-sm mb-0">{{ repo.description }}</p>
            </div>
            <div class="w-32 text-gray-600 text-sm text-right">
              <IconStar />
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
    const STARGAZERS_COUNT = 20;
    const [user, org] = await Promise.all([
      fetch(`https://api.github.com/users/dangvanthanh/repos?per_page=100`),
      fetch(`https://api.github.com/repos/dracula/hyper`)
    ])

    const [userJson, orgJson] = await Promise.all([user.json(), org.json()])

    let data = []
    data.push(orgJson)
    data = [...data, ...userJson]

    const repos = data
      .filter((d) => d.stargazers_count >= STARGAZERS_COUNT)
      .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1))
      .map((d) => ({
        name: d.name,
        stars: d.stargazers_count,
        language: d.language,
        repoUrl: d.html_url,
        description: d.description
      }))

    return {
      repos
    }
  },
  head() {
    return {
      title: `Projects - Dang Thanh Blog`,
      meta: [
        { name: 'author', content: 'Dang Van Thanh' },
        {
          name: 'description',
          property: 'og:description',
          content: 'Projects',
          hid: 'description',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://dangthanh.org/projects`,
        },
      ],
    }
  }
}
</script>

<style>
</style>
