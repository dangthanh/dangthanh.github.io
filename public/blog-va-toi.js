/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "Blog và tôi",
    slug: "/blog-va-toi",
    date: "2013-07-20",
    tags: [
        "personal"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Đầu tiên mình cám ơn các bạn đã ghé thăm blog này. Cũng đã làm quen với blog từ lâu, từ Wordpress, Tumblr rồi Posterous. Nhưng thực sự đến hôm nay mình mới có thể bắt đầu với việc viết blog."), mdx("p", null, "Blog hiện tại mình xây dựng bằng ", mdx("a", {
        href: "http://jekyllrb.com",
        parentName: "p"
    }, "Jekyll"), " (một dạng blog tĩnh được viết bằng Ruby). Trước khi dùng quyết định Jekyll mình đã có một thời gian tìm hiểu và sử dụng ", mdx("a", {
        href: "http://octopress.org/",
        parentName: "p"
    }, "Octopress"), " (một blogging framework cho Jekyll hỗ trợ rất nhiều như highlight code, responsive layout...). Bạn đã từng nghe tới Jekyll chưa? Nếu bạn chưa từng nghe qua thì mình xin giới thiệu một chút về Jekyll."), mdx("h3", {
        id: "jekyll-là-gì"
    }, "Jekyll là gì?"), mdx("p", null, "Jekyll là một nền tảng xây dựng blog. Nhưng Jekyll chỉ là dạng tĩnh, không có cơ sở dữ liệu hay ngôn ngữ phía server như PHP, Ruby, Python...mà chỉ đơn thuần là các trang nội dung. Bạn chỉ cần biết về HTML, CSS là có thể xây dựng được blog này."), mdx("h3", {
        id: "tại-sao-mình-thích-jekyll"
    }, "Tại sao mình thích Jekyll?"), mdx("p", null, "Mặc dù hiện này có rất nền tảng xây dựng blog tốt như Blogger, Wordpress, Typepad...Nhưng mình rất thích Jekyll vì các lý do sau:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Với ít kiến thức HTML, CSS mình có thể code tự do như giao diện...cũng như các chức năng tương tác phải sử dụng JavaScript."), mdx("li", {
        parentName: "ul"
    }, "Chỉ cần một editor đơn giản như Notepad++ hay Sublime Text 2 mình có thể chỉnh sửa và cập nhật bài viết. Bằng cách ghi chép mọi thứ bằng Markdown."), mdx("li", {
        parentName: "ul"
    }, "Được học rất nhiều điều thú vị mới như Ruby, Sass/Compass và đặc biệt là Git và JavaScript.")), mdx("h3", {
        id: "giao-diện-đầu-tiên"
    }, "Giao diện đầu tiên"), mdx("p", null, mdx("img", {
        src: "/images/blog/blog_v1.png",
        alt: "Dang Thanh Blog - phiên bản đầu tiên",
        parentName: "p"
    })), mdx("p", null, "Mình xây dựng giao diện dựa trên khái niệm ", mdx("a", {
        href: "http://alistapart.com/article/responsive-web-design",
        parentName: "p"
    }, "Responsive Web Design"), ". Giao diện hiện tại chỉ chạy tốt trên desktop lẫn máy tính bảng. Còn một số lỗi khi hiển thị highlight code trên thiết bị di động (nên mình chưa thực hiện cho phiên bản di động nhưng mình sẽ cập nhật sau)"), mdx("p", null, "Mình hy vọng sau này các bạn sẽ tiếp tục ủng hộ các bài viết từ blog này và cũng mong nhận được nhiều sự góp ý để mình có thể xây dựng blog hoàn thiện hơn. Mình xin cám ơn."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
