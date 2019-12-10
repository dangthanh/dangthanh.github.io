---
title: "Web Storage"
slug: "web-storage"
date: "2013-08-10"
tags: ["javascript"]
---

Để lưu trữ thông tin ở phía trình duyệt, trước đây ta vẫn thường dùng cookies. Nhưng cookies vẫn còn một số hạn chế:

+ Khi truyền tải, cookies mang theo HTTP request, đều này sẽ làm chậm đi ứng dụng web của bạn.
+ Giới hạn dung lượng thấp chỉ 4 KB.
+ Thật khó để duy dõi nhiều cookies trên một trang web.

HTML5 cung cấp một API mới để có thể lưu trữ dữ liệu ở phía client với nhiều cải thiện cho cookies là web storage. Một số ưu điểm web storage so với cookies:

+ Dung lượng lên đến 5 MB (trình duyệt Google Chrome, Mozilla Firefox, Opera), 10 MB (Internet Explorer)
+ Dữ liệu web storage sẽ không được truyền đến máy chủ
+ Cung cấp hai cách lưu trữ khác nhau: local storage và session storage

### Web Storage

Web Storage hiện tại đã hỗ trợ rất nhiều trình duyệt.

{{% caniuse features="namevalue-storage" %}}

Web Storage cung cấp các phương thức sau. Ở đây mình sử dụng localStorage, bạn có thể sử dụng sessionStorage nếu muốn.

~~~javascript
localStorage.setItem('key', 'value') // Lưu trữ dữ liệu
localStorage.getItem('key')          // Lấy dữ liệu
localStorage.removeItem('key')       // Xóa dữ liệu lưu trên key
localStorage.clear()                 // Xóa tất cả dữ liệu lưu bởi web storage
~~~

### Sử dụng Local Storage

Dữ liệu trên local storage sẽ được tự động chuyển sang kiểu 'string' trên trình duyệt. Tuy nhiên local storage lại hoạt động rất tốt với đối tượng trong JavaScript.

~~~javascript
// Lưu trữ một đối tượng
localStorage.setItem('key', {name: 'value'});
console.log(typeof localStorage.getItem('key')); // string

// Lữu trữ một kiểu số
localStorage.setItem('key', 1);
console.log(typeof localStorage.getItem('key')); // string

// Lưu trữ một đối tượng
localStorage.setItem('key', JSON.stringify({name: 'Dang Thanh', age: 24}));
var obj = JSON.parse(localStorage.getItem('key'));
console.log(obj.name); // value
console.log(obj.age);  // value
~~~

### Ví dụ Local Storage

{{% codepen id="jCcxI" %}}
