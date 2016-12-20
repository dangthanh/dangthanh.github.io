+++
title = "Giới Thiệu CSS3 Transform"
slug = "gioi-thieu-css3-transform"
date = "2013-09-01"
categories = ["css3"]
+++

CSS3 transform là một trong những chức năng mạnh mẽ mà CSS3 cung cấp. Nó cho phép tác động đến tất cả các phần tử của HTML mà không ảnh hưởng đến cách xây dựng layout cho trang web như xoay phần tử, di chuyển các phần tử sang trái, phải, lên xuống, nghiêng hay phóng to hoặc thu nhỏ phần tử.

CSS3 transform cung cấp cả 2D CSS transform và 3D CSS transform.

### Cú pháp

~~~css
.element {
	-webkit-transform: method(value); // Chrome, Safari, Opera
	-moz-transform: method(value); // Firefox
	-ms-transform: method(value); // Internet Explorer 9+
	transform: method(value);
}
~~~

Các phương thức trên bạn có thể thay thế bằng một trong các phương thức sau:

- translate()
- scale()
- rotate()
- skew()

### 2D CSS Transform

#### 1. Translate

~~~css
.element {
	width: 200px;
	height: 200px;
	transform: translate(50px, 50px);
}
~~~

Translate là phương thức cho phép bạn có thể di chuyển phần tử sang các hướng trái phải, trên dưới. Phương thức này bao gồm hai giá trị **X** và **Y**. Giá trị **X** cho phép phần tử di chuyển theo hướng ngang (trái phải) và giá trị **Y** cho phép phần tử di chuyển theo hướng dọc (trên dưới). Bên cạnh phương thức translate() thì translate còn hai phương thức khác là:

- translateX()
- translateY()

{{% codepen height="325" id="woaLp" %}}

#### 2. Scale

~~~css
.element {
	width: 200px;
	height: 200px;
	transform: scale(1.5);
}
~~~

Scale là phương thức cho phép bạn có thể phóng to hoặc thu nhỏ phần tử so với kích thước thật của phần tử. Kích thước thật được phương thức scale() mặc định là 1. Vì thế bạn muốn phóng to thì có thể khai báo giá trị > 1 và thu nhỏ thì khai báo giá trị < 1. Đặc biệt khi bạn khai báo **scale(0)** thì phần tử sẽ biến mất nên bạn cần chú ý khi sử dụng phương thức này.

{{% codepen id="DLKHt" %}}

#### 3. Rotate
~~~css
.element {
	width: 200px;
	height: 200px;
	transform: rotate(90deg);
}
~~~

Rotate là phương thức cho phép bạn xoay phần tử và giá trị được ghi bằng độ (degrees).

{{% codepen id="Birzn" %}}

#### 4. Skew

~~~css
.element {
	width: 200px;
	height: 200px;
	transform: skew(50deg, 20deg);
}
~~~

Skew là phương thức cho phép bạn nghiêng phần tử. Cũng như phưng thức translate() và rotate(), phương thức skew() hỗ trợ phần tử nghiêng theo chiều ngang hoặc dọc và giá trị được ghi bằng độ (degrees).

{{% codepen id="EbKlw" %}}

#### 5. Sử dụng kết hợp nhiều phương thức

Ngoài việc sử dụng độc lập các phương thức translate(), scale(), rotate(), skew(). Ta có thể kết hợp các phương thức lại với nhau để tạo nên phần tử linh hoạt hơn.

~~~css
.element {
	width: 200px;
	height: 200px;
	transform: translate(50px, 50px) scale(1.5) rotate(90deg) skew(50deg, 20deg);
}
~~~

### 3D CSS Transform

3D CSS transform cũng tương tự 2D CSS transform. Nhưng 3D CSS transform hỗ trợ thêm một số phương thức cho không gian thứ ba.

~~~css
/**
 * Translate
 */
translate3d(x, y, z)
translateZ(z)

/**
 * Scale
 */
scale3d(sx, sy, sz)
scaleZ(sz)

/**
 * Rotate
 */
rotateX(rx)
rotateY(ry)
rotateZ(rz)
rotate3d(rx, ry, rz)

/**
 * Perspective
 * Giá trị này không ảnh hưởng đến phần tử nhưng
 * nó ảnh hưởng sự biến đổi các yếu tố của 3D transform
 * như rotateX(), rotateY()...
 */
perspective(value)
~~~

{{% codepen height="265" id="Birzn" %}}

### Trình duyệt hỗ trợ

Hiện tại CSS3 Transform đã hỗ trợ rất nhiều trình duyệt.

{{% caniuse features="transforms2d" %}}
{{% caniuse features="transforms3d" %}}
