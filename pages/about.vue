<template>
  <div>
    <p class="max-w-3xl mx-auto px-5">
      <img src="/images/personal/poeta-digital.jpg" alt class="w-full rounded" />
    </p>
    <p class="max-w-2xl mx-auto px-5">
      Hi, I'm
      <strong class="font-semibold">Dang Van Thanh</strong> who living and working at
      <a
        href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City"
        target="_blank"
        rel="noopener noreferrer"
      >Sai Gon, Viet Nam</a>.
    </p>
    <p class="max-w-2xl mx-auto px-5">
      In 2012, I worked as Front-end Developer for
      <a
        href="https://evolable.asia/"
        target="_blank"
        rel="noopener noreferrer"
      >Asia Evolable</a>, an offshore services company. Since 2014, I joined
      <a
        href="https://poetadigital.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Poeta Digital</a> as UI Developer for development and maintain the education system of
      <a
        href="https://www1.linkit.com/"
        target="_blank"
        rel="noopener noreferrer"
      >LinkIt</a> project.
    </p>
    <p class="max-w-2xl mx-auto px-5">
      I'm primary worked in front-end development and focused on JavaScript (specially
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >Vue.js</a> and
      <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">D3.js</a>), but also have interested in functional programming (
      <a
        href="https://elm-lang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >Elm</a> and
      <a href="https://elixir-lang.org/" target="_blank" rel="noopener noreferrer">Elixir</a>). Besides, I'm always shared the knowledge about web technologies which I learned via
      <a
        href="https://dangthanh.org"
        target="_blank"
        rel="noopener noreferrer"
      >my blog</a> and
      <a href="https://github.com/dangvanthanh" target="_blank" rel="noopener noreferrer">github</a>.
    </p>
    <p
      class="max-w-2xl mx-auto px-5"
    >Apart from code, I love cycling. Everyday, I'm riding a bike around the city for exercise in morning or go to work. Sometimes, I'm walking or running for to balance but I running so slow.</p>
    <div class="max-w-2xl mx-auto px-5">
      <p>You can find me online via:</p>
      <div class="flex flex-wrap items-center mb-16">
        <a href="https://www.twitter.com/dangvanthanh" class="flex flex-wrap items-center mr-3" target="_blank" rel="noopener noreferrer">
          <IconTwitter class="inline-block fill-current text-gray-700 mr-1" />
          <span class="text-gray-700">Twitter</span>
        </a>
        <a href="https://www.github.com/dangvanthanh" class="flex flex-wrap items-center" target="_blank" rel="noopener noreferrer">
          <IconGithub class="inline-block fill-current text-gray-700 mr-1" />
          <span class="text-gray-700">Github</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconTwitter from '~/components/IconTwitter'
import IconGithub from '~/components/IconGithub'

export default {
  components: {
    IconTwitter,
    IconGithub
  }
}
</script>

<style>
.poeta {
  min-height: 460px;
  filter: blur(3px);
}
</style>
