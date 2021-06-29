/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "Redesign và những gì tôi học",
    slug: "/redesign-va-nhung-gi-toi-hoc",
    date: "2016-12-25",
    tags: [
        "personal",
        "css",
        "postcss",
        "hugo",
        "javascript"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Thực ra bài viết này đã có từ lâu, nhưng tôi vẫn để nó ở chế độ bản nháp và cũng do lười (quá lười) nên cũng từ lâu tôi cũng bỏ thói quen viết blog. Nay tôi chia sẻ những kinh nghiệm khi thiết kế lại blog này."), mdx("h3", {
        id: "thiết-kế"
    }, "Thiết kế"), mdx("p", null, "Vì không phải là một Designer nên tôi không giỏi về thiết kế lắm. Nên tôi vẫn giữ kiểu thiết kế tối giản (minimalism) cho trang blog này."), mdx("p", null, "Blog mới cung cấp hai giao diện, giúp bạn không bị mỏi mắt khi đọc lâu. Bạn nhấn vào biểu tượng ở góc phải để đổi sang giao diện yêu thích nhé. Có thể tôi sẽ cập nhật thêm về màu sắc xíu nữa cho phù hợp."), mdx("p", null, mdx("img", {
        src: "/images/blog/blog_v2.png",
        alt: "Dang Thanh Blog - phiên bản light and dark",
        parentName: "p"
    })), mdx("p", null, "tôi cũng đã xoá đi hệ thống phản hồi (trước đây tôi dùng ", mdx("a", {
        href: "https://disqus.com/",
        parentName: "p"
    }, "Disqus"), ") vì thấy nó không hữu ích. Các bạn có thể liên hệ hoặc trao đổi với tôi qua ", mdx("a", {
        href: "mailto:dangvanthanh@dangthanh.org",
        parentName: "p"
    }, "email"), "."), mdx("h3", {
        id: "hugo"
    }, "Hugo"), mdx("p", null, "So với ", mdx("a", {
        href: "/blog/blog-va-toi/",
        parentName: "p"
    }, "Jekyll"), ", ", mdx("a", {
        href: "https://gohugo.io/",
        parentName: "p"
    }, "Hugo"), " hỗ trợ xây dựng blog nhanh và tích hợp live reload dễ dàng cho việc phát triển blog hơn."), mdx("p", null, "Hugo cung cấp thêm nhiều chức năng mới như:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Chuyển đổi ", mdx("inlineCode", {
        parentName: "li"
    }, "SCSS"), " hay ", mdx("inlineCode", {
        parentName: "li"
    }, "Sass"), " sang CSS"), mdx("li", {
        parentName: "ul"
    }, "Hỗ trợ tốt ", mdx("inlineCode", {
        parentName: "li"
    }, "PostCSS")), mdx("li", {
        parentName: "ul"
    }, "Tối ưu các tập tin ", mdx("inlineCode", {
        parentName: "li"
    }, "CSS"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "JavaScript"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "JSON"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "HTML"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "SVG"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "XML")), mdx("li", {
        parentName: "ul"
    }, "Cải tiến hiển thị hightlight cho code với ", mdx("a", {
        href: "https://github.com/alecthomas/chroma",
        parentName: "li"
    }, "Chroma"))), mdx("p", null, "Bên cạnh đó, việc chuyển đổi sang Hugo giúp tôi tuỳ biến phân trang dễ dàng. Giúp bạn dễ dàng chọn được trang cũng như tìm kiếm bài viết theo từng chủ đề trong chuyên mục ", mdx("a", {
        href: "/tags",
        parentName: "p"
    }, "lưu trữ"), " cùng với hệ thống phân ", mdx("a", {
        href: "/tags/css/",
        parentName: "p"
    }, "bài viết theo thứ tự alphabet"), "."), mdx("h3", {
        id: "css"
    }, "CSS"), mdx("p", null, "Vì lí do tối giản cả thiết kế lẫn CSS. Nên với phiên bản này tôi không sử dụng ", mdx("a", {
        href: "http://tachyons.io/",
        parentName: "p"
    }, "Tachyons"), " nữa. Mặc dù Tachyons rất hữu ích, giúp việc xây dựng giao diện tuỳ biến cao, cũng như xây dựng những giao diện phức tạp một cách dễ dàng. Với một vài thay đổi dưới đây, blog đã được cải tiến tốc độ cũng khá nhiều."), mdx("h4", {
        id: "css-grid"
    }, "CSS Grid"), mdx("p", null, mdx("a", {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
        parentName: "p"
    }, "CSS Grid"), " giúp tôi tuỳ biến web mình dễ dàng hơn so với ", mdx("a", {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
        parentName: "p"
    }, "Flexbox"), " trong cách phân chia bố cục của trang blog này cũng như tuỳ biến Responsive cho màn hình desktop và mobile."), mdx("codeblock", {
        className: "language-css",
        codestring: "@custom-media --tablet (width >= 800px);\n\n.site {\n  max-width: 60rem;\n  margin: 0 auto;\n\n  @media (--tablet) {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n  }\n}"
    }, mdx("pre", {
        className: "prism-code language-css",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token atrule rule",
        parentName: "div"
    }, "@custom-media"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--tablet"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, "width >= "), mdx("span", {
        className: "token atrule number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "800"), mdx("span", {
        className: "token atrule unit",
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        style: {
            display: "inline-block"
        },
        parentName: "div"
    }, "\n")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".site"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "max-width"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "60"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "rem"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "margin"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "0"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " auto"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        style: {
            display: "inline-block"
        },
        parentName: "div"
    }, "\n")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token atrule rule",
        parentName: "div"
    }, "@media"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token atrule variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--tablet"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "display"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " grid"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "grid-template-columns"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "fr"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "3"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "fr"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}")))), mdx("p", null, mdx("strong", {
        parentName: "p"
    }, "Chú ý:"), " ", mdx("em", {
        parentName: "p"
    }, "Đây là cú pháp tôi viết sử dụng PostCSS được trình bày ở dưới.")), mdx("h4", {
        id: "times-newer-roman-roboto-slab-và-ubuntu-mono"
    }, "Times Newer Roman, Roboto Slab và Ubuntu Mono"), mdx("p", null, "Việc thay đổi font chữ ", mdx("a", {
        href: "https://fonts.google.com/specimen/Muli",
        parentName: "p"
    }, "Muli"), " sang sử dụng phông chữ ", mdx("a", {
        href: "https://timesnewerroman.com/",
        parentName: "p"
    }, "Times Newer Roman"), " là một bộ phông chữ tương tự Times New Roman nhưng độ dài mỗi ký tự rộng hơn (theo như tác giả là 5 - 10%) giúp bạn dễ dàng đọc nội dung trên blog hơn."), mdx("p", null, "Nhưng sau khi xem blog trên Windows tôi thấy phông chữ Times Newer Roman không hiển thị đẹp lắm mặc dù trên Mac hay Linux phông chữ vẫn hiển thị rất đẹp nên cuối cùng cũng chọn phông chữ ", mdx("a", {
        href: "https://fonts.google.com/specimen/Roboto+Slab",
        parentName: "p"
    }, "Roboto Slab"), "."), mdx("p", null, "Còn với code highlight tôi sử dụng ", mdx("a", {
        href: "https://fonts.google.com/specimen/Ubuntu+Mono",
        parentName: "p"
    }, "Ubuntu Mono"), ". Mặc dù vẫn thích những phông chữ hỗ trợ ", mdx("inlineCode", {
        parentName: "p"
    }, "ligatures"), " như ", mdx("a", {
        href: "https://github.com/tonsky/FiraCode",
        parentName: "p"
    }, "Fira Code"), " nhưng Ubuntu Mono vẫn dễ nhìn hơn với các bạn chưa quen với ", mdx("inlineCode", {
        parentName: "p"
    }, "ligatures"), "."), mdx("h4", {
        id: "css-font-loading-api-preload"
    }, "CSS Font Loading API: Preload"), mdx("p", null, "caniuse features=\"link-rel-preload\""), mdx("codeblock", {
        className: "language-html",
        codestring: "<link\n  rel=\"preload\"\n  href=\"/fonts/TimesNewerRoman-Regular.otf\"\n  as=\"font\"\n  type=\"font/otf\"\n  crossorigin\n/>"
    }, mdx("pre", {
        className: "prism-code language-html",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "link"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "rel"), mdx("span", {
        className: "token tag attr-value punctuation attr-equals",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag attr-value",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "preload"), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "href"), mdx("span", {
        className: "token tag attr-value punctuation attr-equals",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag attr-value",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "/fonts/TimesNewerRoman-Regular.otf"), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "as"), mdx("span", {
        className: "token tag attr-value punctuation attr-equals",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag attr-value",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "font"), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "type"), mdx("span", {
        className: "token tag attr-value punctuation attr-equals",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag attr-value",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "font/otf"), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "crossorigin"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "/>")))), mdx("p", null, "Preload trên giúp phông chữ của bạn được nạp vào trang web nhanh. Đồng thời việc khai báo trên giúp việc quản lý phông chữ nhúng vào dễ dàng so với việc sử dụng ", mdx("inlineCode", {
        parentName: "p"
    }, "@font-face")), mdx("h4", {
        id: "css-font-loading-api-font-display"
    }, "CSS Font Loading API: Font Display"), mdx("p", null, "caniuse features=\"css-font-rendering-controls\""), mdx("codeblock", {
        className: "language-css",
        codestring: "@font-face {\n  font-family: \"Times Newer Roman\";\n  font-weight: 700;\n  src: url(/fonts/TimesNewerRoman-Bold.otf) format(\"opentype\");\n  font-display: swap;\n}"
    }, mdx("pre", {
        className: "prism-code language-css",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token atrule rule",
        parentName: "div"
    }, "@font-face"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "font-family"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"Times Newer Roman\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "font-weight"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "700"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "src"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token url function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "url"), mdx("span", {
        className: "token url punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token url",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "/fonts/TimesNewerRoman-Bold.otf"), mdx("span", {
        className: "token url punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "format"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"opentype\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "font-display"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " swap"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}")))), mdx("p", null, "Khi bạn nhúng một phông chữ bằng ", mdx("inlineCode", {
        parentName: "p"
    }, "@font-face"), " hoặc từ ", mdx("a", {
        href: "https://fonts.google.com/",
        parentName: "p"
    }, "Google Fonts"), " lúc đầu phông chữ hiển thị làm bạn có cảm giác giật giật (nhấp nhánh). Với\n", mdx("inlineCode", {
        parentName: "p"
    }, "font-display: swap"), " làm cho khoảng thời gian tải phông chữ và quá trình hiển thị phông chữ mượt hơn. Hạn chế của thuộc tính này là chỉ hỗ trợ những trình duyệt mới."), mdx("h3", {
        id: "postcss"
    }, "PostCSS"), mdx("p", null, "Trước đây tôi vẫn dùng ", mdx("a", {
        href: "/blog/su-dung-sass/",
        parentName: "p"
    }, "Sass"), " trong một thời gian dài. Bênh cạnh những lợi ích của Sass như dễ dàng bảo trì, tối ưu, tiếm kiệt thời gian viết code CSS so với cách viết truyền thống thì ", mdx("a", {
        href: "https://postcss.org/",
        parentName: "p"
    }, "PostCSS"), " cung cấp thêm nhiều chức năng và linh hoạt hơn so với Sass như ", mdx("a", {
        href: "https://github.com/postcss/autoprefixer",
        parentName: "p"
    }, "Autoprefixer"), ", ", mdx("a", {
        href: "https://github.com/css-modules/css-modules",
        parentName: "p"
    }, "CSS Modules"), ", ", mdx("a", {
        href: "https://github.com/browserslist/browserslist",
        parentName: "p"
    }, "Browserslist"), "... Sắp tới tôi cũng sẽ giới thiệu về PostCSS để các bạn có thể hiểu rõ hơn."), mdx("p", null, "Ví dụ ta muốn xây dựng một web với hai giao diện. Với CSS truyền thống:"), mdx("codeblock", {
        className: "language-css",
        codestring: "body {\n  background: #fffafa;\n  color: #242424;\n}\n\nbody.night {\n  background: #222233;\n  color: #fff;\n}"
    }, mdx("pre", {
        className: "prism-code language-css",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "body"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "background"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#fffafa"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "color"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#242424"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        style: {
            display: "inline-block"
        },
        parentName: "div"
    }, "\n")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "body"), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".night"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "background"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#222233"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "color"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#fff"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}")))), mdx("p", null, "Nhưng với PostCSS bạn có thể viết."), mdx("codeblock", {
        className: "language-css",
        codestring: ":root {\n  --background: #fffafa;\n  --color: #242424;\n}\n\n.night {\n  --background: #222233;\n  --color: #fff;\n}\n\nbody {\n  background: var(--background);\n  color: var(--color);\n}"
    }, mdx("pre", {
        className: "prism-code language-css",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token selector pseudo-class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ":root"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--background"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#fffafa"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--color"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#242424"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        style: {
            display: "inline-block"
        },
        parentName: "div"
    }, "\n")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".night"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--background"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#222233"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--color"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token hexcode color",
        parentName: "div"
    }, "#fff"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        style: {
            display: "inline-block"
        },
        parentName: "div"
    }, "\n")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "body"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "background"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--background"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "color"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--color"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}")))), mdx("p", null, "Với cách viết này bạn sẽ dễ dàng cập nhật thêm các biến giá trị tuỳ biến."), mdx("h3", {
        id: "webp-images"
    }, "Webp Images"), mdx("p", null, "caniuse features=\"webp\""), mdx("p", null, "Ban đầu tôi tính chuyển tất cả hình ảnh của web hiện tại sang ", mdx("inlineCode", {
        parentName: "p"
    }, "webp"), ". Nhưng cả trình duyệt Safari và Firefox đều không hỗ trợ tốt định dạng này. Nên cuối cùng vẫn phải dùng ", mdx("inlineCode", {
        parentName: "p"
    }, "png"), " và ", mdx("inlineCode", {
        parentName: "p"
    }, "jpg"), " để nó có thể hỗ trợ hầu hết trình duyệt."), mdx("h3", {
        id: "service-worker-and-offine-web"
    }, "Service Worker and Offine Web"), mdx("p", null, "Offine web giúp blog này có thể chạy ngay cả khi bạn không kết Internet (bạn có thể tắt Internet và trải nghiệm). Ở đây mình hộ trợ offine web với ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "https://developers.google.com/web/fundamentals/primers/service-workers/",
        parentName: "strong"
    }, "service worker")), " và dùng ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "https://developers.google.com/web/tools/workbox/",
        parentName: "strong"
    }, "Workbox")), " một module được viết bằng Node.js để tạo ra tài nguyên offine cho Hugo."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
