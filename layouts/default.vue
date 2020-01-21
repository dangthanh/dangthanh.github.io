<template>
  <AppLayout>
    <nuxt />
  </AppLayout>
</template>

<script>
import AppLayout from '~/components/Layout/AppLayout';

export default {
  components: { AppLayout }
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
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}

/* .page-enter-active {
  animation: acrossIn .45s ease-out both;
}

.page-leave-active {
  animation: acrossOut .65s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0)
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
} */

.iframe-container iframe {
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
}
</style>
