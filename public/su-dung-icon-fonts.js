/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "Sử dụng Icon Fonts",
    slug: "/su-dung-icon-fonts",
    date: "2013-10-06",
    tags: [
        "css"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Icon font ngày được sử dụng rộng rãi trong các website hiện nay. Icon font mang nhiều ưu điểm:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Giảm số lượng HTTP Request, giúp website của bạn load nhanh hơn."), mdx("li", {
        parentName: "ul"
    }, "Dễ dàng thay đổi màu sắc, kích thước của biểu tượng."), mdx("li", {
        parentName: "ul"
    }, "Cung cấp nhiều biểu tượng phù hợp giúp bạn tiết kiệm thời gian thiết kế."), mdx("li", {
        parentName: "ul"
    }, "Có thể sử dụng CSS3 như transition, transform, text-shadow giúp các icon được linh hoạt hơn.")), mdx("p", null, "Ta có thể nhúng icons vào trong CSS đơn giản như sau:"), mdx("codeblock", {
        className: "language-css",
        codestring: "@font-face {\n  font-family: \"your-fonts\";\n  src: url(\"fonts/your-fonts.eot\");\n  src: url(\"fonts/your-fonts.eot?#iefix\") format(\"embedded-opentype\"), url(\"fonts/your-fonts.woff\")\n      format(\"woff\"), url(\"fonts/your-fonts.ttf\") format(\"truetype\"), url(\"fonts/your-fonts.svg#[set]Foundicons\")\n      format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class*=\"icon-\"] {\n  font-family: \"your-fonts\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n\n[class*=\"icon-\"]:before {\n  content: \"your-fonts-character\";\n}"
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
    }, "\"your-fonts\""), mdx("span", {
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
        className: "token url string url",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"fonts/your-fonts.eot\""), mdx("span", {
        className: "token url punctuation",
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
        className: "token url string url",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"fonts/your-fonts.eot?#iefix\""), mdx("span", {
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
    }, "\"embedded-opentype\""), mdx("span", {
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
    }, ","), mdx("span", {
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
        className: "token url string url",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"fonts/your-fonts.woff\""), mdx("span", {
        className: "token url punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
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
    }, "      "), mdx("span", {
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
    }, "\"woff\""), mdx("span", {
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
    }, ","), mdx("span", {
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
        className: "token url string url",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"fonts/your-fonts.ttf\""), mdx("span", {
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
    }, "\"truetype\""), mdx("span", {
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
    }, ","), mdx("span", {
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
        className: "token url string url",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"fonts/your-fonts.svg#[set]Foundicons\""), mdx("span", {
        className: "token url punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
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
    }, "      "), mdx("span", {
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
    }, "\"svg\""), mdx("span", {
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
    }, "font-weight"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " normal"), mdx("span", {
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
    }, "font-style"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " normal"), mdx("span", {
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
        className: "token selector attribute punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token selector attribute attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "class"), mdx("span", {
        className: "token selector attribute operator",
        style: {
            color: "rgb(127, 219, 202)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "*="), mdx("span", {
        className: "token selector attribute attr-value",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "\"icon-\""), mdx("span", {
        className: "token selector attribute punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "]"), mdx("span", {
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
    }, "\"your-fonts\""), mdx("span", {
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
    }, "speak"), mdx("span", {
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
    }, "font-style"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " normal"), mdx("span", {
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
    }, " normal"), mdx("span", {
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
    }, "font-variant"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " normal"), mdx("span", {
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
    }, "text-transform"), mdx("span", {
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
    }, "line-height"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " inherit"), mdx("span", {
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
    }, "-webkit-font-smoothing"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " antialiased"), mdx("span", {
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
        className: "token selector attribute punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token selector attribute attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "class"), mdx("span", {
        className: "token selector attribute operator",
        style: {
            color: "rgb(127, 219, 202)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "*="), mdx("span", {
        className: "token selector attribute attr-value",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "\"icon-\""), mdx("span", {
        className: "token selector attribute punctuation",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "]"), mdx("span", {
        className: "token selector pseudo-element",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ":before"), mdx("span", {
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
    }, "content"), mdx("span", {
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
    }, "\"your-fonts-character\""), mdx("span", {
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
    }, "}")))), mdx("p", null, "Trong bài viết này mình sẽ giới thiệu các bạn về IcoMoon và We Love Icon Fonts."), mdx("h3", {
        id: "icomoon"
    }, "IcoMoon"), mdx("p", null, mdx("img", {
        src: "/images/blog/icomoon.jpg",
        alt: "IcoMoon",
        parentName: "p"
    })), mdx("p", null, mdx("a", {
        href: "http://icomoon.io/",
        parentName: "p"
    }, "IcoMoon"), " cung cấp cho bạn hơn 450 icons miễn phí. Bên cạnh đó ngoài những icons của IcoMoon, IcoMoon cho phép bạn lựa chọn và tải các icons bạn muốn với những bộ icons khác như Broccolidry, Entypo, Font Awesome...với số lượng lên đến gần 3800 icons. Ngoài ra IcoMoon còn cho phép bạn tải các thiết kế của bạn lên (tập tin SVG) để customize thành fonts bạn yêu thích."), mdx("h3", {
        id: "we-love-icon-fonts"
    }, "We Love Icon Fonts"), mdx("p", null, mdx("img", {
        src: "/images/blog/weloveiconfonts.jpg",
        alt: "We Love Icon Fonts",
        parentName: "p"
    })), mdx("p", null, mdx("a", {
        href: "http://weloveiconfonts.com/",
        parentName: "p"
    }, "We Love Icon Fonts"), " là một mã nguồn mở và dịch vụ lưu trữ miễn phí các icon fonts. Cũng như IcoMoon, We Love Icon Fonts cũng cung cấp cho bạn rất nhiều bộ icons miễn phí khác như Fontelico, Maki, Typicons, Zocial."), mdx("h3", {
        id: "một-số-icons-fonts-miễn-phí-khác"
    }, "Một số icons fonts miễn phí khác"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://www.entypo.com/",
        parentName: "li"
    }, "Entypo")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://fortawesome.github.io/Font-Awesome/",
        parentName: "li"
    }, "Font Awesome")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://zurb.com/playground/foundation-icons",
        parentName: "li"
    }, "Foundation Icon")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://www.alessioatzeni.com/meteocons/",
        parentName: "li"
    }, "Meteocons")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://typicons.com/",
        parentName: "li"
    }, "Typicons")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://icons.marekventur.de/",
        parentName: "li"
    }, "Raphaël Icon"))));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
