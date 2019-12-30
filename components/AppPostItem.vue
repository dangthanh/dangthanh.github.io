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
  props: ['post'],
  mounted() {
    const links = document.querySelectorAll('a');
    const host = window.location.host;

    links.forEach(link => {
      if (link.href.indexOf(host) === -1) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }
};
</script>

<style>
.article {
  margin-bottom: 1.25rem;
}

.article time {
  font-size: 0.875rem;
}

.article h2 {
  margin-top: 0.675rem;
  margin-bottom: 1.675rem;
}

.article-body a {
  text-decoration: none;
  color: #4a6bef;
  position: relative;
  display: inline-block;
}

.article-body a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #4a6bef;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s linear;
}

.article-body a:focus::after,
.article-body a:hover::after {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.article-body table {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0.5rem 1rem;
  width: 100%;
}

.article-body table th {
  text-transform: uppercase;
}

.article-body table td,
.article-body table th {
  padding: 0.5rem 1rem;
  border: 1px solid #5e3f09;
  border: 1px solid #5e3f09;
}

.article-body .hljs code {
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  tab-size: 2;
}

.article-body blockquote {
  font-weight: 700;
  font-size: 1.2rem;
  border-bottom: 3px solid #eee8d5;
  border-bottom: 3px solid #eee8d5;
  border-top: 3px solid #eee8d5;
  border-top: 3px solid #eee8d5;
  padding: 0.625rem;
  margin: 1.625rem 0 1.625rem 3rem;
  text-align: center;
}

.article-body img {
  height: auto;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  margin: 0 auto;
}

.article-body img.lazy-image {
  opacity: 0.1;
  will-change: opacity;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.article-body img.lazy-image.loaded {
  opacity: 1;
  width: auto;
  height: auto;
  background-color: transparent;
}

.article-body ul,
.article-body ol {
  padding-left: 1.5rem;
}

.article-body ul {
  list-style: disc;
}

.article-body ol {
  list-style: decimal;
}

.article-body ol li,
.article-body ul li {
  margin: 0.625rem 0;
}

.article-body ol li:last-child,
.article-body ul li:last-child,
.article-specific ol li:last-child,
.article-specific ul li:last-child {
  margin-bottom: 0;
}

.article-body p,
.article-body pre,
.article-body h4,
.article-body ul,
.article-body ol {
  margin-bottom: 1rem;
}

.article-body h3,
.article-body h4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.article-body h3 {
  font-size: 2rem;
}

.article-body h4 {
  font-size: 1.4rem;
}
</style>
