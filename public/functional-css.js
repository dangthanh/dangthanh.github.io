/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "Functional CSS",
    slug: "/functional-css",
    date: "2018-11-06T21:03:27+07:00",
    tags: [
        "css",
        "postcss",
        "tailwindcss"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Khi viết CSS cho web. Có rất nhiều CSS Framework để bạn lựa chọn. Và một số CSS Framework sau đây thì rất phổ biến:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://getbootstrap.com/",
        parentName: "li"
    }, "Bootstrap")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://foundation.zurb.com/",
        parentName: "li"
    }, "Foundation")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://bulma.io/",
        parentName: "li"
    }, "Bulma")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://semantic-ui.com/",
        parentName: "li"
    }, "Sematic UI")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://get%C3%B4ikit.com/",
        parentName: "li"
    }, "UI Kit"))), mdx("p", null, "Những CSS Framework trên giúp bạn xây dựng Prototype, Responsive Design một cách linh hoạt và dễ dàng."), mdx("p", null, "Hôm nay tôi sẽ giới thiệu thêm với các bạn về Functional CSS (được thường được gọi là ", mdx("inlineCode", {
        parentName: "p"
    }, "Utility-first CSS"), " hay ", mdx("inlineCode", {
        parentName: "p"
    }, "Atomic CSS"), ")"), mdx("h3", {
        id: "vậy-functional-css-là-gì"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#vậy-functional-css-là-gì",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Vậy Functional CSS là gì?"), mdx("p", null, "Về cơ bản, ", mdx("strong", {
        parentName: "p"
    }, "Functional CSS"), " là tập hợp hàng ngàn ", mdx("inlineCode", {
        parentName: "p"
    }, "classes"), " nhỏ định nghĩa cho từng chức năng, thuộc tính, quy tắc của CSS."), mdx("p", null, "Ví dụ:"), mdx("codeblock", {
        className: "language-html",
        codestring: "<div class=\"component\">...</div>\n\n<style>\n  .component {\n    background: #333;\n    margin: 20px;\n    padding: 10px;\n    color: #fff;\n    border: 1px solid #555;\n  }\n</style>"
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
    }, "component"), mdx("span", {
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
    }, "..."), mdx("span", {
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
    }, ".component"), mdx("span", {
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
    }, "background"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css hexcode color",
        parentName: "div"
    }, "#333"), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "margin"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "20"), mdx("span", {
        className: "token style language-css unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "padding"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "10"), mdx("span", {
        className: "token style language-css unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
        className: "token style language-css hexcode color",
        parentName: "div"
    }, "#fff"), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "border"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1"), mdx("span", {
        className: "token style language-css unit",
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " solid "), mdx("span", {
        className: "token style language-css hexcode color",
        parentName: "div"
    }, "#555"), mdx("span", {
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
    }, ">")))), mdx("p", null, "Với Functional CSS ta viết như sau:"), mdx("codeblock", {
        className: "language-html",
        codestring: "<div class=\"bg-grey m-20 p-10 text-white border border-solid border-grey-dark\">\n  ...\n</div>\n\n<style>\n  .bg-grey {\n    background: #333;\n  }\n  .m-20 {\n    margin: 20px;\n  }\n  .p-10 {\n    padding: 10px;\n  }\n  .text-white {\n    color: #fff;\n  }\n  .border {\n    border-width: 1px;\n  }\n  .border-solid {\n    border-style: solid;\n  }\n  .border-grey-dark {\n    border-color: #555;\n  }\n</style>"
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
    }, "bg-grey m-20 p-10 text-white border border-solid border-grey-dark"), mdx("span", {
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
    }, "  ...")), mdx("div", {
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
    }, ".bg-grey"), mdx("span", {
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
    }, "background"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css hexcode color",
        parentName: "div"
    }, "#333"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".m-20"), mdx("span", {
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
    }, "margin"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "20"), mdx("span", {
        className: "token style language-css unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".p-10"), mdx("span", {
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
    }, "padding"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "10"), mdx("span", {
        className: "token style language-css unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".text-white"), mdx("span", {
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
        className: "token style language-css hexcode color",
        parentName: "div"
    }, "#fff"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".border"), mdx("span", {
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
    }, "border-width"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1"), mdx("span", {
        className: "token style language-css unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".border-solid"), mdx("span", {
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
    }, "border-style"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " solid"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token style language-css selector class",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".border-grey-dark"), mdx("span", {
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
    }, "border-color"), mdx("span", {
        className: "token style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token style language-css",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token style language-css hexcode color",
        parentName: "div"
    }, "#555"), mdx("span", {
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
    }, ">")))), mdx("p", null, "Vậy hoá ra nó cũng giống với ", mdx("strong", {
        parentName: "p"
    }, "Inline Style"), " mà thỉnh thoảng trước đây ta cũng hay dùng nhỉ?"), mdx("codeblock", {
        className: "language-html",
        codestring: "<div\n  style=\"background: #333; margin: 20px; padding: 10px; color: #fff; border: 1px solid #555;\"\n>\n  ...\n</div>"
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
    }, "div"), mdx("span", {
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
        className: "token tag style-attr attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "style"), mdx("span", {
        className: "token tag style-attr attr-value punctuation attr-equals",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token tag style-attr attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "background"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css hexcode color",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "#333"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "margin"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "20"), mdx("span", {
        className: "token tag style-attr attr-value style language-css unit",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "padding"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "10"), mdx("span", {
        className: "token tag style-attr attr-value style language-css unit",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "color"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css hexcode color",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "#fff"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "border"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1"), mdx("span", {
        className: "token tag style-attr attr-value style language-css unit",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " solid "), mdx("span", {
        className: "token tag style-attr attr-value style language-css hexcode color",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "#555"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value punctuation",
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
    }), mdx("span", {
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
    }, "  ...")), mdx("div", {
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
        id: "sự-khác-nhau-giữa-functional-css-và-inline-style"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#sự-khác-nhau-giữa-functional-css-và-inline-style",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Sự khác nhau giữa Functional CSS và Inline Style"), mdx("p", null, "Nhìn vào ví dụ trên bạn có thể nghĩ là cách viết Functional CSS và Inline Style có vẻ giống nhau. Nhưng Functional CSS rất khác với Inline Style về những điểm sau:"), mdx("ol", null, mdx("li", {
        parentName: "ol"
    }, mdx("p", {
        parentName: "li"
    }, "Functional CSS là những ", mdx("inlineCode", {
        parentName: "p"
    }, "classes"), " được định nghĩa trước. Và các ", mdx("inlineCode", {
        parentName: "p"
    }, "classes"), " này được nhất quán với từng ", mdx("inlineCode", {
        parentName: "p"
    }, "classes"), " bạn định nghĩa như về phông chữ, màu sắc, khoảng cách (margin hoặc padding) nên bạn sẽ dễ dàng sử dụng lại so với kiểu dùng Inline Style"), mdx("codeblock", {
        className: "language-html",
        codestring: "<div class=\"bg-blue text-sm\"></div>",
        parentName: "li"
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
    }, "bg-blue text-sm"), mdx("span", {
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
    }, ">")))), mdx("p", {
        parentName: "li"
    }, "so với"), mdx("codeblock", {
        className: "language-html",
        codestring: "<div style=\"background: blue; font-size: 10px;\"></div>",
        parentName: "li"
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
    }, "div"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "style"), mdx("span", {
        className: "token tag style-attr attr-value punctuation attr-equals",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token tag style-attr attr-value punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "\""), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "background"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css color",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "blue"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "font-size"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token tag style-attr attr-value style language-css",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, " "), mdx("span", {
        className: "token tag style-attr attr-value style language-css number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "10"), mdx("span", {
        className: "token tag style-attr attr-value style language-css unit",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token tag style-attr attr-value style language-css punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token tag style-attr attr-value punctuation",
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
    }, ">"))))), mdx("li", {
        parentName: "ol"
    }, mdx("p", {
        parentName: "li"
    }, "Functional CSS hỗ trợ ", mdx("strong", {
        parentName: "p"
    }, "media queries"), ". Giúp bạn có thể xây dựng Responsive Design.")), mdx("li", {
        parentName: "ol"
    }, mdx("p", {
        parentName: "li"
    }, "Functional CSS có thể sử dụng để hỗ trợ cho từng kiểu in cụ thể bạn muốn với CSS.")), mdx("li", {
        parentName: "ol"
    }, mdx("p", {
        parentName: "li"
    }, "Với ", mdx("strong", {
        parentName: "p"
    }, "Pseudo-classes CSS"), " như ", mdx("inlineCode", {
        parentName: "p"
    }, "::before"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "::after"), " hay ", mdx("inlineCode", {
        parentName: "p"
    }, ":hover"), ". Functional dễ dàng giúp bạn định nghĩa còn Inline Style thì không thể."))), mdx("h3", {
        id: "lợi-ích-khi-dùng-functional-css"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#lợi-ích-khi-dùng-functional-css",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Lợi ích khi dùng Functional CSS"), mdx("p", null, "tôi cũng thường hay sử dụng Bootstrap để xây dựng web. Nhưng từ sau khi chuyển sang dùng Functional CSS tôi thấy có những lợi ích sau:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Thời gian xây dựng web của tôi nhanh hơn. Tăng lên khoảng 1.5 hoặc 2 lần so với trước."), mdx("li", {
        parentName: "ul"
    }, "Không còn lo lắng về việc sử dụng ", mdx("inlineCode", {
        parentName: "li"
    }, "Naming CSS"), " nữa."), mdx("li", {
        parentName: "ul"
    }, "Dễ dàng bảo trì và phát triển CSS."), mdx("li", {
        parentName: "ul"
    }, "Tránh được việc lặp đi lặp lại code, tăng ", mdx("inlineCode", {
        parentName: "li"
    }, "performance"), " lên."), mdx("li", {
        parentName: "ul"
    }, "Dễ dàng xây dựng hầu hết các ", mdx("inlineCode", {
        parentName: "li"
    }, "Component UI"), " mà không cần viết thêm nhiều CSS."), mdx("li", {
        parentName: "ul"
    }, "Bằng việc mô tả cách sử dụng Functional CSS thì các bạn Developer cả ", mdx("inlineCode", {
        parentName: "li"
    }, "Backend"), " lẫn ", mdx("inlineCode", {
        parentName: "li"
    }, "Frontend"), " cũng dễ dàng chỉnh sửa.")), mdx("h3", {
        id: "sử-dụng-thư-viện-functional-css-nào"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#sử-dụng-thư-viện-functional-css-nào",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Sử dụng thư viện Functional CSS nào?"), mdx("p", null, "Nếu bạn không có thời gian để xây dựng các ", mdx("inlineCode", {
        parentName: "p"
    }, "Utility-first CSS"), " thì bạn có thể tham khảo và sử dụng những thư viện tôi đề cập dưới đây:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://basscss.com/",
        parentName: "li"
    }, "Basscss"), " - thư viện đầu tiên Functional CSS mà tôi sử dụng."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://tachyons.io/",
        parentName: "li"
    }, "Tachyons"), " - đây là thư viện tôi sử dụng để làm giao diện blog này phiên bản trước đây."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://tailwindcss.com/",
        parentName: "li"
    }, "TailwindCSS"), " - thư tiện tôi thích nhất và thường sử dụng cho đến bây giờ."), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/mrmrs/colors",
        parentName: "li"
    }, "Colors.css"), " - sử dụng màu sắc cho web.")), mdx("h3", {
        id: "vậy-functional-css-không-có-nhược-điểm"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#vậy-functional-css-không-có-nhược-điểm",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Vậy Functional CSS không có nhược điểm?"), mdx("p", null, "Bất kỳ thư viện nào đều có những ưu và nhược điểm. Nhưng thường tôi chỉ nêu lên ưu điểm thôi. Còn nhược điểm có lẽ là tôi để các bạn tự dùng và trải nghiệm nhé. Bởi vì có thể tôi thích cái X còn bạn thì lại thích cái Y. Nên tôi nghĩ rằng bạn nên thử sử dụng chúng và xem thư viện nào phù hợp với mình nhé."), mdx("h3", {
        id: "tailwind-css"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#tailwind-css",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Tailwind CSS"), mdx("p", null, "Như đã nói trên, ", mdx("strong", {
        parentName: "p"
    }, "Tailwind CSS"), " là thư viện mà tôi rất thích. Nên tôi sẽ giới thiệu bạn một số ví dụ tôi sử dụng nó để xây dựng UI nhé."), mdx("h4", {
        id: "login"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#login",
        parentName: "h4"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Login"), mdx("p", null, "@", mdx("a", {
        href: "tailwindcss-login-7when?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "card"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#card",
        parentName: "h4"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Card"), mdx("p", null, "@", mdx("a", {
        href: "tailwindcss-card-cu3uk?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "navigation"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#navigation",
        parentName: "h4"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Navigation"), mdx("p", null, "@", mdx("a", {
        href: "tailwindcss-navigation-grmwm?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "table"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#table",
        parentName: "h4"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Table"), mdx("p", null, "@", mdx("a", {
        href: "tailwindcss-table-xhsqi?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "plan"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#plan",
        parentName: "h4"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Plan"), mdx("p", null, "@", mdx("a", {
        href: "tailwindcss-plan-qu9hf?view=preview",
        parentName: "p"
    }, "codesandbox")));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
