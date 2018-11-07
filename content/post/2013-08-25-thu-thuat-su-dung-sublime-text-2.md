+++
title = "Thủ Thuật Sử Dụng Sublime Text 2"
slug = "thu-thuat-su-dung-sublime-text-2"
date = "2013-08-25"
tags = ["tools"]
+++

**[Sublime Text 2](http://www.sublimetext.com/2)** là một text editor mạnh mẽ, cung cấp nhiều chức năng hữu ích. Mình cũng đã sử dụng Sublime Text 2 một thời gian dài cho đến nay, hôm nay cũng xin giới thiệu về Sublime Text 2 và một số thủ thuật sử dụng.

![Sublime Text 2](/images/sublime_text_2.jpg)

### Làm việc với Sublime Text 2

Nếu bạn chưa lần nào sử dụng Sublime Text 2, bạn có thể xem **[series video miễn phí](https://tutsplus.com/course/improve-workflow-in-sublime-text-2/)** từ Tutsplus. Với series video này bạn sẽ cái nhìn tổng quan hơn về Sublime Text 2 và liệu nó có thể thuyết phục bạn sử dụng Sublime Text 2 không?

### Package Control

![Package Control - Sublime Text 2](/images/package_control.jpg)

Package Control là một công cụ quản lý các plugin của Sublime Text 2. Nó giúp bạn tìm kiếm, cài đặt, nâng cấp cũng hơn xóa các plugin.

Việc cài đặt Package Control cũng rất đơn giản:

- Tải gói [Package Control.sublime-package](https://sublime.wbond.net/Package%20Control.sublime-package)
- Ở menu của Sublime Text 2 bạn chọn **Preferences -> Browse Package...**
- Lùi một thư mục và chọn thư mục **Installed Packages** và chép Package Control đã tải về vào đây. Khởi động lại Sublime Text 2.

Để cài đặt plugin vào Sublime Text 2 bạn nhấn phím tắt **Ctrl + Shift + P** rồi gõ Install Package rồi tìm plugin bạn cần.

Một số plugin mình đang sử dụng:

- [Emmet](http://emmet.io/): là một bộ công cụ phát triển web với nhiều cải thiện quy trình làm việc với HTML/CSS. Đây là một công cụ hầu như không thể thiếu với các bạn làm việc nhiều với HTML, CSS như Web Designer hay Front-end Developer.
- [SCSS](https://github.com/MarioRicalde/SCSS.tmbundle/)/[Sass](https://github.com/nathos/sass-textmate-bundle/): Hỗ trợ Highlight Code cho SCSS và Sass. Với cú pháp Sass bạn mở **Preferences -> Browse Package...** chọn **Rails/Ruby Haml.tmLanguage**. Bạn mở tập tin Ruby Haml.tmLanguage tìm đến dòng **&lt;string&gt;sass&lt;/string&gt;** và xóa nó đi.
- [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements/): công cụ cải thiện nhiều chức năng cho Sidebar của Sublime Text 2. Hỗ trợ mở các tập tin với các ứng dụng được định nghĩa như Photoshop, trình duyệt...
- [DocBlockr](https://github.com/spadgos/sublime-jsdocs/): Hỗ trợ comments các ngôn ngữ Javascript, PHP, CoffeeScript, Actionscript, C & C++.
- [Tag](https://github.com/SublimeText/Tag/): là plugin hỗ trợ làm việc các thẻ trong HTML và XML.
- [Theme Soda](http://buymeasoda.github.io/soda-theme/): Cung cấp giao diện cho Sublime Text 2.

### Một số phím tắt trong Sublime Text 2

Phím tắt giúp cho bạn làm việc hiệu quả hơn với các ứng dụng. Sublime Text cung cấp cho bạn nhiều phím tắt để có thể làm việc tốt hơn. Sau đây là một số phím tắt mình thường sử dụng.

| Phím tắt            | Mô tả                                                                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ctrl + C`            | Sao chép vùng được chọn                                                                                                                                             |
| `Ctrl + V`            | Dán vùng được sao chép                                                                                                                                              |
| `Ctrl + X`            | Cắt vùng được chọn (Xóa và sao chép vùng được chọn)                                                                                                                 |
| `Ctrl + D`            | Chọn những từ giống nhau theo thứ tự (rất hiệu quả khi bạn muốn chỉnh sửa hàng loạt)                                                                                |
| `Alt + F3`            | Chọn tất cả những từ giống nhau                                                                                                                                     |
| `Ctrl + Shift + D`    | Nhân đôi dòng được chọn                                                                                                                                             |
| `Ctrl + L`            | Chọn dòng được chọn                                                                                                                                                 |
| `Ctrl + Shift + L`    | Chọn nhiều dòng được chọn                                                                                                                                           |
| `Ctrl + Space`        | Gợi ý auto-complete                                                                                                                                                 |
| `Ctrl + P`            | Truy cập tập tin và mở tập tin. **@** truy cập đến các biểu tượng (`Ctrl + R`), **#** tìm kiếm trong tập tin (Ctrl + ;), **:** tìm đến dòng trong tập tin (`Ctrl + G`). |
| `Ctrl + F`            | Tìm kiếm                                                                                                                                                            |
| `Ctrl + H`            | Tìm kiếm và thay thế                                                                                                                                                |
| `Ctrl + Shift + F`    | Tìm kiếm tất cả trong các tập tin                                                                                                                                   |
| `Ctrl + KB`           | Tắt mở sidebar                                                                                                                                                      |
| `Ctrl + Shift + Up`   | Chuyển những dòng được chọn lên trên                                                                                                                                |
| `Ctrl + Shift + Down` | Chuyển những dòng được chọn xuống dưới                                                                                                                              |
| `Alt + Shift + 1`     | Màn hình làm việc một cột (mặc định)                                                                                                                                |
| `Alt + Shift + 2`     | Chia màn hình làm việc thành 2 cột theo chiều dọc                                                                                                                   |
| `Alt + Shift + 8`     | Chia màn hình làm việc thành 2 cột theo chiều ngang                                                                                                                 |
| `Shift + F1`          | Chuyển sang chế độ Free Mode (bạn muốn làm việc với một không gian rộng rãi hơn)                                                                                    |

### Lời kết

Hi vọng với những tính năng phong phú trên, Sublime Text 2 sẽ mang lại cho bạn sự lựa chọn mới ngoài những editor khác như Notepad++, Dreamweaver...
