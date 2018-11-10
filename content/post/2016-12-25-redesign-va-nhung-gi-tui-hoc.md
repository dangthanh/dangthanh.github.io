+++
title = "Redesign và những gì tui học"
slug = "redesign-va-nhung-gi-tui-hoc"
date = "2016-12-25"
tags = ["personal", "css", "postcss", "hugo", "javascript"]
+++

Thực ra bài viết này đã có từ lâu, nhưng tui vẫn để nó ở chế độ bản nháp và cũng do lười (quá lười) nên cũng từ lâu tui cũng bỏ thói quen viết blog. Nay tui chia sẻ những kinh nghiệm khi thiết kế lại blog này.

### Thiết kế

Vì không phải là một Designer nên tui không giỏi về thiết kế lắm. Nên tui vẫn giữ kiểu thiết kế tối giản (minimalism) cho trang blog này.

Blog mới cung cấp hai giao diện, giúp bạn không bị mỏi mắt khi đọc lâu. Bạn nhấn vào biểu tượng ở góc phải để đổi sang giao diện yêu thích nhé. Có thể tui sẽ cập nhật thêm về màu sắc xíu nữa cho phù hợp.

![Dang Thanh Blog - phiên bản light and dark](/images/blog_v2.png)

Tui cũng đã xoá đi hệ thống phản hồi (trước đây tui dùng [Disqus](https://disqus.com/)) vì thấy nó không hữu ích. Các bạn có thể liên hệ hoặc trao đổi với tui qua <a href="mailto:dangvanthanh@dangthanh.org">email</a>.

### Hugo

So với [Jekyll](/blog/blog-va-toi/), [Hugo](https://gohugo.io/) hỗ trợ xây dựng blog nhanh và tích hợp live reload dễ dàng cho việc phát triển blog hơn.

Hugo cung cấp thêm nhiều chức năng mới như:

- Chuyển đổi `SCSS` hay `Sass` sang CSS
- Hỗ trợ tốt `PostCSS`
- Tối ưu các tập tin `CSS`, `JavaScript`, `JSON`, `HTML`, `SVG`, `XML`
- Cải tiến hiển thị hightlight cho code với [Chroma](https://github.com/alecthomas/chroma)

Bên cạnh đó, việc chuyển đổi sang Hugo giúp tui tuỳ biến phân trang dễ dàng. Giúp bạn dễ dàng chọn được trang cũng như tìm kiếm bài viết theo từng chủ đề trong chuyên mục [lưu trữ](/tags) cùng với hệ thống phân [bài viết theo thứ tự alphabet](/tags/css/).

### CSS

Vì lí do tối giản cả thiết kế lẫn CSS. Nên với phiên bản này tui không sử dụng [Tachyons](http://tachyons.io/) nữa. Mặc dù Tachyons rất hữu ích, giúp việc xây dựng giao diện tuỳ biến cao, cũng như xây dựng những giao diện phức tạp một cách dễ dàng. Với một vài thay đổi dưới đây, blog đã được cải tiến tốc độ cũng khá nhiều.

#### CSS Grid

[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) giúp tui tuỳ biến web mình dễ dàng hơn so với [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) trong cách phân chia bố cục của trang blog này cũng như tuỳ biến Responsive cho màn hình desktop và mobile.

```css
@custom-media --tablet (width >= 800px);

.site {
  max-width: 60rem;
  margin: 0 auto;

  @media (--tablet) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
}
```

**Chú ý:** *Đây là cú pháp tui viết sử dụng PostCSS được trình bày ở dưới.*

#### Times Newer Roman, Roboto Slab và Ubuntu Mono

Việc thay đổi font chữ [Muli](https://fonts.google.com/specimen/Muli) sang sử dụng phông chữ [Times Newer Roman](https://timesnewerroman.com/) là một bộ phông chữ tương tự Times New Roman nhưng độ dài mỗi ký tự rộng hơn (theo như tác giả là 5 - 10%) giúp bạn dễ dàng đọc nội dung trên blog hơn.

Nhưng sau khi xem blog trên Windows tui thấy phông chữ Times Newer Roman không hiển thị đẹp lắm mặc dù trên Mac hay Linux phông chữ vẫn hiển thị rất đẹp nên cuối cùng cũng chọn phông chữ [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab).

Còn với code highlight tui sử dụng [Ubuntu Mono](https://fonts.google.com/specimen/Ubuntu+Mono). Mặc dù vẫn thích những phông chữ hỗ trợ `ligatures` như [Fira Code](https://github.com/tonsky/FiraCode) nhưng Ubuntu Mono vẫn dễ nhìn hơn với các bạn chưa quen với `ligatures`.

#### CSS Font Loading API: Preload

{{% caniuse features="link-rel-preload" %}}

```html
<link rel="preload" href="/fonts/TimesNewerRoman-Regular.otf" as="font" type="font/otf" crossorigin>
```

Preload trên giúp phông chữ của bạn được nạp vào trang web nhanh. Đồng thời việc khai báo trên giúp việc quản lý phông chữ nhúng vào dễ dàng so với việc sử dụng `@font-face`

#### CSS Font Loading API: Font Display

{{% caniuse features="css-font-rendering-controls" %}}

```css
@font-face {
  font-family: "Times Newer Roman";
  font-weight: 700;
  src: url(/fonts/TimesNewerRoman-Bold.otf) format("opentype");
  font-display: swap;
}
```

Khi bạn nhúng một phông chữ bằng `@font-face` hoặc từ [Google Fonts](https://fonts.google.com/) lúc đầu phông chữ hiển thị làm bạn có cảm giác giật giật (nhấp nhánh). Với 
`font-display: swap` làm cho khoảng thời gian tải phông chữ và quá trình hiển thị phông chữ mượt hơn. Hạn chế của thuộc tính này là chỉ hỗ trợ những trình duyệt mới.

### PostCSS

Trước đây tui vẫn dùng [Sass](/blog/su-dung-sass/) trong một thời gian dài. Bênh cạnh những lợi ích của Sass như dễ dàng bảo trì, tối ưu, tiếm kiệt thời gian viết code CSS so với cách viết truyền thống thì [PostCSS](https://postcss.org/) cung cấp thêm nhiều chức năng và linh hoạt hơn so với Sass như [Autoprefixer](https://github.com/postcss/autoprefixer), [CSS Modules](https://github.com/css-modules/css-modules), [Browserslist](https://github.com/browserslist/browserslist)... Sắp tới tui cũng sẽ giới thiệu về PostCSS để các bạn có thể hiểu rõ hơn.

Ví dụ ta muốn xây dựng một web với hai giao diện. Với CSS truyền thống:

```css
body {
  background: #fffafa;
  color: #242424;
}

body.night {
  background: #222233;
  color: #fff;
}
```

Nhưng với PostCSS bạn có thể viết.

```css
:root {
  --background: #fffafa;
  --color: #242424;
}

.night {
  --background: #222233;
  --color: #fff;
}

body {
  background: var(--background);
  color: var(--color);
}
```

Với cách viết này bạn sẽ dễ dàng cập nhật thêm các biến giá trị tuỳ biến.

### Webp Images

{{% caniuse features="webp" %}}

Ban đầu tui tính chuyển tất cả hình ảnh của web hiện tại sang `webp`. Nhưng cả trình duyệt Safari và Firefox đều không hỗ trợ tốt định dạng này. Nên cuối cùng vẫn phải dùng `png` và `jpg` để nó có thể hỗ trợ hầu hết trình duyệt.

### Service Worker and Offine Web

Offine web giúp blog này có thể chạy ngay cả khi bạn không kết Internet (bạn có thể tắt Internet và trải nghiệm). Ở đây mình hộ trợ offine web với **[service worker](https://developers.google.com/web/fundamentals/primers/service-workers/)** và dùng **[Workbox](https://developers.google.com/web/tools/workbox/)** một module được viết bằng Node.js để tạo ra tài nguyên offine cho Hugo.
