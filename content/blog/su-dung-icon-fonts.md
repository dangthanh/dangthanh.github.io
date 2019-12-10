---
title: "Sử dụng Icon Fonts"
slug: "su-dung-icon-fonts"
date: "2013-10-06"
tags: ["css"]
---

Icon font ngày được sử dụng rộng rãi trong các website hiện nay. Icon font mang nhiều ưu điểm:

- Giảm số lượng HTTP Request, giúp website của bạn load nhanh hơn.
- Dễ dàng thay đổi màu sắc, kích thước của biểu tượng.
- Cung cấp nhiều biểu tượng phù hợp giúp bạn tiết kiệm thời gian thiết kế.
- Có thể sử dụng CSS3 như transition, transform, text-shadow giúp các icon được linh hoạt hơn.

Ta có thể nhúng icons vào trong CSS đơn giản như sau:

```css
@font-face {
  font-family: "your-fonts";
  src: url("fonts/your-fonts.eot");
  src: url("fonts/your-fonts.eot?#iefix") format("embedded-opentype"), 
    url("fonts/your-fonts.woff") format("woff"), 
    url("fonts/your-fonts.ttf") format("truetype"), 
    url("fonts/your-fonts.svg#[set]Foundicons") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class*="icon-"] {
  font-family: "your-fonts";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
}

[class*="icon-"]:before {
  content: "your-fonts-character";
}
```

Trong bài viết này mình sẽ giới thiệu các bạn về IcoMoon và We Love Icon Fonts.

### IcoMoon

![IcoMoon](/images/blog/icomoon.jpg)

[IcoMoon](http://icomoon.io/) cung cấp cho bạn hơn 450 icons miễn phí. Bên cạnh đó ngoài những icons của IcoMoon, IcoMoon cho phép bạn lựa chọn và tải các icons bạn muốn với những bộ icons khác như Broccolidry, Entypo, Font Awesome...với số lượng lên đến gần 3800 icons. Ngoài ra IcoMoon còn cho phép bạn tải các thiết kế của bạn lên (tập tin SVG) để customize thành fonts bạn yêu thích.

### We Love Icon Fonts

![We Love Icon Fonts](/images/blog/weloveiconfonts.jpg)

[We Love Icon Fonts](http://weloveiconfonts.com/) là một mã nguồn mở và dịch vụ lưu trữ miễn phí các icon fonts. Cũng như IcoMoon, We Love Icon Fonts cũng cung cấp cho bạn rất nhiều bộ icons miễn phí khác như Fontelico, Maki, Typicons, Zocial.

### Một số icons fonts miễn phí khác

- [Entypo](http://www.entypo.com/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Foundation Icon](http://zurb.com/playground/foundation-icons)
- [Meteocons](http://www.alessioatzeni.com/meteocons/)
- [Typicons](http://typicons.com/)
- [Raphaël Icon](http://icons.marekventur.de/)
