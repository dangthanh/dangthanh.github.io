---
title: "Bắt đầu với Vue.js"
slug: "bat-dau-voi-vue"
date: 2018-12-04T03:19:52+07:00
tags: ["javascript", "vue", "css"]
---

[**Vue.js**](https://vuejs.org/) là một thư viện JavaScript giúp bạn dễ dàng xây dựng các giao diện (UI) từ đơn giản đến phức tạp.

Để bắt đầu với Vue.js bạn cần trang bị cho một những kiến thức cơ bản về HTML, CSS và JavaScript là nền tảng giúp bạn dễ dàng làm quen với Vue.js

### Vue.js có gì hay?

Điểm đầu tiên tui thích ở Vue.js là một trong số ít những thư viện JavaScript phát triển mà tài liệu hỗ trợ ngôn ngữ [tiếng Việt](https://vi.vuejs.org/). Cái này giúp ích rất nhiều, đặc biệt những bạn vừa làm quen với Vue.js và JavaScript. Bên cạnh đó tài liệu Vue.js còn hỗ trợ nhiều ngôn ngữ khác như [tiếng Anh](https://vuejs.org/), [tiếng Trung](https://cn.vuejs.org/), [tiếng Nhật](https://jp.vuejs.org), [tiếng Nga](https://ru.vuejs.org), [tiếng Hàn Quốc](https://kr.vuejs.org), [tiếng Bồ Đào Nha](https://br.vuejs.org), [tiếng Pháp](https://fr.vuejs.org).

Ngoài ra, Vue.js còn có nhiều ưu điểm:

- Dễ dàng để bắt đầu (với nền tảng HTML, CSS và JavaScript)
- Kết hợp linh hoạt với `SVG` để xây dựng `icons`, `charts`
- Giúp dễ dàng tái sử dụng thông qua các Component (tui sẽ giới thiệu thêm ở bên dưới)
- Tích hợp dễ dàng với các thư viện JavaScript khác như [date-fns](https://date-fns.org/), [gsap](https://greensock.com/gsap), [d3.js](https://d3js.org/), [three.js](https://threejs.org/)...

### Hệ sinh thái

Vue.js có một hệ sinh thái rất mạnh mẽ, giúp bạn lựa chọn viết cả ứng dụng web, mobile hay cả desktop:

- [Vue CLI](https://cli.vuejs.org/) một công cụ chuẩn được phát triển các ứng dụng Vue.js
- [Vue Devtools](https://github.com/vuejs/vue-devtools) là công cụ giúp bạn `debbuging` ứng dụng viết bằng Vue.js
- Single Page Application (SPA) với [Vue-Router](https://router.vuejs.org/) hoặc [Server-Side Rendering](https://ssr.vuejs.org/) cho việc tối ưu SEO và cập nhật các nội dung một cách nhanh chóng
- Quản lý các trạng thái và thư viện trong Vue.js với [Vuex](https://vuex.vuejs.org/)
- Viết mobile application bằng [Ionic Vue](https://github.com/ionic-team/ionic/tree/master/vue) hoặc [NativeScript-Vue](https://www.nativescript.org/vue)
- Hoặc có thể xây dựng ứng dựng desktop cho Windows, OS X và Linux bằng [Vuido](https://vuido.mimec.org/)


### Ứng dụng đầu tiên với Vue.js

Ở trên tui đã giới thiệu các bạn về **Vue CLI** một công cụ để phát triển các ứng dụng Vue.js nhưng ở đây để dễ dàng làm quen tui sử dụng cú pháp thuần JavaScript và HTML.

Đầu tiên bạn cần nhúng thư viện Vue.js và trong thẻ `<script>` và khai báo như sau:

```javascript
<div id="app">
  <h1>{{ msg }}</h1>
</div>
<script src="//unpkg.com/vue@2.5.17/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data() {
      return {
        msg: 'Hello Vue.js'
      }
    }
  });
</script>
```

và ta sẽ được kết quả

{{% codepen height="210" id="xQBQze" %}}

### Làm quen với Vue.js

Để bắt đầu làm quen với Vue.js bạn cần chú ý những khái niệm chính sau:

- Directives
- Components
- Transitions và Animations

#### 1. Directives

Directives trong Vue.js được sử dụng như một `attribute` trong thẻ của HTML, cung cấp những chức năng:

  - Hiển thị (view) như `v-text`, `v-html`, `v-pre`, `v-bind`
  - Input như `v-model`
  - Các sự kiện (event binding) như `v-on`
  - Điều khiển (conditionals) như `v-show`, `v-if`, `v-else`, `v-else-if`
  - Lặp lại (loop rendering) như `v-for`

    {{% codepen height="380" id="EOMvXj" %}}

#### 2. Components

Component là một tính năng rất hay và phổ biến hiện nay trong các thư viện được viết bằng JavaScript. Với việc sử dụng Component trong Vue.js bạn có thể tự mình xây dựng những Component như `modal`, `calendar`, `datepicker`, `slider`, `charts`...và tái sử dụng lại trong ứng dụng hoặc sử dụng vào bất kỳ nơi nào bạn muốn.

Component trong Vue.js có hai cách đăng ký cơ bản

- Đăng ký toàn cục, sử dụng trong toàn bộ ứng dụng (Global Registration)

    ```javascript
    Vue.component('component-name', {
      // ... options ...
    });
    ```

- Đăng ký cục bộ, sử dụng trong component được chỉ định (Local Registration). Ví dụ ở đây `BookComponent` chỉ được sử dụng trong `ArticleComponent` khi được đăng ký.

    ```javascript
    var BookComponent = { /* ... */ };
    var ArticleComponent = {
      components: {
        'book': BookComponent
      }
    };

    new Vue({
      el: '#app'
      components: {
        'article': ArticleComponent
      }
    });
    ```

    {{% codepen height="500" id="WYmmLX" %}}

#### 3. Transitions và Animations

Transitions và Animations là một phần hầu như không thể thiếu trong thiết kế UI và UX.

Transitions và Animations trong Vue.js khá linh hoạt. Bạn có thể sử dụng các thuộc tính của CSS transitions và animations hoặc các thư viện CSS animations như [Animate.css](https://daneden.github.io/animate.css/) hoặc thư viện JavaScript như [anime.js](http://animejs.com/) hay [popmotion](https://popmotion.io/) để tạo các hiệu ứng đẹp mắt.

Bạn có thể tạo `Transitions` cho một phần tử 

```javascript
<transition name="slide">
  <p v-if="show">Show Slide</p>
</transition>
```

hoặc một nhóm (danh sách) phần tử

```javascript
<transition-group name="items" tag="section">
  <div v-for="item in items" v-bind:key="item">
    {{ item }}
  </div>
</transition-group>
```

{{% codepen height="580" id="mQoYpa" %}}

### Túm lại

Vue.js là một thư viện khá tốt để các bạn đã có sẵn nền tảng về lập trình HTML, CSS và JavaScript có thể bắt đầu.
