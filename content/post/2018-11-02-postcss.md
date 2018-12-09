---
title: "PostCSS"
slug: "postcss"
date: 2018-11-02T01:03:37+07:00
tags: ["css", "sass", "postcss"]
---

Lần trước tôi có đề cập tới [PostCSS](/blog/redesign-va-nhung-gi-tôi-hoc/#postcss). Nay tôi sẽ giới thiệu tổng quan về PostCSS cho các bạn. Cũng như [Sass](/blog/su-dung-sass/), PostCSS cũng cung cấp các chức năng như Sass:

- Khai báo biến
- Nhúng các tập tin CSS (Partial import)
- Cú pháp lồng (Nesting)
- Sử dụng lại với Mixins
- Kế thừa (Extends)

### Sử dụng PostCSS

Trước hết PostCSS một công cụ cho việc chuyển đổi CSS sử dụng JavaScript. Bạn có thể sử dụng nhiều công cụ như Webpack, Rollup, Gulp hay Grunt để chuyển đổi PostCSS sang CSS. Nhưng để đơn giản bạn nên bắt đầu làm quen PostCSS với [PostCSS CLI](https://github.com/postcss/postcss-cli)

Cách sử dụng để chuyển đổi như sau

```shell
$ postcss [input.css] -o [output.css] 
```

**Chú ý:** *Bạn có thể đổi `[input.css]` và `[output.css]` thành tên tập tin bạn mong muốn.*

Hoặc bạn có thể cấu hình thêm ở tập tin **postcss.config.js**

```javascript
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-each': {},
    'postcss-nested': {},
    'postcss-preset-env': { stage: 0, browsers: 'last 2 versions' }
  }
};
```

### Autoprefixer và Browserlist

[**Autoprefixer**](https://github.com/postcss/autoprefixer) là một PostCSS plugin phân tích cú pháp CSS của bạn và thêm các tiền tố (vendor prefixes) như `-wekit-`, `-moz-`, `-ms-`, `-o-` tương ứng với các trình duyệt.

```css
.example {
  display: grid;
  user-select: none;
}
```

Biên dịch thành CSS

```css
.example {
  display: -ms-grid;
  display: grid;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

Autoprefixer còn cho phép bạn có thể lựa chọn tiền tố cho từng trình duyệt cụ thể

```css
autoprefixer({ browsers: 'last 2 versions, > 1%' })
```

Với [**Browserlist**](https://github.com/browserslist/browserslist) thì việc cấu hình tiền tố cho từng trình duyệt cụ thể sẽ dễ dàng hơn với việc cấu hình trong **`package.json`**

```json
{
  "browserslist": [
    "last 1 version",
    "> 1%",
  ]
}
```

hoặc trong tập tin **`.browserslistrc`**
```css
last 1 version
> 1%
```

### PostCSS Preset Env

Ngoài việc định nghĩa biến bằng các thuộc tính CSS. [**PostCSS Preset Env**](https://preset-env.cssdb.org/) còn có những biến định nghĩa *media queries*, *selectors*, các chức năng về *color function*, *pseudo-class*, *nesting rules*... Bên cạnh đó còn giúp chuyển đổi các CSS hiện đại thành CSS mà hầu hết trình duyệt đều hỗ trợ.

```css
:root {
  --length: 24px;
}

@custom-media --tablet (min-width: 40em);
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

.round {
  width: var(--length);
  height: var(--length);
  border-radius: 100%;
}

.site :--heading + p {
  margin-top: 1rem;
}

@media (--tablet) {
  .site {
    font-size: 1rem;
  }
}
```

Biên dịch thành CSS

```css
.round {
  width: 24px;
  height: 24px;
  border-radius: 100%;
}

.site h1 + p,
.site h2 + p,
.site h3 + p,
.site h4 + p,
.site h5 + p,
.site h6 + p {
  margin-top: 1rem;
}

@media (min-width: 40em) {
  .site {
    font-size: 1rem;
  }
}
```

### CSS Modules

Mỗi lúc viết CSS bạn lo lắng tên của các `classes` được sử dụng quá chung chung. [**CSS Modules**](https://github.com/css-modules/css-modules) giúp tên các `classes` bạn định nghĩa được ánh xạ từ tên chung đó một cách có ý nghĩa nhất. CSS Modules thực tế được dùng nhiều với các bạn viết JavaScript nhiều hơn so với các bạn Web Designer (chỉ viết HTML và CSS) vì những ưu điểm:

- Dễ dàng tái sử dụng
- Không bị ảnh hưởng tới những chỗ khác
- Phụ thuộc rõ ràng vào chính bản thân nó
- Không có phạm vi Global mà chỉ nằm trong Scoped

Ví dụ ta có một file `style.css` 

```css
/* style.css */
.className {
  color: green;
}
```

Khi nhúng vào trong JavaScript module.

```javascript
import styles from './style.css';

element.innerHTML = '<div class="' + styles.className + '">';
```

Sau khi thực thi ta sẽ được kết quả

```html
<style>
  ._styles__title_2qkr5 {
    color: green;
  }
</style>

<div class="element">
  <div class="_styles__title_2qkr5"></div>
</div>
```

### Stylelint

[**Stylelint**](https://stylelint.io/) giúp bạn tránh những lỗi và đảm bảo convention cũng như cải thiện CSS khi bạn code CSS được toàn vẹn với những quy tắc chuẩn hoá và chặt chẽ. Stylelint cũng cung cấp cho PostCSS một plugin để dễ dàng cấu hình.

### PostCSS Có Gì Hay

Tới đây, một số bạn sẽ thắc mắc vậy PostCSS có gì hay hơn Sass nhỉ? Sass hầu như cũng làm được các chức năng trên cơ mà. Tuy nhiên PostCSS còn có những ưu điểm:

#### Từ Sass đến PostCSS

Bạn dễ dàng có thể tái sử dụng code [Sass](https://github.com/jonathantneal/postcss-sass) hay [SCSS](https://github.com/postcss/postcss-scss) trong PostCSS, thậm chí [Less](https://github.com/shellscape/postcss-less) hay [Stylus](https://github.com/seaneking/poststylus).

#### PostCSS Plugin

Hệ thống [plugin của PostCSS](https://www.postcss.parts/) rất đồ sộ và rất nhiều [plugin mạnh mẽ](https://github.com/postcss/postcss/blob/master/docs/plugins.md) như:

- [CSS MQPacker](https://github.com/hail2u/node-css-mqpacker): đóng gói các quy tắc về *media queries* giống nhau về thành một

    ```css
    h1 {
      font-size: 30px;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 36px;
      }
    }

    h3 {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      h3 {
        font-size: 24px;
      }
    }
    ```

    Biên dịch thành CSS

    ```css
    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 36px;
      }

      h3 {
        font-size: 24px;
      }
    }
    ```

- [CSSNano](https://cssnano.co/): Tối ưu code CSS như *minification*, *compresses inline SVG*, *duplicates*, *comments*, *unused rule*...

#### Tuỳ biến PostCSS

Chỉ cần một ít kiến thức về JavaScript bạn có thể dễ dàng [viết plugin cho PostCSS](https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md) với phong cách của riêng mình như:

- [Canadian Style Sheets](https://github.com/chancancode/postcss-canadian-stylesheets)
- [Tipsy](https://github.com/dangvanthanh/postcss-tipsy)
- [Trolling Style Sheets](https://github.com/juanfran/postcss-trolling)
- [Long Shadow Text](https://github.com/dangvanthanh/postcss-longshadow-text)
