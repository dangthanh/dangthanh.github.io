/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "Thủ Thuật Sử Dụng Sublime Text 2",
    slug: "/thu-thuat-su-dung-sublime-text-2",
    date: "2013-08-25",
    tags: [
        "tools"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "http://www.sublimetext.com/2",
        parentName: "strong"
    }, "Sublime Text 2")), " là một text editor mạnh mẽ, cung cấp nhiều chức năng hữu ích. Mình cũng đã sử dụng Sublime Text 2 một thời gian dài cho đến nay, hôm nay cũng xin giới thiệu về Sublime Text 2 và một số thủ thuật sử dụng."), mdx("p", null, mdx("img", {
        src: "/images/blog/sublime_text_2.jpg",
        alt: "Sublime Text 2",
        parentName: "p"
    })), mdx("h3", {
        id: "làm-việc-với-sublime-text-2"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#làm-việc-với-sublime-text-2",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Làm việc với Sublime Text 2"), mdx("p", null, "Nếu bạn chưa lần nào sử dụng Sublime Text 2, bạn có thể xem ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "https://tutsplus.com/course/improve-workflow-in-sublime-text-2/",
        parentName: "strong"
    }, "series video miễn phí")), " từ Tutsplus. Với series video này bạn sẽ cái nhìn tổng quan hơn về Sublime Text 2 và liệu nó có thể thuyết phục bạn sử dụng Sublime Text 2 không?"), mdx("h3", {
        id: "package-control"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#package-control",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Package Control"), mdx("p", null, mdx("img", {
        src: "/images/blog/package_control.jpg",
        alt: "Package Control - Sublime Text 2",
        parentName: "p"
    })), mdx("p", null, "Package Control là một công cụ quản lý các plugin của Sublime Text 2. Nó giúp bạn tìm kiếm, cài đặt, nâng cấp cũng hơn xóa các plugin."), mdx("p", null, "Việc cài đặt Package Control cũng rất đơn giản:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Tải gói ", mdx("a", {
        href: "https://sublime.wbond.net/Package%20Control.sublime-package",
        parentName: "li"
    }, "Package Control.sublime-package")), mdx("li", {
        parentName: "ul"
    }, "Ở menu của Sublime Text 2 bạn chọn ", mdx("strong", {
        parentName: "li"
    }, "Preferences -> Browse Package...")), mdx("li", {
        parentName: "ul"
    }, "Lùi một thư mục và chọn thư mục ", mdx("strong", {
        parentName: "li"
    }, "Installed Packages"), " và chép Package Control đã tải về vào đây. Khởi động lại Sublime Text 2.")), mdx("p", null, "Để cài đặt plugin vào Sublime Text 2 bạn nhấn phím tắt ", mdx("strong", {
        parentName: "p"
    }, "Ctrl + Shift + P"), " rồi gõ Install Package rồi tìm plugin bạn cần."), mdx("p", null, "Một số plugin mình đang sử dụng:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://emmet.io/",
        parentName: "li"
    }, "Emmet"), ": là một bộ công cụ phát triển web với nhiều cải thiện quy trình làm việc với HTML/CSS. Đây là một công cụ hầu như không thể thiếu với các bạn làm việc nhiều với HTML, CSS như Web Designer hay Front-end Developer."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/MarioRicalde/SCSS.tmbundle/",
        parentName: "li"
    }, "SCSS"), "/", mdx("a", {
        href: "https://github.com/nathos/sass-textmate-bundle/",
        parentName: "li"
    }, "Sass"), ": Hỗ trợ Highlight Code cho SCSS và Sass. Với cú pháp Sass bạn mở ", mdx("strong", {
        parentName: "li"
    }, "Preferences -> Browse Package..."), " chọn ", mdx("strong", {
        parentName: "li"
    }, "Rails/Ruby Haml.tmLanguage"), ". Bạn mở tập tin Ruby Haml.tmLanguage tìm đến dòng ", mdx("strong", {
        parentName: "li"
    }, "<string>sass</string>"), " và xóa nó đi."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/titoBouzout/SideBarEnhancements/",
        parentName: "li"
    }, "SideBarEnhancements"), ": công cụ cải thiện nhiều chức năng cho Sidebar của Sublime Text 2. Hỗ trợ mở các tập tin với các ứng dụng được định nghĩa như Photoshop, trình duyệt..."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/spadgos/sublime-jsdocs/",
        parentName: "li"
    }, "DocBlockr"), ": Hỗ trợ comments các ngôn ngữ Javascript, PHP, CoffeeScript, Actionscript, C & C++."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/SublimeText/Tag/",
        parentName: "li"
    }, "Tag"), ": là plugin hỗ trợ làm việc các thẻ trong HTML và XML."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://buymeasoda.github.io/soda-theme/",
        parentName: "li"
    }, "Theme Soda"), ": Cung cấp giao diện cho Sublime Text 2.")), mdx("h3", {
        id: "một-số-phím-tắt-trong-sublime-text-2"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#một-số-phím-tắt-trong-sublime-text-2",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Một số phím tắt trong Sublime Text 2"), mdx("p", null, "Phím tắt giúp cho bạn làm việc hiệu quả hơn với các ứng dụng. Sublime Text cung cấp cho bạn nhiều phím tắt để có thể làm việc tốt hơn. Sau đây là một số phím tắt mình thường sử dụng."), mdx("p", null, "| Phím tắt | Mô tả |\n| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + C"), " | Sao chép vùng được chọn |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + V"), " | Dán vùng được sao chép |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + X"), " | Cắt vùng được chọn (Xóa và sao chép vùng được chọn) |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + D"), " | Chọn những từ giống nhau theo thứ tự (rất hiệu quả khi bạn muốn chỉnh sửa hàng loạt) |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Alt + F3"), " | Chọn tất cả những từ giống nhau |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + Shift + D"), " | Nhân đôi dòng được chọn |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + L"), " | Chọn dòng được chọn |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + Shift + L"), " | Chọn nhiều dòng được chọn |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + Space"), " | Gợi ý auto-complete |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + P"), " | Truy cập tập tin và mở tập tin. ", mdx("strong", {
        parentName: "p"
    }, "@"), " truy cập đến các biểu tượng (", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + R"), "), ", mdx("strong", {
        parentName: "p"
    }, "#"), " tìm kiếm trong tập tin (Ctrl + ;), ", mdx("strong", {
        parentName: "p"
    }, ":"), " tìm đến dòng trong tập tin (", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + G"), "). |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + F"), " | Tìm kiếm |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + H"), " | Tìm kiếm và thay thế |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + Shift + F"), " | Tìm kiếm tất cả trong các tập tin |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + KB"), " | Tắt mở sidebar |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + Shift + Up"), " | Chuyển những dòng được chọn lên trên |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Ctrl + Shift + Down"), " | Chuyển những dòng được chọn xuống dưới |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Alt + Shift + 1"), " | Màn hình làm việc một cột (mặc định) |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Alt + Shift + 2"), " | Chia màn hình làm việc thành 2 cột theo chiều dọc |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Alt + Shift + 8"), " | Chia màn hình làm việc thành 2 cột theo chiều ngang |\n| ", mdx("inlineCode", {
        parentName: "p"
    }, "Shift + F1"), " | Chuyển sang chế độ Free Mode (bạn muốn làm việc với một không gian rộng rãi hơn) |"), mdx("h3", {
        id: "lời-kết"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#lời-kết",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Lời kết"), mdx("p", null, "Hi vọng với những tính năng phong phú trên, Sublime Text 2 sẽ mang lại cho bạn sự lựa chọn mới ngoài những editor khác như Notepad++, Dreamweaver..."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
