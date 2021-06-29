/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "Bắt đầu với Vue.js",
    slug: "/bat-dau-voi-vue",
    date: "2018-12-04T03:19:52+07:00",
    tags: [
        "javascript",
        "vue",
        "css"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, mdx("a", {
        href: "https://vuejs.org/",
        parentName: "p"
    }, mdx("strong", {
        parentName: "a"
    }, "Vue.js")), " là một thư viện JavaScript giúp bạn dễ dàng xây dựng các giao diện (UI) từ đơn giản đến phức tạp."), mdx("p", null, "Để bắt đầu với Vue.js bạn cần trang bị cho một những kiến thức cơ bản về HTML, CSS và JavaScript là nền tảng giúp bạn dễ dàng làm quen với Vue.js"), mdx("h3", {
        id: "vuejs-có-gì-hay"
    }, "Vue.js có gì hay?"), mdx("p", null, "Điểm đầu tiên tôi thích ở Vue.js là một trong số ít những thư viện JavaScript phát triển mà tài liệu hỗ trợ ngôn ngữ ", mdx("a", {
        href: "https://vi.vuejs.org/",
        parentName: "p"
    }, "tiếng Việt"), ". Cái này giúp ích rất nhiều, đặc biệt những bạn vừa làm quen với Vue.js và JavaScript. Bên cạnh đó tài liệu Vue.js còn hỗ trợ nhiều ngôn ngữ khác như ", mdx("a", {
        href: "https://vuejs.org/",
        parentName: "p"
    }, "tiếng Anh"), ", ", mdx("a", {
        href: "https://cn.vuejs.org/",
        parentName: "p"
    }, "tiếng Trung"), ", ", mdx("a", {
        href: "https://jp.vuejs.org",
        parentName: "p"
    }, "tiếng Nhật"), ", ", mdx("a", {
        href: "https://ru.vuejs.org",
        parentName: "p"
    }, "tiếng Nga"), ", ", mdx("a", {
        href: "https://kr.vuejs.org",
        parentName: "p"
    }, "tiếng Hàn Quốc"), ", ", mdx("a", {
        href: "https://br.vuejs.org",
        parentName: "p"
    }, "tiếng Bồ Đào Nha"), ", ", mdx("a", {
        href: "https://fr.vuejs.org",
        parentName: "p"
    }, "tiếng Pháp"), "."), mdx("p", null, "Ngoài ra, Vue.js còn có nhiều ưu điểm:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Dễ dàng để bắt đầu (với nền tảng HTML, CSS và JavaScript)"), mdx("li", {
        parentName: "ul"
    }, "Kết hợp linh hoạt với ", mdx("inlineCode", {
        parentName: "li"
    }, "SVG"), " để xây dựng ", mdx("inlineCode", {
        parentName: "li"
    }, "icons"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "charts")), mdx("li", {
        parentName: "ul"
    }, "Giúp dễ dàng tái sử dụng thông qua các Component (tôi sẽ giới thiệu thêm ở bên dưới)"), mdx("li", {
        parentName: "ul"
    }, "Tích hợp dễ dàng với các thư viện JavaScript khác như ", mdx("a", {
        href: "https://date-fns.org/",
        parentName: "li"
    }, "date-fns"), ", ", mdx("a", {
        href: "https://greensock.com/gsap",
        parentName: "li"
    }, "gsap"), ", ", mdx("a", {
        href: "https://d3js.org/",
        parentName: "li"
    }, "d3.js"), ", ", mdx("a", {
        href: "https://threejs.org/",
        parentName: "li"
    }, "three.js"), "...")), mdx("h3", {
        id: "hệ-sinh-thái"
    }, "Hệ sinh thái"), mdx("p", null, "Vue.js có một hệ sinh thái rất mạnh mẽ, giúp bạn lựa chọn viết cả ứng dụng web, mobile hay cả desktop:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://cli.vuejs.org/",
        parentName: "li"
    }, "Vue CLI"), " một công cụ chuẩn được phát triển các ứng dụng Vue.js"), mdx("li", {
        parentName: "ul"
    }, mdx("a", {
        href: "https://github.com/vuejs/vue-devtools",
        parentName: "li"
    }, "Vue Devtools"), " là công cụ giúp bạn ", mdx("inlineCode", {
        parentName: "li"
    }, "debbuging"), " ứng dụng viết bằng Vue.js"), mdx("li", {
        parentName: "ul"
    }, "Single Page Application (SPA) với ", mdx("a", {
        href: "https://router.vuejs.org/",
        parentName: "li"
    }, "Vue-Router"), " hoặc ", mdx("a", {
        href: "https://ssr.vuejs.org/",
        parentName: "li"
    }, "Server-Side Rendering"), " cho việc tối ưu SEO và cập nhật các nội dung một cách nhanh chóng"), mdx("li", {
        parentName: "ul"
    }, "Quản lý các trạng thái và thư viện trong Vue.js với ", mdx("a", {
        href: "https://vuex.vuejs.org/",
        parentName: "li"
    }, "Vuex")), mdx("li", {
        parentName: "ul"
    }, "Viết mobile application bằng ", mdx("a", {
        href: "https://github.com/ionic-team/ionic/tree/master/vue",
        parentName: "li"
    }, "Ionic Vue"), " hoặc ", mdx("a", {
        href: "https://www.nativescript.org/vue",
        parentName: "li"
    }, "NativeScript-Vue")), mdx("li", {
        parentName: "ul"
    }, "Hoặc có thể xây dựng ứng dựng desktop cho Windows, OS X và Linux bằng ", mdx("a", {
        href: "https://vuido.mimec.org/",
        parentName: "li"
    }, "Vuido"))), mdx("h3", {
        id: "ứng-dụng-đầu-tiên-với-vuejs"
    }, "Ứng dụng đầu tiên với Vue.js"), mdx("p", null, "Ở trên tôi đã giới thiệu các bạn về ", mdx("strong", {
        parentName: "p"
    }, "Vue CLI"), " một công cụ để phát triển các ứng dụng Vue.js nhưng ở đây để dễ dàng làm quen tôi sử dụng cú pháp thuần JavaScript và HTML."), mdx("p", null, "Đầu tiên bạn cần nhúng thư viện Vue.js và trong thẻ ", mdx("inlineCode", {
        parentName: "p"
    }, "<script>"), " và khai báo như sau:"), mdx("codeblock", {
        className: "language-html",
        codestring: "<div id=\"app\">\n  <h1>{{ msg }}</h1>\n</div>\n<script src=\"//unpkg.com/vue@2.5.17/dist/vue.js\"></script>\n<script>\n  new Vue({\n    el: \"#app\",\n    data() {\n      return {\n        msg: \"Hello Vue.js\",\n      };\n    },\n  });\n</script>"
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
    }, "id"), mdx("span", {
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
    }, "app"), mdx("span", {
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
    }, "h1"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "{{ msg }}"), mdx("span", {
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
    }, "h1"), mdx("span", {
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
    }, "<"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "script"), mdx("span", {
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
    }, "src"), mdx("span", {
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
    }, "//unpkg.com/vue@2.5.17/dist/vue.js"), mdx("span", {
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
        className: "token script",
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
    }, "script"), mdx("span", {
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
    }, "<"), mdx("span", {
        className: "token tag",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "script"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token script language-javascript keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "new"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token script language-javascript class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "Vue"), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "    el"), mdx("span", {
        className: "token script language-javascript operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token script language-javascript string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"#app\""), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token script language-javascript function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "data"), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "("), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "      "), mdx("span", {
        className: "token script language-javascript keyword control-flow",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "return"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "        msg"), mdx("span", {
        className: "token script language-javascript operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token script language-javascript string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"Hello Vue.js\""), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "      "), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "    "), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ","), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ")"), mdx("span", {
        className: "token script language-javascript punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";"), mdx("span", {
        className: "token script language-javascript",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token script language-javascript",
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
    }, "script"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">")))), mdx("p", null, "và ta sẽ được kết quả"), mdx("p", null, "@", mdx("a", {
        href: "vue-hello-rfi54?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h3", {
        id: "làm-quen-với-vuejs"
    }, "Làm quen với Vue.js"), mdx("p", null, "Để bắt đầu làm quen với Vue.js bạn cần chú ý những khái niệm chính sau:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Directives"), mdx("li", {
        parentName: "ul"
    }, "Components"), mdx("li", {
        parentName: "ul"
    }, "Transitions và Animations")), mdx("h4", {
        id: "1-directives"
    }, "1. Directives"), mdx("p", null, "Directives trong Vue.js được sử dụng như một ", mdx("inlineCode", {
        parentName: "p"
    }, "attribute"), " trong thẻ của HTML, cung cấp những chức năng:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Hiển thị (view) như ", mdx("inlineCode", {
        parentName: "li"
    }, "v-text"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "v-html"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "v-pre"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "v-bind")), mdx("li", {
        parentName: "ul"
    }, "Input như ", mdx("inlineCode", {
        parentName: "li"
    }, "v-model")), mdx("li", {
        parentName: "ul"
    }, "Các sự kiện (event binding) như ", mdx("inlineCode", {
        parentName: "li"
    }, "v-on")), mdx("li", {
        parentName: "ul"
    }, "Điều khiển (conditionals) như ", mdx("inlineCode", {
        parentName: "li"
    }, "v-show"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "v-if"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "v-else"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "v-else-if")), mdx("li", {
        parentName: "ul"
    }, "Lặp lại (loop rendering) như ", mdx("inlineCode", {
        parentName: "li"
    }, "v-for"))), mdx("p", null, "@", mdx("a", {
        href: "vue-rendering-for-loop-u975c?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "2-components"
    }, "2. Components"), mdx("p", null, "Component là một tính năng rất hay và phổ biến hiện nay trong các thư viện được viết bằng JavaScript. Với việc sử dụng Component trong Vue.js bạn có thể tự mình xây dựng những Component như ", mdx("inlineCode", {
        parentName: "p"
    }, "modal"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "calendar"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "datepicker"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "slider"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "charts"), "...và tái sử dụng lại trong ứng dụng hoặc sử dụng vào bất kỳ nơi nào bạn muốn."), mdx("p", null, "Component trong Vue.js có hai cách đăng ký cơ bản"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, "Đăng ký toàn cục, sử dụng trong toàn bộ ứng dụng (Global Registration)"), mdx("codeblock", {
        className: "language-javascript",
        codestring: "Vue.component(\"component-name\", {\n  // ... options ...\n});",
        parentName: "li"
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
        className: "token maybe-class-name",
        parentName: "div"
    }, "Vue"), mdx("span", {
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
    }, "component"), mdx("span", {
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
    }, "\"component-name\""), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "// ... options ..."), mdx("span", {
        className: "token plain",
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
    }, ";"))))), mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, "Đăng ký cục bộ, sử dụng trong component được chỉ định (Local Registration). Ví dụ ở đây ", mdx("inlineCode", {
        parentName: "p"
    }, "BookComponent"), " chỉ được sử dụng trong ", mdx("inlineCode", {
        parentName: "p"
    }, "ArticleComponent"), " khi được đăng ký."), mdx("codeblock", {
        className: "language-javascript",
        codestring: "var BookComponent = { /* ... */ };\nvar ArticleComponent = {\n  components: {\n    'book': BookComponent\n  }\n};\n\nnew Vue({\n  el: '#app'\n  components: {\n    'article': ArticleComponent\n  }\n});",
        parentName: "li"
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
    }, "var"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token maybe-class-name",
        parentName: "div"
    }, "BookComponent"), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token comment",
        style: {
            color: "rgb(99, 119, 119)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, "/* ... */"), mdx("span", {
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
    }, " "), mdx("span", {
        className: "token maybe-class-name",
        parentName: "div"
    }, "ArticleComponent"), mdx("span", {
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
    }, "  components"), mdx("span", {
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
    }, "'book'"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token maybe-class-name",
        parentName: "div"
    }, "BookComponent"), mdx("span", {
        className: "token plain",
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
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "new"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "Vue"), mdx("span", {
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
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  el"), mdx("span", {
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
    }, "'#app'"), mdx("span", {
        className: "token plain",
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
    }, "  components"), mdx("span", {
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
    }, "'article'"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token maybe-class-name",
        parentName: "div"
    }, "ArticleComponent"), mdx("span", {
        className: "token plain",
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
    }, ";")))))), mdx("p", null, "@", mdx("a", {
        href: "vue-fetch-books-from-google-clhrf?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h4", {
        id: "3-transitions-và-animations"
    }, "3. Transitions và Animations"), mdx("p", null, "Transitions và Animations là một phần hầu như không thể thiếu trong thiết kế UI và UX."), mdx("p", null, "Transitions và Animations trong Vue.js khá linh hoạt. Bạn có thể sử dụng các thuộc tính của CSS transitions và animations hoặc các thư viện CSS animations như ", mdx("a", {
        href: "https://daneden.github.io/animate.css/",
        parentName: "p"
    }, "Animate.css"), " hoặc thư viện JavaScript như ", mdx("a", {
        href: "http://animejs.com/",
        parentName: "p"
    }, "anime.js"), " hay ", mdx("a", {
        href: "https://popmotion.io/",
        parentName: "p"
    }, "popmotion"), " để tạo các hiệu ứng đẹp mắt."), mdx("p", null, "Bạn có thể tạo ", mdx("inlineCode", {
        parentName: "p"
    }, "Transitions"), " cho một phần tử"), mdx("codeblock", {
        className: "language-javascript",
        codestring: "<transition name=\"slide\">\n  <p v-if=\"show\">Show Slide</p>\n</transition>"
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
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "transition name"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"slide\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "p v"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "-"), mdx("span", {
        className: "token keyword control-flow",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "if"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"show\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ">"), mdx("span", {
        className: "token maybe-class-name",
        parentName: "div"
    }, "Show"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token maybe-class-name",
        parentName: "div"
    }, "Slide"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "/"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "p"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "/"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "transition"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ">")))), mdx("p", null, "hoặc một nhóm (danh sách) phần tử"), mdx("codeblock", {
        className: "language-javascript",
        codestring: "<transition-group name=\"items\" tag=\"section\">\n  <div v-for=\"item in items\" v-bind:key=\"item.id\">\n    {{ item.name }}\n  </div>\n</transition-group>"
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
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "transition"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "-"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "group name"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"items\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " tag"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"section\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "div v"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "-"), mdx("span", {
        className: "token keyword control-flow",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "for"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"item in items\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " v"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "-"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "bind"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "key"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"item.id\""), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
    }, "    "), mdx("span", {
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
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " item"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "."), mdx("span", {
        className: "token property-access",
        parentName: "div"
    }, "name"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "/"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "div"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
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
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "<"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "/"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "transition"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "-"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "group"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ">")))), mdx("p", null, "@", mdx("a", {
        href: "vue-transition-o3l93?view=preview",
        parentName: "p"
    }, "codesandbox")), mdx("h3", {
        id: "túm-lại"
    }, "Túm lại"), mdx("p", null, "Vue.js là một thư viện khá tốt để các bạn đã có sẵn nền tảng về lập trình HTML, CSS và JavaScript có thể bắt đầu."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
