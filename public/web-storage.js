/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "Web Storage",
    slug: "/web-storage",
    date: "2013-08-10",
    tags: [
        "javascript"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Để lưu trữ thông tin ở phía trình duyệt, trước đây ta vẫn thường dùng cookies. Nhưng cookies vẫn còn một số hạn chế:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Khi truyền tải, cookies mang theo HTTP request, đều này sẽ làm chậm đi ứng dụng web của bạn."), mdx("li", {
        parentName: "ul"
    }, "Giới hạn dung lượng thấp chỉ 4 KB."), mdx("li", {
        parentName: "ul"
    }, "Thật khó để duy dõi nhiều cookies trên một trang web.")), mdx("p", null, "HTML5 cung cấp một API mới để có thể lưu trữ dữ liệu ở phía client với nhiều cải thiện cho cookies là web storage. Một số ưu điểm web storage so với cookies:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Dung lượng lên đến 5 MB (trình duyệt Google Chrome, Mozilla Firefox, Opera), 10 MB (Internet Explorer)"), mdx("li", {
        parentName: "ul"
    }, "Dữ liệu web storage sẽ không được truyền đến máy chủ"), mdx("li", {
        parentName: "ul"
    }, "Cung cấp hai cách lưu trữ khác nhau: local storage và session storage")), mdx("h3", {
        id: "web-storage"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#web-storage",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Web Storage"), mdx("p", null, "Web Storage hiện tại đã hỗ trợ rất nhiều trình duyệt."), mdx("p", null, "caniuse features=\"namevalue-storage\""), mdx("p", null, "Web Storage cung cấp các phương thức sau. Ở đây mình sử dụng localStorage, bạn có thể sử dụng sessionStorage nếu muốn."), mdx("codeblock", {
        className: "language-javascript",
        codestring: "localStorage.setItem(\"key\", \"value\"); // Lưu trữ dữ liệu\nlocalStorage.getItem(\"key\"); // Lấy dữ liệu\nlocalStorage.removeItem(\"key\"); // Xóa dữ liệu lưu trên key\nlocalStorage.clear(); // Xóa tất cả dữ liệu lưu bởi web storage"
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "setItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
    }, "\"value\""), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Lưu trữ dữ liệu"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "getItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Lấy dữ liệu"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "removeItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Xóa dữ liệu lưu trên key"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "clear"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Xóa tất cả dữ liệu lưu bởi web storage")))), mdx("h3", {
        id: "sử-dụng-local-storage"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#sử-dụng-local-storage",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Sử dụng Local Storage"), mdx("p", null, "Dữ liệu trên local storage sẽ được tự động chuyển sang kiểu 'string' trên trình duyệt. Tuy nhiên local storage lại hoạt động rất tốt với đối tượng trong JavaScript."), mdx("codeblock", {
        className: "language-javascript",
        codestring: "// Lưu trữ một đối tượng\nlocalStorage.setItem(\"key\", { name: \"value\" });\nconsole.log(typeof localStorage.getItem(\"key\")); // string\n\n// Lữu trữ một kiểu số\nlocalStorage.setItem(\"key\", 1);\nconsole.log(typeof localStorage.getItem(\"key\")); // string\n\n// Lưu trữ một đối tượng\nlocalStorage.setItem(\"key\", JSON.stringify({ name: \"Dang Thanh\", age: 24 }));\nvar obj = JSON.parse(localStorage.getItem(\"key\"));\nconsole.log(obj.name); // value\nconsole.log(obj.age); // value"
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Lưu trữ một đối tượng"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "setItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
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
    }, " name"), mdx("span", {
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
    }, "\"value\""), mdx("span", {
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
        className: "token console class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "console"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "log"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "typeof"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "getItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
    }, ")"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// string"), mdx("span", {
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
    }, "// Lữu trữ một kiểu số"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "setItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
    }, "1"), mdx("span", {
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
        className: "token console class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "console"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "log"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "typeof"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "getItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
    }, ")"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// string"), mdx("span", {
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
    }, "// Lưu trữ một đối tượng"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "setItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token known-class-name class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "JSON"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "stringify"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
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
    }, " name"), mdx("span", {
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
    }, "\"Dang Thanh\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " age"), mdx("span", {
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
    }, "24"), mdx("span", {
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
    }, ")"), mdx("span", {
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " obj "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token known-class-name class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "JSON"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "parse"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "localStorage"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "getItem"), mdx("span", {
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
    }, "\"key\""), mdx("span", {
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
        className: "token console class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "console"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "log"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "obj"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "name"), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// value"), mdx("span", {
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
        className: "token console class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "console"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "log"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "obj"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "age"), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// value")))), mdx("h3", {
        id: "ví-dụ-local-storage"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#ví-dụ-local-storage",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Ví dụ Local Storage"), mdx("p", null, "@", mdx("a", {
        href: "web-local-storage-no1iq?view=preview",
        parentName: "p"
    }, "codesandbox")));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
