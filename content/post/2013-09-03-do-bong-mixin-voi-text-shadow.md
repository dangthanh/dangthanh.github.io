+++
title = "Đổ Bóng Mixin Với Text-Shadow"
slug = "do-bong-mixin-voi-text-shadow"
date = "2013-09-03"
tags = ["css", "sass", "javascript"]
+++

CSS3 Text-Shadow là tính năng giúp bạn dễ dàng tạo đổ bóng cho text. Với text-shadow bạn cũng có thể dễ dàng tạo ra các kiểu chữ nghệ thuật (typography) hay kiểu chữ 3D...Và hôm nay mình sẽ giới thiệu các bạn **[cách tạo mixin](/blog/css-triangles-mixin-su-dung-sass/)** đổ bóng dài (long shadow) trong Sass.

### Đổ bóng dài (Long Shadow) mixin trong Sass

```sass
/**
 * Long Shadow Mixin
 */
@mixin longshadow($color, $size, $direction)
	$ts: null

	@for $i from 1 through $size
		// Đổ bóng hướng lên trên
		@if $direction == "top"
			$ts: 0 #{$i * -1}px 0 $color, $ts
		// Đổ bóng hướng sang phải
		@else if $direction == "right"
			$ts: #{$i}px 0 0 $color, $ts
		// Đổ bóng hướng xuống dưới
		@else if $direction == "bottom"
			$ts: 0 #{$i}px 0 $color, $ts
		// Đổ bóng hướng sang trái
		@else if $direction == "left"
			$ts: #{$i * -1}px 0 0 $color, $ts
		// Đổ bóng hướng lên trên bên trái
		@else if $direction == "top-left"
			$ts: #{$i * -1}px #{$i * -1}px 0 $color, $ts
		// Đổ bóng hướng lên trên bên phải
		@else if $direction == "top-right"
			$ts: #{$i}px #{$i * -1}px 0 $color, $ts
		// Đổ bóng hướng xuống dưới bên trái
		@else if $direction == "bottom-left"
			$ts: #{$i * -1}px #{$i}px 0 $color, $ts
		// Đổ bóng hướng xuống dưới bên phải
		@else if $direction == "bottom-right"
			$ts: #{$i}px #{$i}px 0 $color, $ts
	text-shadow: $ts
```

### Sử dụng

Sau khi tạo được mixin thì ta có thể sử dụng rất dễ dàng tùy theo màu sắc, độ lớn và vị trí bóng mà bạn muốn hiển thị.

```sass
.element--one
	+longshadow(#e96b5e, 20, top)
.element--two
	+longshadow(#a13c32, 10, right)
.element--three
	+longshadow(#fbbc85, 30, bottom)
.element--four
	+longshadow(#af7a4b, 40, left)
.element--five
	+longshadow(#6dd7b5, 70, top-left)
.element--six
	+longshadow(#3e9277, 90, top-right)
.element--seven
	+longshadow(#8787c4, 60, bottom-left)
.element--eight
	+longshadow(#525283, 50, bottom-right)
```

{{% codepen height="300" id="wLKan" %}}

Trên đây mình **[sử dụng Sass](/blog/su-dung-sass/)** để tạo đổ bóng dài, bạn cũng có thể tùy biến thêm như thêm chức năng bóng mờ cho bóng...Nếu bạn không muốn làm việc với Sass nhưng vẫn muốn dùng tạo text đổ bóng dài bạn có thể sử dụng **[Long Shadow jQuery Plugin](/labs/longshadow-jquery-plugin/)** mình đang viết và phát triển. Mình cũng rất mong nhận được góp ý của các bạn để hoàn thiện hơn mixin cũng như jQuery plugin này.
