---
title: "Sử dụng Sass"
slug: "su-dung-sass"
date: "2013-07-24"
tags: ["css", "sass"]
---

Bạn đã từng nghe về những CSS Preprocessors như [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) hay [Stylus](http://learnboost.github.io/stylus/).

### CSS Preprocessor là gì?

CSS Preprocessor là một ngôn ngữ kịch bản mở rộng của CSS và được biên dịch thành cú pháp CSS.

Sau đây là một vài lợi ích của việc sử dụng CSS Preprocessor:

- Tiết kiệm thời gian viết CSS.
- Dễ dàng bảo trì và phát triển CSS.
- Linh hoạt và có thể sử dụng lại các CSS.
- Các tập tin CSS được tổ chức rõ ràng.

### Sass là gì?

Sass là một mở rộng CSS cung cấp thêm các quy tắc xếp chồng (nested rules), biến (variables), mixins, thừa kế (selector inheritance), các hàm (function)...

Để cài đặt Sass đầu tiên bạn cần cài đặt Ruby. Mình đang xài Windows nên mình sẽ hướng dẫn các bạn cài đặt Ruby trên Windows thông qua [RubyInstaller](http://rubyinstaller.org/).

Sau khi cài đặt xong Ruby bạn cài đặt môi trường cho Ruby **(Computer -> Properties -> Advanced -> Enviroment Variables... )**.

![Cài đặt môi trường cho Ruby trên Windows](/images/blog/rubyinstaller.jpg)

Tiếp theo bạn cài đặt Sass bằng cách mở CMD và gõ:

```bash
gem install sass
```

Sass cung cấp hai định dạng tập tin mở rộng .scss và .sass. Để chuyển đổi tập tin sass sang .css bạn thực hiện lệnh sau:

```bash
sass stylesheet.scss stylesheet.css
```

Để thực hiện chuyển đổi trong quá trình làm việc bạn thực hiện lệnh sau:

```bash
sass --watch stylesheet.scss:stylesheet.css
```

Bạn làm việc với thư mục và cần chuyển đổi tất cả thì có thể thực hiện lệnh sau:

```bash
sass --watch sass:css
```

Ở trên mình sử dụng command-line để thực hiện chuyển đổi sass sang css. Nếu bạn không thân thiện với command-line bạn có thể sử dụng các GUI sau:

- **[Scout](http://mhs.github.io/scout-app/)**
- **[Prepros](http://alphapixels.com/prepros/)**
- **[Koala](http://koala-app.com/)**

### Tại sao lại sử dụng Sass?

Sass, Less hay Stylus đều mạnh mẽ, việc sử dụng CSS Preprocessor nào còn phụ thuộc vào môi trường làm việc của bạn. Vì thế hãy tìm hiểu và chọn cho mình một CSS Preprocessor phù hợp nhất với mình.

### Tổng quan về Sass

#### Cú pháp

Như đã đề cập ở trên Sass hỗ trợ hai định dạng **SCSS (.scss)** và **Sass (.sass)**. Cú pháp SCSS không khác với cú pháp của CSS nên rất phù hợp với bạn nào muốn làm quen với Sass. Còn Sass thì cú pháp nghiêm ngặt hơn một tý, về cách thụt lùi khoảng trắng và không sử dụng "**{}**" và "**;**" (Mình thích sử dụng cú pháp Sass vì nó gọn gàng hơn)

```css
body {
	font:
		family: Helvetica, Arial, sans-serif;
		size: 16px;
		style: normal;
}
```

```scss
body
	font:
		family: Helvetica, Arial, sans-serif
		size: 16px
		style: normal
```

Sau khi biên dịch ta sẽ có:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
}
```

Để các bạn dễ làm quen với Sass. Nên các ví dụ dưới đây mình sẽ dùng cú pháp SCSS.

#### Quy tắc xếp chồng (Nested Rules)

Các quy tắc xếp chồng sẽ giúp bạn đồng bộ những thành phần cùng với nhau.

```css
nav {
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 10px;
  }
}
```

Biên dịch thành CSS.

```css
nav ul {
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 10px;
}
```

**Quy tắc xếp chồng các thuộc tính**

Trong Sass với những thuộc tính như margin, padding, border...chúng ta có thể xếp chồng để tránh những khai báo không cần thiết.

```css
.heading {
	text:
		align: center;
		decoration: none;
		transform: uppercase;
}
```

Biên dịch thành CSS.

```css
.heading {
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
```

**Quy tắc xếp chồng media queries**

Sass cung cấp quy tắc xếp chồng giúp bạn làm việc tốt hơn với media queries.

```css
header {
  width: 960px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
}
```

Biên dịch thành CSS.

```css
header {
  width: 960px;
}
@media screen and (max-width: 960px) {
  header {
    width: 100%;
  }
}
```

**Kí hiệu "&"**

Sass cung cấp một cách viết để thêm cho vùng chọn trước phổ biến như pseudo class như :hover, :active...Ngoài ra "&" còn lồng ghép lớp cha cho thuộc tính được khai báo.

```css
a {
  color: #f9f9f9;
  text-decoration: none;
  &:hover {
    color: #000;
  }
  header & {
    font-size: 30px;
  }
}
```

Biên dịch thành CSS.

```css
a {
  color: #f9f9f9;
  text-decoration: none;
}
a:hover {
  color: #000;
}
header a {
  font-size: 30px;
}
```

#### Biến

Biến là một trong những tính năng hữu ích mà Sass cung cấp. Với Sass bạn có thể khai báo biến và sử dụng lại chúng khi cần thiết.

```css
$base-font: 16px;
$base-color: #444;
$heveltica: Helvetica, Arial, sans-serif;

body {
  color: $base-color;
  font: $base-font $heveltica;
}
```

Biên dịch thành CSS.

```css
body {
  color: #444444;
  font: 16px Helvetica, Arial, sans-serif;
}
```

#### Mixins

Mixins cung cấp một cách hòa trộn dễ dàng giữa các thuộc tính và giá trị và chia sẻ giữa các bộ chọn khác nhau.

Mixins được định nghĩa bởi **@mixin** (SCSS) và **=** (Sass). Và bạn có thể gọi mixin bằng cách sử dụng **@include** (SCSS) hoặc **+** (Sass)

```css
@mixin button($color, $color-hover) {
  color: $color;
  &:hover {
    color: $color-hover;
  }
}

.button {
  @include button(#fafafa, #aaa);
}
```

Biên dịch thành CSS.

```css
.button {
  color: #fafafa;
}
.button:hover {
  color: #aaa;
}
```

**Tham số mặc định**

Ta sử dụng lại ví dụ trên với giá trị tham số mặc định. Và bạn có thể ghi đè lại nếu muốn.

```css
@mixin button($color: #fafafa, $color-hover: #aaa) {
  color: $color;
  &:hover {
    color: $color-hover;
  }
}
.button {
  @include button(#ddd);
}
```

Biên dịch thành CSS.

```css
.button {
  color: #ddd;
}
.button:hover {
  color: #aaa;
}
```

**Nhiều biến tham số**

Khi một hoặc nhiều giá trị trong tham số bạn có thể khai báo với với **...** trong mixin.

```css
@mixin transition($trans...) {
  -webkit-transition: $trans;
  -moz-transition: $trans;
  transition: $trans;
}
.transition {
  @include transition(all 0.5s linear);
}
```

Biên dịch thành CSS.

```css
.transition {
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  transition: all 0.5s linear;
}
```

**@import**

Trong Sass **@import** giúp bạn tổ chức cấu trúc các tập tin CSS được tốt hơn. Ta có thể xây dựng một cấu trúc cho website mình như sau:

```bash
web
|--css
|--sass
  |--_normalize.scss
  |--_typography.scss
  |--_grid.scss
  |--_form.scss
  |--stylesheet.scss
```

Trong tập tin **stylesheet.scss** ta có thể khai báo như sau và sau đó biên dịch nó thành tập tin **stylesheet.css** duy nhất.

```css
@import "normalize";
@import "typography";
@import "grid", "form";
```

#### Kế thừa

Đây là tính năng giúp bạn sử dụng lại nhiều thuộc tính khai báo trong CSS.

**Sử dụng @extend**

```css
.alert {
  background-color: #fcfcfc;
  border-radius: 4px;
  padding: 15px;
}

.alert-success {
  @extend .alert;
  color: #464646;
}
```

Biên dịch thành CSS.

```css
.alert {
  background-color: #fcfcfc;
  border-radius: 4px;
  padding: 15px;
}
.alert-success {
  background-color: #fcfcfc;
  border-radius: 4px;
  padding: 15px;
  color: #464646;
}
```

**Placeholder kế thừa**

Đây là tính năng kế thừa nhằm tránh những khai báo thuộc tính không cần thiết. Bạn có thể khai báo placeholder kế thừa bằng **%**

```css
%alert {
  background-color: #fcfcfc;
  border-radius: 4px;
  padding: 15px;
}
.alert-success {
  @extend %alert;
  color: #464646;
}
.alert-error {
  @extend %alert;
  color: #b94a48;
}
```

Biên dịch thành CSS.

```css
.alert-success,
.alert-error {
  background-color: #fcfcfc;
  border-radius: 4px;
  padding: 15px;
}
.alert-success {
  color: #464646;
}
.alert-error {
  color: #b94a48;
}
```

**Kế thừa phần tử**

Kế thừa trong Sass cũng hỗ trợ làm việc với các phần tử.

```css
.box {
  padding: 20px;
  h3 {
    font-size: 20px;
  }
}
.sub-box {
  @extend .box;
}
```

Biên dịch thành CSS.

```css
.box,
.sub-box {
  padding: 20px;
}
.box h3,
.sub-box h3 {
  font-size: 20px;
}
```

#### Các điều khiển trong Sass

Sass cung cấp cho bạn điều khiển logic sau:

- @if
- @for
- @each
- @while

Muốn làm việc với các điều khiển trong Sass thì bạn nên có chút kiến thức lập trình cơ bản nên mình sẽ dành riêng một bài viết hướng dẫn chi tiết hơn.

### Lời kết

Trên đây chỉ là tổng quan về Sass. Sass mang lại cho ta rất nhiều hữu ích tuy nhiên Sass không giúp ta có thể viết CSS tốt hơn. Vì thế bạn hãy nên tìm hiểu cách viết CSS tốt hơn như OOCSS (hướng đối tựng trong CSS), SMACSS, BEM...Và Sass sẽ là một công cụ tốt để bạn thực hiện việc đó.
