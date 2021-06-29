/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "PostCSS",
    slug: "/postcss",
    date: "2018-11-02T01:03:37+07:00",
    tags: [
        "css",
        "sass",
        "postcss"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Lần trước tôi có đề cập tới ", mdx("a", {
        href: "/blog/redesign-va-nhung-gi-t%C3%B4i-hoc/#postcss",
        parentName: "p"
    }, "PostCSS"), ". Nay tôi sẽ giới thiệu tổng quan về PostCSS cho các bạn. Cũng như ", mdx("a", {
        href: "/blog/su-dung-sass/",
        parentName: "p"
    }, "Sass"), ", PostCSS cũng cung cấp các chức năng như Sass:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Khai báo biến"), mdx("li", {
        parentName: "ul"
    }, "Nhúng các tập tin CSS (Partial import)"), mdx("li", {
        parentName: "ul"
    }, "Cú pháp lồng (Nesting)"), mdx("li", {
        parentName: "ul"
    }, "Sử dụng lại với Mixins"), mdx("li", {
        parentName: "ul"
    }, "Kế thừa (Extends)")), mdx("h3", {
        id: "sử-dụng-postcss"
    }, "Sử dụng PostCSS"), mdx("p", null, "Trước hết PostCSS một công cụ cho việc chuyển đổi CSS sử dụng JavaScript. Bạn có thể sử dụng nhiều công cụ như Webpack, Rollup, Gulp hay Grunt để chuyển đổi PostCSS sang CSS. Nhưng để đơn giản bạn nên bắt đầu làm quen PostCSS với ", mdx("a", {
        href: "https://github.com/postcss/postcss-cli",
        parentName: "p"
    }, "PostCSS CLI")), mdx("p", null, "Cách sử dụng để chuyển đổi như sau"), mdx("codeblock", {
        className: "language-shell",
        codestring: "$ postcss [input.css] -o [output.css]"
    }, mdx("pre", {
        className: "prism-code language-shell",
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
        className: "token plain",
        parentName: "div"
    }, "$ postcss "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "input.css"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " -o "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "output.css"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]")))), mdx("p", null, mdx("strong", {
        parentName: "p"
    }, "Chú ý:"), " ", mdx("em", {
        parentName: "p"
    }, "Bạn có thể đổi ", mdx("inlineCode", {
        parentName: "em"
    }, "[input.css]"), " và ", mdx("inlineCode", {
        parentName: "em"
    }, "[output.css]"), " thành tên tập tin bạn mong muốn.")), mdx("p", null, "Hoặc bạn có thể cấu hình thêm ở tập tin ", mdx("strong", {
        parentName: "p"
    }, "postcss.config.js")), mdx("codeblock", {
        className: "language-javascript",
        codestring: "module.exports = {\n  plugins: {\n    \"postcss-import\": {},\n    \"postcss-each\": {},\n    \"postcss-nested\": {},\n    \"postcss-preset-env\": { stage: 0, browsers: \"last 2 versions\" },\n  },\n};"
    }, mdx("pre", {
        className: "prism-code language-javascript",
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
        className: "token plain",
        parentName: "div"
    }, "module"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "exports"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
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
    }, "  plugins"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
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
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"postcss-import\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
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
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"postcss-each\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
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
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"postcss-nested\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
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
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"postcss-preset-env\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
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
    }, " stage"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " browsers"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
    }, "\"last 2 versions\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
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
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
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
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";")))), mdx("h3", {
        id: "autoprefixer-và-browserlist"
    }, "Autoprefixer và Browserlist"), mdx("p", null, mdx("a", {
        href: "https://github.com/postcss/autoprefixer",
        parentName: "p"
    }, mdx("strong", {
        parentName: "a"
    }, "Autoprefixer")), " là một PostCSS plugin phân tích cú pháp CSS của bạn và thêm các tiền tố (vendor prefixes) như ", mdx("inlineCode", {
        parentName: "p"
    }, "-wekit-"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "-moz-"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "-ms-"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "-o-"), " tương ứng với các trình duyệt."), mdx("codeblock", {
        className: "language-css",
        codestring: ".example {\n  display: grid;\n  user-select: none;\n}"
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
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".example"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "user-select"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " none"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Biên dịch thành CSS"), mdx("codeblock", {
        className: "language-css",
        codestring: ".example {\n  display: -ms-grid;\n  display: grid;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}"
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
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".example"), mdx("span", {
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
    }, "display"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " -ms-grid"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "-webkit-user-select"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " none"), mdx("span", {
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
    }, "-moz-user-select"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " none"), mdx("span", {
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
    }, "-ms-user-select"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " none"), mdx("span", {
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
    }, "user-select"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " none"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Autoprefixer còn cho phép bạn có thể lựa chọn tiền tố cho từng trình duyệt cụ thể"), mdx("codeblock", {
        className: "language-css",
        codestring: "autoprefixer({ browsers: 'last 2 versions, > 1%' })"
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
    }, "autoprefixer"), mdx("span", {
        className: "token selector punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "browsers"), mdx("span", {
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
    }, "'last 2 versions, > 1%'"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")")))), mdx("p", null, "Với ", mdx("a", {
        href: "https://github.com/browserslist/browserslist",
        parentName: "p"
    }, mdx("strong", {
        parentName: "a"
    }, "Browserlist")), " thì việc cấu hình tiền tố cho từng trình duyệt cụ thể sẽ dễ dàng hơn với việc cấu hình trong ", mdx("strong", {
        parentName: "p"
    }, mdx("inlineCode", {
        parentName: "strong"
    }, "package.json"))), mdx("codeblock", {
        className: "language-json",
        codestring: "{\n  \"browserslist\": [\"last 1 version\", \"> 1%\"]\n}"
    }, mdx("pre", {
        className: "prism-code language-json",
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
    }, "\"browserslist\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"last 1 version\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"> 1%\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]"), mdx("span", {
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
    }, "}")))), mdx("p", null, "hoặc trong tập tin ", mdx("strong", {
        parentName: "p"
    }, mdx("inlineCode", {
        parentName: "strong"
    }, ".browserslistrc"))), mdx("codeblock", {
        className: "language-css",
        codestring: "last 1 version\n> 1%"
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
        className: "token plain",
        parentName: "div"
    }, "last "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " version")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "> "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "%")))), mdx("h3", {
        id: "postcss-preset-env"
    }, "PostCSS Preset Env"), mdx("p", null, "Ngoài việc định nghĩa biến bằng các thuộc tính CSS. ", mdx("a", {
        href: "https://preset-env.cssdb.org/",
        parentName: "p"
    }, mdx("strong", {
        parentName: "a"
    }, "PostCSS Preset Env")), " còn có những biến định nghĩa ", mdx("em", {
        parentName: "p"
    }, "media queries"), ", ", mdx("em", {
        parentName: "p"
    }, "selectors"), ", các chức năng về ", mdx("em", {
        parentName: "p"
    }, "color function"), ", ", mdx("em", {
        parentName: "p"
    }, "pseudo-class"), ", ", mdx("em", {
        parentName: "p"
    }, "nesting rules"), "... Bên cạnh đó còn giúp chuyển đổi các CSS hiện đại thành CSS mà hầu hết trình duyệt đều hỗ trợ."), mdx("codeblock", {
        className: "language-css",
        codestring: ":root {\n  --length: 24px;\n}\n\n@custom-media --tablet (min-width: 40em);\n@custom-selector :--heading h1, h2, h3, h4, h5, h6;\n\n.round {\n  width: var(--length);\n  height: var(--length);\n  border-radius: 100%;\n}\n\n.site :--heading + p {\n  margin-top: 1rem;\n}\n\n@media (--tablet) {\n  .site {\n    font-size: 1rem;\n  }\n}"
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
    }, "--length"), mdx("span", {
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
    }, "24"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
        className: "token atrule property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "min-width"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "40"), mdx("span", {
        className: "token atrule unit",
        parentName: "div"
    }, "em"), mdx("span", {
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
        parentName: "div"
    }), mdx("span", {
        className: "token atrule rule",
        parentName: "div"
    }, "@custom-selector"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token atrule variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "--heading"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " h1"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " h2"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " h3"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " h4"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " h5"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " h6"), mdx("span", {
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
    }, ".round"), mdx("span", {
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
    }, "width"), mdx("span", {
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
    }, "--length"), mdx("span", {
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
    }, "height"), mdx("span", {
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
    }, "--length"), mdx("span", {
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
    }, "border-radius"), mdx("span", {
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
    }, "100"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "%"), mdx("span", {
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
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token selector pseudo-class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ":--heading"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
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
    }, "margin-top"), mdx("span", {
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
    }, "  "), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "font-size"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Biên dịch thành CSS"), mdx("codeblock", {
        className: "language-css",
        codestring: ".round {\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n}\n\n.site h1 + p,\n.site h2 + p,\n.site h3 + p,\n.site h4 + p,\n.site h5 + p,\n.site h6 + p {\n  margin-top: 1rem;\n}\n\n@media (min-width: 40em) {\n  .site {\n    font-size: 1rem;\n  }\n}"
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
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".round"), mdx("span", {
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
    }, "width"), mdx("span", {
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
    }, "24"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "height"), mdx("span", {
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
    }, "24"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "border-radius"), mdx("span", {
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
    }, "100"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "%"), mdx("span", {
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
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " h1 "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
        className: "token selector punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    })), mdx("div", {
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
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " h2 "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
        className: "token selector punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    })), mdx("div", {
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
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " h3 "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
        className: "token selector punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    })), mdx("div", {
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
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " h4 "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
        className: "token selector punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    })), mdx("div", {
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
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " h5 "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
        className: "token selector punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    })), mdx("div", {
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
    }), mdx("span", {
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".site"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " h6 "), mdx("span", {
        className: "token selector combinator",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " p"), mdx("span", {
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
    }, "margin-top"), mdx("span", {
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
        className: "token atrule property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "min-width"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "40"), mdx("span", {
        className: "token atrule unit",
        parentName: "div"
    }, "em"), mdx("span", {
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
    }, "  "), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "font-size"), mdx("span", {
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
    }, "}")))), mdx("h3", {
        id: "css-modules"
    }, "CSS Modules"), mdx("p", null, "Mỗi lúc viết CSS bạn lo lắng tên của các ", mdx("inlineCode", {
        parentName: "p"
    }, "classes"), " được sử dụng quá chung chung. ", mdx("a", {
        href: "https://github.com/css-modules/css-modules",
        parentName: "p"
    }, mdx("strong", {
        parentName: "a"
    }, "CSS Modules")), " giúp tên các ", mdx("inlineCode", {
        parentName: "p"
    }, "classes"), " bạn định nghĩa được ánh xạ từ tên chung đó một cách có ý nghĩa nhất. CSS Modules thực tế được dùng nhiều với các bạn viết JavaScript nhiều hơn so với các bạn Web Designer (chỉ viết HTML và CSS) vì những ưu điểm:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Dễ dàng tái sử dụng"), mdx("li", {
        parentName: "ul"
    }, "Không bị ảnh hưởng tới những chỗ khác"), mdx("li", {
        parentName: "ul"
    }, "Phụ thuộc rõ ràng vào chính bản thân nó"), mdx("li", {
        parentName: "ul"
    }, "Không có phạm vi Global mà chỉ nằm trong Scoped")), mdx("p", null, "Ví dụ ta có một file ", mdx("inlineCode", {
        parentName: "p"
    }, "style.css")), mdx("codeblock", {
        className: "language-css",
        codestring: "/* style.css */\n.className {\n  color: green;\n}"
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "/* style.css */"), mdx("span", {
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
        className: "token selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".className"), mdx("span", {
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
        className: "token color",
        parentName: "div"
    }, "green"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Khi nhúng vào trong JavaScript module."), mdx("codeblock", {
        className: "language-javascript",
        codestring: "import styles from \"./style.css\";\n\nelement.innerHTML = '<div class=\"' + styles.className + '\">';"
    }, mdx("pre", {
        className: "prism-code language-javascript",
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
        className: "token keyword module",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "import"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token imports",
        parentName: "div"
    }, "styles"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token keyword module",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "from"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"./style.css\""), mdx("span", {
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
    }, "element"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "innerHTML"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "'<div class=\"'"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " styles"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "className"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "'\">'"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";")))), mdx("p", null, "Sau khi thực thi ta sẽ được kết quả"), mdx("codeblock", {
        className: "language-html",
        codestring: "<style>\n  ._styles__title_2qkr5 {\n    color: green;\n  }\n</style>\n\n<div class=\"element\">\n  <div class=\"_styles__title_2qkr5\"></div>\n</div>"
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
    }, "style"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "._styles__title_2qkr5"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "color"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css color",
        parentName: "div"
    }, "green"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "</"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "style"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
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
    }, "div"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "class"), mdx("span", {
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
    }, "element"), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
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
    }, "div"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "class"), mdx("span", {
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
    }, "_styles__title_2qkr5"), mdx("span", {
        className: "token tag attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "</"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "div"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
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
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "</"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "div"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">")))), mdx("h3", {
        id: "stylelint"
    }, "Stylelint"), mdx("p", null, mdx("a", {
        href: "https://stylelint.io/",
        parentName: "p"
    }, mdx("strong", {
        parentName: "a"
    }, "Stylelint")), " giúp bạn tránh những lỗi và đảm bảo convention cũng như cải thiện CSS khi bạn code CSS được toàn vẹn với những quy tắc chuẩn hoá và chặt chẽ. Stylelint cũng cung cấp cho PostCSS một plugin để dễ dàng cấu hình."), mdx("h3", {
        id: "postcss-có-gì-hay"
    }, "PostCSS Có Gì Hay"), mdx("p", null, "Tới đây, một số bạn sẽ thắc mắc vậy PostCSS có gì hay hơn Sass nhỉ? Sass hầu như cũng làm được các chức năng trên cơ mà. Tuy nhiên PostCSS còn có những ưu điểm:"), mdx("h4", {
        id: "từ-sass-đến-postcss"
    }, "Từ Sass đến PostCSS"), mdx("p", null, "Bạn dễ dàng có thể tái sử dụng code ", mdx("a", {
        href: "https://github.com/jonathantneal/postcss-sass",
        parentName: "p"
    }, "Sass"), " hay ", mdx("a", {
        href: "https://github.com/postcss/postcss-scss",
        parentName: "p"
    }, "SCSS"), " trong PostCSS, thậm chí ", mdx("a", {
        href: "https://github.com/shellscape/postcss-less",
        parentName: "p"
    }, "Less"), " hay ", mdx("a", {
        href: "https://github.com/seaneking/poststylus",
        parentName: "p"
    }, "Stylus"), "."), mdx("h4", {
        id: "postcss-plugin"
    }, "PostCSS Plugin"), mdx("p", null, "Hệ thống ", mdx("a", {
        href: "https://www.postcss.parts/",
        parentName: "p"
    }, "plugin của PostCSS"), " rất đồ sộ và rất nhiều ", mdx("a", {
        href: "https://github.com/postcss/postcss/blob/master/docs/plugins.md",
        parentName: "p"
    }, "plugin mạnh mẽ"), " như:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, mdx("a", {
        href: "https://github.com/hail2u/node-css-mqpacker",
        parentName: "p"
    }, "CSS MQPacker"), ": đóng gói các quy tắc về ", mdx("em", {
        parentName: "p"
    }, "media queries"), " giống nhau về thành một"), mdx("codeblock", {
        className: "language-css",
        codestring: "h1 {\n  font-size: 30px;\n}\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 36px;\n  }\n}\n\nh3 {\n  font-size: 18px;\n}\n\n@media (min-width: 768px) {\n  h3 {\n    font-size: 24px;\n  }\n}",
        parentName: "li"
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
    }, "h1"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "30"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
        className: "token atrule property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "min-width"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "768"), mdx("span", {
        className: "token atrule unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "h1"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "36"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "h3"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "18"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
        className: "token atrule property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "min-width"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "768"), mdx("span", {
        className: "token atrule unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "h3"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "24"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "}")))), mdx("p", {
        parentName: "li"
    }, "Biên dịch thành CSS"), mdx("codeblock", {
        className: "language-css",
        codestring: "h1 {\n  font-size: 30px;\n}\n\nh3 {\n  font-size: 18px;\n}\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 36px;\n  }\n\n  h3 {\n    font-size: 24px;\n  }\n}",
        parentName: "li"
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
    }, "h1"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "30"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "h3"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "18"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
        className: "token atrule property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "min-width"), mdx("span", {
        className: "token atrule punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token atrule",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token atrule number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "768"), mdx("span", {
        className: "token atrule unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "h1"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "36"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "h3"), mdx("span", {
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
    }, "font-size"), mdx("span", {
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
    }, "24"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "}"))))), mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, mdx("a", {
        href: "https://cssnano.co/",
        parentName: "p"
    }, "CSSNano"), ": Tối ưu code CSS như ", mdx("em", {
        parentName: "p"
    }, "minification"), ", ", mdx("em", {
        parentName: "p"
    }, "compresses inline SVG"), ", ", mdx("em", {
        parentName: "p"
    }, "duplicates"), ", ", mdx("em", {
        parentName: "p"
    }, "comments"), ", ", mdx("em", {
        parentName: "p"
    }, "unused rule"), "..."))), mdx("h4", {
        id: "tuỳ-biến-postcss"
    }, "Tuỳ biến PostCSS"), mdx("p", null, "Chỉ cần một ít kiến thức về JavaScript bạn có thể dễ dàng ", mdx("a", {
        href: "https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md",
        parentName: "p"
    }, "viết plugin cho PostCSS"), " với phong cách của riêng mình như:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/chancancode/postcss-canadian-stylesheets",
        parentName: "li"
    }, "Canadian Style Sheets")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/dangvanthanh/postcss-tipsy",
        parentName: "li"
    }, "Tipsy")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/juanfran/postcss-trolling",
        parentName: "li"
    }, "Trolling Style Sheets")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/dangvanthanh/postcss-longshadow-text",
        parentName: "li"
    }, "Long Shadow Text"))));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
