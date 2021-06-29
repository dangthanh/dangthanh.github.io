/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "HTML5 Geolocation và Leaflet",
    slug: "/html5-geolocation-va-leaflet",
    date: "2013-08-15",
    tags: [
        "javascript"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Geolocation là một API mới của HTML5 cho phép bạn truy cập vào vị trí hiện tại của bạn trên thiết bị."), mdx("p", null, "Geolocation gồm 3 phương thức:"), mdx("codeblock", {
        className: "language-javascript",
        codestring: "/**\n * Lấy vị trí hiện tại của thiết bị\n */\nnavigator.geolocation.getCurrentPosition();\n\n/**\n * Cho phép khởi tạo một xử lí khi thiết bị thay đổi vị trí\n */\nnavigator.geolocation.watchPosition();\n\n/**\n * Xóa xử lí được khởi tạo trước đó bởi watchPosition()\n */\nnavigator.geolocation.clearWatch();"
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
        className: "token doc-comment comment",
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
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Lấy vị trí hiện tại của thiết bị")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "navigator"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "geolocation"), mdx("span", {
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
    }, "getCurrentPosition"), mdx("span", {
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
        className: "token doc-comment comment",
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
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Cho phép khởi tạo một xử lí khi thiết bị thay đổi vị trí")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "navigator"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "geolocation"), mdx("span", {
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
    }, "watchPosition"), mdx("span", {
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
        className: "token doc-comment comment",
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
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Xóa xử lí được khởi tạo trước đó bởi watchPosition()")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "navigator"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "geolocation"), mdx("span", {
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
    }, "clearWatch"), mdx("span", {
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
    }, ";")))), mdx("h3", {
        id: "lấy-vị-trí-hiện-tại-sử-dụng-geolocation"
    }, "Lấy vị trí hiện tại sử dụng Geolocation"), mdx("p", null, "Để lấy vị trí hiện tại ta có thể sử dụng phương thức"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("strong", {
        parentName: "li"
    }, "navigator.geolocation.getCurrentPosition()"))), mdx("codeblock", {
        className: "language-javascript",
        codestring: "function success(position) {\n  var latitude = position.coords.latitude,\n    longitude = position.coords.longitude,\n    altitude = position.coords.altitude,\n    accuracy = position.coords.accuracy;\n\n  // Hiển thị các thông số về vị trí hiện tại của bạn.\n  console.log(latitude);\n  console.log(longitude);\n  console.log(altitude);\n  console.log(accuracy);\n}\n\nfunction error() {\n  console.log(\"Không thể truy cập đến vị trí hiện tại.\");\n}\n\nvar options = {\n  enableHighAccuracy: true,\n  timeout: 5000,\n  maximumAge: 0,\n};\n\nnavigator.geolocation.getCurrentPosition(success, error, options);"
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "function"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "success"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token parameter",
        parentName: "div"
    }, "position"), mdx("span", {
        className: "token punctuation",
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " latitude "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " position"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "coords"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "latitude"), mdx("span", {
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
    }, "    longitude "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " position"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "coords"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "longitude"), mdx("span", {
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
    }, "    altitude "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " position"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "coords"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "altitude"), mdx("span", {
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
    }, "    accuracy "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " position"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "coords"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "accuracy"), mdx("span", {
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Hiển thị các thông số về vị trí hiện tại của bạn."), mdx("span", {
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
    }, "latitude"), mdx("span", {
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
    }, "longitude"), mdx("span", {
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
    }, "altitude"), mdx("span", {
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
    }, "accuracy"), mdx("span", {
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "function"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "error"), mdx("span", {
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
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"Không thể truy cập đến vị trí hiện tại.\""), mdx("span", {
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " options "), mdx("span", {
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
    }, "  enableHighAccuracy"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token boolean",
        style: {
            color: "rgb(255, 88, 116)"
        },
        parentName: "div"
    }, "true"), mdx("span", {
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
    }, "  timeout"), mdx("span", {
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
    }, "5000"), mdx("span", {
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
    }, "  maximumAge"), mdx("span", {
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
        className: "token dom variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "navigator"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "geolocation"), mdx("span", {
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
    }, "getCurrentPosition"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "success"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " error"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " options"), mdx("span", {
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
    }, ";")))), mdx("h3", {
        id: "leaflet-là-gì"
    }, "Leaflet là gì?"), mdx("p", null, mdx("a", {
        href: "http://leafletjs.com/",
        parentName: "p"
    }, "Leaflet"), " là một thư viện JavaScript mã nguồn mở cung cấp các tương tác với bản đồ thân thiện với các thiết bị di động."), mdx("p", null, "Cũng như Google Map API. Nhưng Leaflet được thiết kế đơn giản, hiệu quả và dễ sử dụng:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Dễ dàng tương tác với HTML5 và CSS3."), mdx("li", {
        parentName: "ul"
    }, "Hỗ trợ rất nhiều plugin."), mdx("li", {
        parentName: "ul"
    }, "Tài liệu hướng dẫn về API rất tốt và dễ sử dụng"), mdx("li", {
        parentName: "ul"
    }, "Cung cấp đầy đủ các tính năng để tương tác với bản đồ.")), mdx("p", null, "Với API của Leaflet ta có thể tương tác với bản đồ một cách linh hoạt hơn. Sau đây là ví dụ làm việc đơn giản với Leaflet"), mdx("codeblock", {
        className: "language-javascript",
        codestring: "/**\n * Khởi tạo bản đồ với \"map\" div\n * với vị trí latitude, longitude và zoom bản đồ\n */\nvar map = L.map(\"map\", {\n  center: [latitude, longitude],\n  zoom: 16,\n});\n\n/**\n * Khởi tạo và hiển thị các lớp trên bản đồ\n * Bạn vào Cloudmade.com đăng kí một tài khoản để có thể lấy API\n */\nvar tile = \"http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png\";\n\nL.tileLayer(tile, {\n  key: \"760506895e284217a7442ce2efe97797\", // Đây là API mình đã đăng kí với cloudmade\n  styleId: 103288,\n  maxZoom: 16,\n}).addTo(map);\n\n/**\n * Đánh dấu vị trí trên bản đồ\n */\nvar maker = L.marker([latitude, longitude]).addTo(map);\n// Hiển thị Popup tại vị trí đánh dấu\nmarker.bindPopup(\"<p>Tiêu đề...</p>\").openPopup();"
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
        className: "token doc-comment comment",
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
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Khởi tạo bản đồ với \"map\" div")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * với vị trí latitude, longitude và zoom bản đồ")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " map "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token constant",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "L"), mdx("span", {
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
    }, "map"), mdx("span", {
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
    }, "\"map\""), mdx("span", {
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
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  center"), mdx("span", {
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
        className: "token plain",
        parentName: "div"
    }, "latitude"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " longitude"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]"), mdx("span", {
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
    }, "  zoom"), mdx("span", {
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
    }, "16"), mdx("span", {
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
        className: "token doc-comment comment",
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
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Khởi tạo và hiển thị các lớp trên bản đồ")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Bạn vào Cloudmade.com đăng kí một tài khoản để có thể lấy API")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " tile "), mdx("span", {
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
    }, "\"http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png\""), mdx("span", {
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
    }), mdx("span", {
        className: "token constant",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "L"), mdx("span", {
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
    }, "tileLayer"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "tile"), mdx("span", {
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
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  key"), mdx("span", {
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
    }, "\"760506895e284217a7442ce2efe97797\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đây là API mình đã đăng kí với cloudmade"), mdx("span", {
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
    }, "  styleId"), mdx("span", {
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
    }, "103288"), mdx("span", {
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
    }, "  maxZoom"), mdx("span", {
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
    }, "16"), mdx("span", {
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
    }, ")"), mdx("span", {
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
    }, "addTo"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "map"), mdx("span", {
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
        className: "token doc-comment comment",
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
        className: "token doc-comment comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, " * Đánh dấu vị trí trên bản đồ")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token doc-comment comment",
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " maker "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token constant",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "L"), mdx("span", {
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
    }, "marker"), mdx("span", {
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
    }, "["), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "latitude"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " longitude"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]"), mdx("span", {
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
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "addTo"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "map"), mdx("span", {
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
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Hiển thị Popup tại vị trí đánh dấu"), mdx("span", {
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
    }, "marker"), mdx("span", {
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
    }, "bindPopup"), mdx("span", {
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
    }, "\"<p>Tiêu đề...</p>\""), mdx("span", {
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
    }, "."), mdx("span", {
        className: "token method function property-access",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "openPopup"), mdx("span", {
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
    }, ";")))), mdx("p", null, "@", mdx("a", {
        href: "web-geolocation-and-leaflet-rwcwo?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("p", null, "Ngoài ra, bạn có thể vào những liên kết sau để tìm hiểu thêm về Geolocation và Leaflet:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://www.w3.org/TR/geolocation-API/",
        parentName: "li"
    }, "W3 - Geolocation API")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation",
        parentName: "li"
    }, "Developer Mozilla")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://leafletjs.com/reference.html",
        parentName: "li"
    }, "Leaflet API")), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "http://cloudmade.com/",
        parentName: "li"
    }, "Cloudmade"))));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
