+++
title = "HTML5 Fullscreen API"
slug = "html5-fullscreen-api"
date = "2013-09-22"
tags = ["javascript"]
+++

Khi muốn xem trang web ở chế độ toàn màn hình bạn thường nhấn phím **F11**. Tuy nhiên khi bạn chỉ muốn hiển thị chế độ toàn màn hình cho một phần tử nào đó thì chúng ta không thể thực hiện bằng cách trên.

HTML5 cung cấp một API mới cho phép bạn hiển thị toàn màn hình bất kì phần tử nào của một trang web đó là HTML5 Fullscreen API.

Các phương thức chính của HTML5 Fullscreen API.

Phương thức | Mô tả
--- | ---
.requestFullScreen() <br> .webkitRequestFullScreen() <br> .mozRequestFullScreen() | Hiển thị toàn màn hình với phần tử được chỉ định
.cancelFullScreen() <br> .webkitCancelFullScreen() <br> .mozRequestFullScreen() | Thoát chế độ hiển thị toàn màn hình
.fullScreen <br> .webkitIsFullScreen <br> .mozfullScreen | Xem phần tử đang hiển thị ở chế độ toàn màn hình
:full-screen <br> :-webkit-full-screen <br> :-moz-fullscreen | Tương tác với phần tử được chỉ định khi ở chế độ toàn màn hình.

<br>HTML5 Fullscreen API thực sự rất hữu ích khi bạn làm việc với các phần tử như hình ảnh hoặc video. Sau đây để hiểu rõ hơn cách làm việc với HTML5 Fullscreen API, mình xin viết một hướng dẫn việc sử dụng fullscreen với **[bản đồ sử dụng leaflet](/blog/html5-geolocation-va-leaflet/)**.

### HTML

~~~html
<div class="map-wrapper">
	<div id="map" class="map"></div>
	<a id="fullscreen" class="fullscreen" href="#">Fullscreen</a>
</div>
~~~

### JavaScript

#### Chế độ FullScreen

~~~javascript
var fullscreen_element = document.getElementById('map');
var fullscreen_button = document.getElementById('fullscreen');

fullscreen_button.addEventListener('click', function() {
	launchFullScreen(fullscreen_element);
}, false);

function launchFullScreen(element) {
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	} else if (element.msRequestFullScreen) {
		element.msRequestFullScreen();
	}
}
~~~

#### Thoát chế độ FullScreen

~~~javascript
function cancelFullscreen() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}
~~~

### CSS

Ở chế độ fullscreen ta có thể stylesheet cho thành phần được lựa chọn.

~~~css
.map:-webkit-full-screen { width: 100%; height: 100%; }
.map:-moz-full-screen { width: 100%; height: 100%; }
.map:-ms-full-screen { width: 100%; height: 100%; }
.map:full-screen { width: 100%; height: 100%; }
~~~

HTML5 FullScreen API là một API đơn giản và mạnh mẽ. Mình hi vọng với API đơn giản này các bạn có thể viết những ứng dụng tương tác dễ dàng hơn khi cần hiển thị chế độ toàn màn hình.

{{% caniuse features="fullscreen" %}}
