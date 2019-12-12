<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #f1f2f6;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.code-javascript {
  color: #ffb115;
}

.code-vue {
  color: #4fc08d;
}

.code-css {
  color: #563d7c;
}

.code-hugo {
  color: #375eab;
}

.code-postcss {
  color: #dd390b;
}

.code-personal {
  color: #4a6bef;
}

p {
  margin-bottom: 1rem;
}
</style>
