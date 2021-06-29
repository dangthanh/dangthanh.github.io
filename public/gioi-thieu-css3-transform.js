/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "Giới Thiệu CSS3 Transform",
    slug: "/gioi-thieu-css3-transform",
    date: "2013-09-01",
    tags: [
        "css"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "CSS3 transform là một trong những chức năng mạnh mẽ mà CSS3 cung cấp. Nó cho phép tác động đến tất cả các phần tử của HTML mà không ảnh hưởng đến cách xây dựng layout cho trang web như xoay phần tử, di chuyển các phần tử sang trái, phải, lên xuống, nghiêng hay phóng to hoặc thu nhỏ phần tử."), mdx("p", null, "CSS3 transform cung cấp cả 2D CSS transform và 3D CSS transform."), mdx("h3", {
        id: "cú-pháp"
    }, "Cú pháp"), mdx("codeblock", {
        className: "language-css",
        codestring: ".element {\n  -webkit-transform: method(value); // Chrome, Safari, Opera\n  -moz-transform: method(value); // Firefox\n  -ms-transform: method(value); // Internet Explorer 9+\n  transform: method(value);\n}"
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
    }, ".element"), mdx("span", {
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
    }, "-webkit-transform"), mdx("span", {
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
    }, "method"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "value"), mdx("span", {
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
    }, " // Chrome"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " Safari"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " Opera")), mdx("div", {
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
    }, "-moz-transform"), mdx("span", {
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
    }, "method"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "value"), mdx("span", {
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
    }, " // Firefox")), mdx("div", {
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
    }, "-ms-transform"), mdx("span", {
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
    }, "method"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "value"), mdx("span", {
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
    }, " // Internet Explorer "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "9"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "+")), mdx("div", {
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
    }, "transform"), mdx("span", {
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
    }, "method"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "value"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Các phương thức trên bạn có thể thay thế bằng một trong các phương thức sau:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "translate()"), mdx("li", {
        parentName: "ul"
    }, "scale()"), mdx("li", {
        parentName: "ul"
    }, "rotate()"), mdx("li", {
        parentName: "ul"
    }, "skew()")), mdx("h3", {
        id: "2d-css-transform"
    }, "2D CSS Transform"), mdx("h4", {
        id: "1-translate"
    }, "1. Translate"), mdx("codeblock", {
        className: "language-css",
        codestring: ".element {\n  width: 200px;\n  height: 200px;\n  transform: translate(50px, 50px);\n}"
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
    }, ".element"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "transform"), mdx("span", {
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
    }, "translate"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "50"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "50"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Translate là phương thức cho phép bạn có thể di chuyển phần tử sang các hướng trái phải, trên dưới. Phương thức này bao gồm hai giá trị ", mdx("strong", {
        parentName: "p"
    }, "X"), " và ", mdx("strong", {
        parentName: "p"
    }, "Y"), ". Giá trị ", mdx("strong", {
        parentName: "p"
    }, "X"), " cho phép phần tử di chuyển theo hướng ngang (trái phải) và giá trị ", mdx("strong", {
        parentName: "p"
    }, "Y"), " cho phép phần tử di chuyển theo hướng dọc (trên dưới). Bên cạnh phương thức translate() thì translate còn hai phương thức khác là:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "translateX()"), mdx("li", {
        parentName: "ul"
    }, "translateY()")), mdx("p", null, "@", mdx("a", {
        href: "css3-transform-translate-nczmz?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "2-scale"
    }, "2. Scale"), mdx("codeblock", {
        className: "language-css",
        codestring: ".element {\n  width: 200px;\n  height: 200px;\n  transform: scale(1.5);\n}"
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
    }, ".element"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "transform"), mdx("span", {
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
    }, "scale"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1.5"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Scale là phương thức cho phép bạn có thể phóng to hoặc thu nhỏ phần tử so với kích thước thật của phần tử. Kích thước thật được phương thức scale() mặc định là 1. Vì thế bạn muốn phóng to thì có thể khai báo giá trị > 1 và thu nhỏ thì khai báo giá trị < 1. Đặc biệt khi bạn khai báo ", mdx("strong", {
        parentName: "p"
    }, "scale(0)"), " thì phần tử sẽ biến mất nên bạn cần chú ý khi sử dụng phương thức này."), mdx("p", null, "@", mdx("a", {
        href: "css3-transform-scale-ce9wb?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "3-rotate"
    }, "3. Rotate"), mdx("codeblock", {
        className: "language-css",
        codestring: ".element {\n  width: 200px;\n  height: 200px;\n  transform: rotate(90deg);\n}"
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
    }, ".element"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "transform"), mdx("span", {
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
    }, "rotate"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "90"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "deg"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Rotate là phương thức cho phép bạn xoay phần tử và giá trị được ghi bằng độ (degrees)."), mdx("p", null, "@", mdx("a", {
        href: "css3-transform-rotate-zew59?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "4-skew"
    }, "4. Skew"), mdx("codeblock", {
        className: "language-css",
        codestring: ".element {\n  width: 200px;\n  height: 200px;\n  transform: skew(50deg, 20deg);\n}"
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
    }, ".element"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "transform"), mdx("span", {
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
    }, "skew"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "50"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "deg"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "20"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "deg"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Skew là phương thức cho phép bạn nghiêng phần tử. Cũng như phưng thức translate() và rotate(), phương thức skew() hỗ trợ phần tử nghiêng theo chiều ngang hoặc dọc và giá trị được ghi bằng độ (degrees)."), mdx("p", null, "@", mdx("a", {
        href: "css3-transform-skew-wxf8r?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "5-sử-dụng-kết-hợp-nhiều-phương-thức"
    }, "5. Sử dụng kết hợp nhiều phương thức"), mdx("p", null, "Ngoài việc sử dụng độc lập các phương thức translate(), scale(), rotate(), skew(). Ta có thể kết hợp các phương thức lại với nhau để tạo nên phần tử linh hoạt hơn."), mdx("codeblock", {
        className: "language-css",
        codestring: ".element {\n  width: 200px;\n  height: 200px;\n  transform: translate(50px, 50px) scale(1.5) rotate(90deg) skew(50deg, 20deg);\n}"
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
    }, ".element"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "200"), mdx("span", {
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
    }, "transform"), mdx("span", {
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
    }, "translate"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "50"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "50"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "px"), mdx("span", {
        className: "token punctuation",
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
    }, "scale"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "1.5"), mdx("span", {
        className: "token punctuation",
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
    }, "rotate"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "90"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "deg"), mdx("span", {
        className: "token punctuation",
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
    }, "skew"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "50"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "deg"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token number",
        style: {
            color: "rgb(247, 140, 108)"
        },
        parentName: "div"
    }, "20"), mdx("span", {
        className: "token unit",
        parentName: "div"
    }, "deg"), mdx("span", {
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
    }, "}")))), mdx("h3", {
        id: "3d-css-transform"
    }, "3D CSS Transform"), mdx("p", null, "3D CSS transform cũng tương tự 2D CSS transform. Nhưng 3D CSS transform hỗ trợ thêm một số phương thức cho không gian thứ ba."), mdx("codeblock", {
        className: "language-css",
        codestring: "/**\n * Translate\n */\ntranslate3d(x, y, z)\ntranslateZ(z)\n\n/**\n * Scale\n */\nscale3d(sx, sy, sz)\nscaleZ(sz)\n\n/**\n * Rotate\n */\nrotateX(rx)\nrotateY(ry)\nrotateZ(rz)\nrotate3d(rx, ry, rz)\n\n/**\n * Perspective\n * Giá trị này không ảnh hưởng đến phần tử nhưng\n * nó ảnh hưởng sự biến đổi các yếu tố của 3D transform\n * như rotateX(), rotateY()...\n */\nperspective(value)"
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
    }, "/**")), mdx("div", {
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
    }, " * Translate")), mdx("div", {
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
    }, " */"), mdx("span", {
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
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "translate3d"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "x"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " y"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " z"), mdx("span", {
        className: "token punctuation",
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
    }), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "translateZ"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "z"), mdx("span", {
        className: "token punctuation",
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "/**")), mdx("div", {
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
    }, " * Scale")), mdx("div", {
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
    }, " */"), mdx("span", {
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
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "scale3d"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "sx"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " sy"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " sz"), mdx("span", {
        className: "token punctuation",
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
    }), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "scaleZ"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "sz"), mdx("span", {
        className: "token punctuation",
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "/**")), mdx("div", {
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
    }, " * Rotate")), mdx("div", {
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
    }, " */"), mdx("span", {
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
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "rotateX"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "rx"), mdx("span", {
        className: "token punctuation",
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
    }), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "rotateY"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "ry"), mdx("span", {
        className: "token punctuation",
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
    }), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "rotateZ"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "rz"), mdx("span", {
        className: "token punctuation",
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
    }), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "rotate3d"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "rx"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " ry"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " rz"), mdx("span", {
        className: "token punctuation",
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "/**")), mdx("div", {
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
    }, " * Perspective")), mdx("div", {
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
    }, " * Giá trị này không ảnh hưởng đến phần tử nhưng")), mdx("div", {
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
    }, " * nó ảnh hưởng sự biến đổi các yếu tố của 3D transform")), mdx("div", {
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
    }, " * như rotateX(), rotateY()...")), mdx("div", {
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
    }, " */"), mdx("span", {
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
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "perspective"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "value"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")")))), mdx("h3", {
        id: "trình-duyệt-hỗ-trợ"
    }, "Trình duyệt hỗ trợ"), mdx("p", null, "Hiện tại CSS3 Transform đã hỗ trợ rất nhiều trình duyệt."), mdx("p", null, "caniuse transforms2d\ncaniuse transforms3d"));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
