/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "Đổ Bóng Mixin Với Text-Shadow",
    slug: "/do-bong-mixin-voi-text-shadow",
    date: "2013-09-03",
    tags: [
        "css",
        "sass",
        "javascript"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "CSS3 Text-Shadow là tính năng giúp bạn dễ dàng tạo đổ bóng cho text. Với text-shadow bạn cũng có thể dễ dàng tạo ra các kiểu chữ nghệ thuật (typography) hay kiểu chữ 3D...Và hôm nay mình sẽ giới thiệu các bạn ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "/blog/css-triangles-mixin-su-dung-sass/",
        parentName: "strong"
    }, "cách tạo mixin")), " đổ bóng dài (long shadow) trong Sass."), mdx("h3", {
        id: "đổ-bóng-dài-long-shadow-mixin-trong-sass"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#đổ-bóng-dài-long-shadow-mixin-trong-sass",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Đổ bóng dài (Long Shadow) mixin trong Sass"), mdx("codeblock", {
        className: "language-sass",
        codestring: "/**\n * Long Shadow Mixin\n */\n@mixin longshadow($color, $size, $direction)\n    $ts: null\n\n    @for $i from 1 through $size\n        // Đổ bóng hướng lên trên\n        @if $direction == \"top\"\n            $ts: 0 #{$i * -1}px 0 $color, $ts\n        // Đổ bóng hướng sang phải\n        @else if $direction == \"right\"\n            $ts: #{$i}px 0 0 $color, $ts\n        // Đổ bóng hướng xuống dưới\n        @else if $direction == \"bottom\"\n            $ts: 0 #{$i}px 0 $color, $ts\n        // Đổ bóng hướng sang trái\n        @else if $direction == \"left\"\n            $ts: #{$i * -1}px 0 0 $color, $ts\n        // Đổ bóng hướng lên trên bên trái\n        @else if $direction == \"top-left\"\n            $ts: #{$i * -1}px #{$i * -1}px 0 $color, $ts\n        // Đổ bóng hướng lên trên bên phải\n        @else if $direction == \"top-right\"\n            $ts: #{$i}px #{$i * -1}px 0 $color, $ts\n        // Đổ bóng hướng xuống dưới bên trái\n        @else if $direction == \"bottom-left\"\n            $ts: #{$i * -1}px #{$i}px 0 $color, $ts\n        // Đổ bóng hướng xuống dưới bên phải\n        @else if $direction == \"bottom-right\"\n            $ts: #{$i}px #{$i}px 0 $color, $ts\n    text-shadow: $ts"
    }, mdx("pre", {
        className: "prism-code language-sass",
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
    }, " * Long Shadow Mixin")), mdx("div", {
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
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@mixin"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " longshadow($color, $size, $direction)"), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " null"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@for"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " $i from 1 through $size"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng lên trên"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@if"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"top\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " 0 #{"), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$i"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "*"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " -1}px 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng sang phải"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"right\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "#{$i}"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, "px 0 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng xuống dưới"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"bottom\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "#{$i}"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, "px 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng sang trái"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"left\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " #{"), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$i"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "*"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " -1}px 0 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng lên trên bên trái"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"top-left\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " #{"), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$i"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "*"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " -1}px #{"), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$i"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "*"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " -1}px 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng lên trên bên phải"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"top-right\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "#{$i}"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, "px #{"), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$i"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "*"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " -1}px 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng xuống dưới bên trái"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"bottom-left\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " #{"), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$i"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "*"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " -1}px "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "#{$i}"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, "px 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
    }, "        "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// Đổ bóng hướng xuống dưới bên phải"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "        "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "@else"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " if $direction "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "="), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, " \"bottom-right\""), mdx("span", {
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
        className: "token variable-line",
        parentName: "div"
    }, "            "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
        className: "token variable-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "#{$i}"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, "px "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "#{$i}"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, "px 0 "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$color"), mdx("span", {
        className: "token variable-line",
        parentName: "div"
    }, ", "), mdx("span", {
        className: "token variable-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts"), mdx("span", {
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
        className: "token property-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token property-line property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "text-shadow"), mdx("span", {
        className: "token property-line punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token property-line",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token property-line variable",
        style: {
            color: "rgb(214, 222, 235)"
        },
        parentName: "div"
    }, "$ts")))), mdx("h3", {
        id: "sử-dụng"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#sử-dụng",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Sử dụng"), mdx("p", null, "Sau khi tạo được mixin thì ta có thể sử dụng rất dễ dàng tùy theo màu sắc, độ lớn và vị trí bóng mà bạn muốn hiển thị."), mdx("codeblock", {
        className: "language-sass",
        codestring: ".element--one\n    +longshadow(#e96b5e, 20, top)\n.element--two\n    +longshadow(#a13c32, 10, right)\n.element--three\n    +longshadow(#fbbc85, 30, bottom)\n.element--four\n    +longshadow(#af7a4b, 40, left)\n.element--five\n    +longshadow(#6dd7b5, 70, top-left)\n.element--six\n    +longshadow(#3e9277, 90, top-right)\n.element--seven\n    +longshadow(#8787c4, 60, bottom-left)\n.element--eight\n    +longshadow(#525283, 50, bottom-right)"
    }, mdx("pre", {
        className: "prism-code language-sass",
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
    }, ".element--one"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#e96b5e, 20, top)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--two"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#a13c32, 10, right)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--three"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#fbbc85, 30, bottom)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--four"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#af7a4b, 40, left)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--five"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#6dd7b5, 70, top-left)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--six"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#3e9277, 90, top-right)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--seven"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#8787c4, 60, bottom-left)"), mdx("span", {
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
        className: "token selector",
        style: {
            color: "rgb(199, 146, 234)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ".element--eight"), mdx("span", {
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
        className: "token atrule-line",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token atrule-line atrule",
        parentName: "div"
    }, "+"), mdx("span", {
        className: "token atrule-line",
        parentName: "div"
    }, "longshadow(#525283, 50, bottom-right)")))), mdx("p", null, "@", mdx("a", {
        href: "sass-long-shadow-mixin-60zj3?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("p", null, "Trên đây mình ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "/blog/su-dung-sass/",
        parentName: "strong"
    }, "sử dụng Sass")), " để tạo đổ bóng dài, bạn cũng có thể tùy biến thêm như thêm chức năng bóng mờ cho bóng...Nếu bạn không muốn làm việc với Sass nhưng vẫn muốn dùng tạo text đổ bóng dài bạn có thể sử dụng ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "/labs/longshadow-jquery-plugin/",
        parentName: "strong"
    }, "Long Shadow jQuery Plugin")), " mình đang viết và phát triển. Mình cũng rất mong nhận được góp ý của các bạn để hoàn thiện hơn mixin cũng như jQuery plugin này."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
