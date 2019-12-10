---
title: "CSS Triangles Mixin trong Sass"
slug: "css-triangles-mixin-trong-sass"
date: "2013-08-20"
tags: ["css", "sass"]
---

Trong thiết kế web các hình khối như hình tam giác, hình tròn, hình chữ nhật...thường được sử dụng khá thường xuyên. Khi muốn tạo các chú thích (tooltips), trước đây bạn thường sử dụng hình ảnh bằng việc sử dụng các công cụ như Photoshop, Fireworsk...điều này có thể làm cho bạn phải vất vả thay đổi khi muốn thiết kế lại vị trí của chúng, nhưng với CSS Triangles bạn cũng có thể tạo cho mình những chú thích linh động hơn.

Bài viết trước mình cũng đã giới thiệu **[sử dụng Sass](/blog/su-dung-sass)** đến với các bạn. Hôm nay mình sẽ hướng dẫn các bạn viết CSS Triangles sử dụng Sass.

Để bạn có thể dễ dàng làm quen với mixin này. Đầu tiên mình sẽ hướng dẫn các bạn sử dụng điều khiển kiểm soát **@if**

> **@if** là một điều khiển của SassScript và được sử dụng dưới dạng lồng ghép nếu biểu thức trả về giá trị nào đó hoặc false hoặc null

```scss
$type: blue

p
	@if $type == red
		color: red
	@else if $type == green
		color: green
	@else if $type == blue
		color: blue
	@else
		color: white
```

Khi chuyển đổi thành CSS ta được

```css
p {
  color: blue;
}
```

Và sử dụng điều hướng **if** ta có thể viết CSS Triangles sử dụng Sass

### CSS Triangles Mixin trong Sass

```scss
/**
 * Dấu = bạn có thể thay thế bằng @mixin
 * nếu bạn sử dụng cú pháp SCSS
 */
=arrow($direction, $color, $size)
  $transparent: $size solid transparent
  $sizeborder: $size solid $color // Khai báo này sẽ giúp bạn tránh lặp lại code
  display: block
  height: 0
  width: 0

  // Mũi tên theo hướng lên trên
  @if $direction == "top"
    border:
      left: $transparent
      right: $transparent
      bottom: $sizeborder
  // Mũi tên theo hướng bên phải
  @else if $direction == "right"
    border:
      top: $transparent
      bottom: $transparent
      left: $sizeborder
  // Mũi tên theo hướng bên dưới
  @else if $direction == "bottom"
    border:
      top: $sizeborder
      right: $transparent
      left: $transparent
  // Mũi tên theo hướng bên trái
  @else if $direction == "left"
    border:
      top: $transparent
      right: $sizeborder
      bottom: $transparent
  // Mũi tên theo hướng trên bên phải
  @else if $direction == "top-right"
    border:
      top: $sizeborder
      right: $transparent
  // Mũi tên theo hướng trên bên trái
  @else if $direction == "top-left"
    border:
      top: $sizeborder
      left: $transparent
  // Mũi tên theo hướng dưới bên phải
  @else if $direction == "bottom-right"
    border:
      bottom: $sizeborder
      right: $transparent
  // Mũi tên theo hướng dưới bên trái
  @else if $direction == "bottom-left"
    border:
      bottom: $sizeborder
      left: $transparent
```

### Sử dụng CSS Triangles Mixin

Việc sử dụng CSS Triangles mixin cực kì đơn giản.

```scss
/**
 * Dấu + bạn có thể thay thế bằng @include
 * nếu bạn sử dụng cú pháp SCSS
 */
.arrow-top
  +arrow(top, rgba(255, 10, 10, .5), 50px)

.arrow-right
  +arrow(right, rgba(255, 10, 10, .5), 50px)
```

{{% codepen id="qKmfh" height="266" %}}

#### Sử dụng với CSS3 Pseudo :before hoặc :after để tạo tooltips

```scss
.tooltip
  background-color: #e74c3c
  display: inline-block
  width: 500px
  padding: 20px
  position: relative

  &:before
    content: ""
    position: absolute
    top: 30px
    left: -20px
    +arrow(left, #e74c3c, 20px) // Bạn có thể chọn vị trí khác cho phù hợp
```

{{% codepen id="jxchk" height="266" %}}

Với mixin này, mình hi vọng các bạn có thể cải tiến thêm các tooltips của website mình và khám phá thêm nhiều kĩ thuật mới qua việc sử dụng các điều khiển các Sass.
