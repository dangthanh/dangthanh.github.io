---
title: "Functional CSS"
slug: "functional-css"
date: 2018-11-06T21:03:27+07:00
tags: ["css", "postcss", "tailwindcss"]
---

Khi viết CSS cho web. Có rất nhiều CSS Framework để bạn lựa chọn. Và một số CSS Framework sau đây thì rất phổ biến:

- [Bootstrap](http://getbootstrap.com/)
- [Foundation](https://foundation.zurb.com/)
- [Bulma](https://bulma.io/)
- [Sematic UI](https://semantic-ui.com/)
- [UI Kit](https://getuikit.com/)

Những CSS Framework trên giúp bạn xây dựng Prototype, Responsive Design một cách linh hoạt và dễ dàng.

Hôm nay tui sẽ giới thiệu thêm với các bạn về Functional CSS (được thường được gọi là `Utility-first CSS` hay `Atomic CSS`)

### Vậy Functional CSS là gì?

Về cơ bản, **Functional CSS** là tập hợp hàng ngàn `classes` nhỏ định nghĩa cho từng chức năng, thuộc tính, quy tắc của CSS.

Ví dụ:

```html
<div class="component">
...
</div>

<style>
.component {
  background: #333;
  margin: 20px;
  padding: 10px;
  color: #fff;
  border: 1px solid #555;
}
</style>
```

Với Functional CSS ta viết như sau:

```html
<div class="bg-grey m-20 p-10 text-white border border-solid border-grey-dark">
...
</div>

<style>
.bg-grey { background: #333 };
.m-20 { margin: 20px; }
.p-10 { padding: 10px; }
.text-white { color: #fff; }
.border { border-width: 1px; }
.border-solid { border-style: solid; }
.border-grey-dark { border-color: #555; }
</style>
```

Vậy hoá ra nó cũng giống với **Inline Style** mà thỉnh thoảng trước đây ta cũng hay dùng nhỉ?

```html
<div style="background: #333; margin: 20px; padding: 10px; color: #fff; border: 1px solid #555;">
...
</div>
```

### Sự khác nhau giữa Functional CSS và Inline Style

Nhìn vào ví dụ trên bạn có thể nghĩ là cách viết Functional CSS và Inline Style có vẻ giống nhau. Nhưng Functional CSS rất khác với Inline Style về những điểm sau:

1. Functional CSS là những `classes` được định nghĩa trước. Và các `classes` này được nhất quán với từng `classes` bạn định nghĩa như về phông chữ, màu sắc, khoảng cách (margin hoặc padding) nên bạn sẽ dễ dàng sử dụng lại so với kiểu dùng Inline Style

    ```html
    <div class="bg-blue text-sm"></div>
    ```

    so với 

    ```html
    <div style="background: blue; font-size: 10px;"></div>
    ```

2. Functional CSS hỗ trợ **media queries**. Giúp bạn có thể xây dựng Responsive Design.
3. Functional CSS có thể sử dụng để hỗ trợ cho từng kiểu in cụ thể bạn muốn với CSS.
4. Với **Pseudo-classes CSS** như `::before`, `::after` hay `:hover`. Functional dễ dàng giúp bạn định nghĩa còn Inline Style thì không thể.

### Lợi ích khi dùng Functional CSS

Tui cũng thường hay sử dụng Bootstrap để xây dựng web. Nhưng từ sau khi chuyển sang dùng Functional CSS tui thấy có những lợi ích sau:

- Thời gian xây dựng web của tui nhanh hơn. Tăng lên khoảng 1.5 hoặc 2 lần so với trước.
- Không còn lo lắng về việc sử dụng `Naming CSS` nữa.
- Dễ dàng bảo trì và phát triển CSS.
- Tránh được việc lặp đi lặp lại code, tăng `performance` lên.
- Dễ dàng xây dựng hầu hết các `Component UI` mà không cần viết thêm nhiều CSS.
- Bằng việc mô tả cách sử dụng Functional CSS thì các bạn Developer cả `Backend` lẫn `Frontend` cũng dễ dàng chỉnh sửa.

### Sử dụng thư viện Functional CSS nào?

Nếu bạn không có thời gian để xây dựng các `Utility-first CSS` thì bạn có thể tham khảo và sử dụng những thư viện tui đề cập dưới đây:

- [Basscss](http://basscss.com/) - thư viện đầu tiên Functional CSS mà tui sử dụng.
- [Tachyons](http://tachyons.io/) - đây là thư viện tui sử dụng để làm giao diện blog này phiên bản trước đây.
- [TailwindCSS](https://tailwindcss.com/) - thư tiện tui thích nhất và thường sử dụng cho đến bây giờ.
- [Colors.css](https://github.com/mrmrs/colors) - sử dụng màu sắc cho web.

### Vậy Functional CSS không có nhược điểm?

Bất kỳ thư viện nào đều có những ưu và nhược điểm. Nhưng thường tui chỉ nêu lên ưu điểm thôi. Còn nhược điểm có lẽ là tui để các bạn tự dùng và trải nghiệm nhé. Bởi vì có thể tui thích cái X còn bạn thì lại thích cái Y. Nên tui nghĩ rằng bạn nên thử sử dụng chúng và xem thư viện nào phù hợp với mình nhé.

### Tailwind CSS

Như đã nói trên, **Tailwind CSS** là thư viện mà tui rất thích. Nên tui sẽ giới thiệu bạn một số ví dụ tui sử dụng nó để xây dựng UI nhé.

#### Login

{{% codepen height="525" id="jQEJNb" %}}

#### Card

{{% codepen height="570" id="vQEZKM" %}}

#### Navigation

{{% codepen height="210" id="NEPyKE" %}}

#### Table

{{% codepen height="440" id="MzYraB" %}}

#### Plan

{{% codepen height="400" id="oQgVOR" %}}
