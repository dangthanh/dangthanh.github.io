+++
title = "HTML5 Geolocation và Leaflet"
slug = "html5-geolocation-va-leaflet"
date = "2013-08-15"
tags = ["javascript"]
+++

Geolocation là một API mới của HTML5 cho phép bạn truy cập vào vị trí hiện tại của bạn trên thiết bị.

Geolocation gồm 3 phương thức:

~~~javascript
/**
 * Lấy vị trí hiện tại của thiết bị
 */
navigator.geolocation.getCurrentPosition();

/**
 * Cho phép khởi tạo một xử lí khi thiết bị thay đổi vị trí
 */
navigator.geolocation.watchPosition();

/**
 * Xóa xử lí được khởi tạo trước đó bởi watchPosition()
 */
navigator.geolocation.clearWatch()
~~~

### Lấy vị trí hiện tại sử dụng Geolocation

Để lấy vị trí hiện tại ta có thể sử dụng phương thức

- **navigator.geolocation.getCurrentPosition()**

~~~javascript
function success(position) {
	var	latitude = position.coords.latitude,
		longitude = position.coords.longitude,
		altitude = position.coords.altitude,
		accuracy = position.coords.accuracy;

	// Hiển thị các thông số về vị trí hiện tại của bạn.
	console.log(latitude);
	console.log(longitude);
	console.log(altitude);
	console.log(accuracy);
}

function error() {
	console.log('Không thể truy cập đến vị trí hiện tại.');
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

navigator.geolocation.getCurrentPosition(success, error, options);
~~~

### Leaflet là gì?

[Leaflet](http://leafletjs.com/) là một thư viện JavaScript mã nguồn mở cung cấp các tương tác với bản đồ thân thiện với các thiết bị di động.

Cũng như Google Map API. Nhưng Leaflet được thiết kế đơn giản, hiệu quả và dễ sử dụng:

+ Dễ dàng tương tác với HTML5 và CSS3.
+ Hỗ trợ rất nhiều plugin.
+ Tài liệu hướng dẫn về API rất tốt và dễ sử dụng
+ Cung cấp đầy đủ các tính năng để tương tác với bản đồ.

Với API của Leaflet ta có thể tương tác với bản đồ một cách linh hoạt hơn. Sau đây là ví dụ làm việc đơn giản với Leaflet

~~~javascript
/**
 * Khởi tạo bản đồ với "map" div
 * với vị trí latitude, longitude và zoom bản đồ
 */
var map = L.map('map', {
	center: [latitude, longitude],
	zoom: 16
});

/**
 * Khởi tạo và hiển thị các lớp trên bản đồ
 * Bạn vào Cloudmade.com đăng kí một tài khoản để có thể lấy API
 */
L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
    key: '760506895e284217a7442ce2efe97797', // Đây là API mình đã đăng kí với cloudmade
    styleId: 103288,
    maxZoom: 16
  }).addTo(map);

/**
 * Đánh dấu vị trí trên bản đồ
 */
var maker = L.marker([latitude, longitude]).addTo(map);
// Hiển thị Popup tại vị trí đánh dấu
marker.bindPopup('<p>Tiêu đề...</p>').openPopup();
~~~

{{% codepen heght="400" id="tlpLG" %}}

** Ngoài ra, bạn có thể vào những liên kết sau để tìm hiểu thêm về Geolocation và Leaflet:

- [W3 - Geolocation API](http://www.w3.org/TR/geolocation-API/)
- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation)
- [Leaflet API](http://leafletjs.com/reference.html)
- [Cloudmade](http://cloudmade.com/)
