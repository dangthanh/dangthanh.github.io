/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "Tìm kiếm với Algolia, Hugo và Vue.js",
    slug: "/tim-kiem-voi-algolia-hugo-va-vue",
    date: "2018-12-08T10:59:55+07:00",
    tags: [
        "javascript",
        "hugo",
        "vue"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Trước đây, muốn tìm kiếm bài viết, tôi thường vào ", mdx("a", {
        href: "/tags",
        parentName: "p"
    }, "danh mục"), " và tìm kiếm các tags như ", mdx("inlineCode", {
        parentName: "p"
    }, "javascript"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "sass"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "css"), "...Và với mong muốn tìm kiếm bài viết được tốt hơn nên tôi quyết định thử nghiệm với ", mdx("a", {
        href: "https://www.algolia.com/",
        parentName: "p"
    }, "Algolia"), ", kết hợp một xíu với ", mdx("a", {
        href: "/blog/bat-dau-voi-vue/",
        parentName: "p"
    }, "Vue.js"), "."), mdx("h3", {
        id: "tại-sao-là-algolia"
    }, "Tại sao là Algolia?"), mdx("p", null, "Thực ra đối với những người làm lập trình như tôi, thì lí do đầu tiên là được học thêm một công nghệ mới. Thứ hai là sau khi thử nghiệm Algolia, thời gian kết quả tìm kiếm mà Algolia trả về rất nhanh, làm tôi cũng rất bất ngờ và mong muốn tìm hiểu thêm về Algolia."), mdx("p", null, "Bên cạnh đó, qua quá trình mới làm quen với Algolia tôi thấy nó có những điểm nổi bật sau:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Algolia cung cấp gói ", mdx("a", {
        href: "https://www.algolia.com/users/sign_up",
        parentName: "li"
    }, "miễn phí"), " cho bạn sử dụng"), mdx("li", {
        parentName: "ul"
    }, "Giao diện quản lý dễ sử dụng cho phép bạn theo dõi, truy vết và giám sát các hoạt động tìm kiếm"), mdx("li", {
        parentName: "ul"
    }, "Cung cấp các API Client cho nhiều ngôn ngữ như ", mdx("inlineCode", {
        parentName: "li"
    }, "JavaScript"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "Node.js"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "Go"), ", ", mdx("inlineCode", {
        parentName: "li"
    }, "C#")), mdx("li", {
        parentName: "ul"
    }, "Các thư viện Algolia cung cấp rất hay như ", mdx("a", {
        href: "https://github.com/algolia/autocomplete.js",
        parentName: "li"
    }, "Autocomplete"), ", ", mdx("a", {
        href: "https://community.algolia.com/places/",
        parentName: "li"
    }, "Algolia Places"))), mdx("h3", {
        id: "tạo-json-search-index-trong-hugo"
    }, "Tạo JSON Search Index trong Hugo"), mdx("p", null, mdx("strong", {
        parentName: "p"
    }, "Algolia"), " cung cấp tìm kiếm theo chỉ mục với các định dạng file ", mdx("inlineCode", {
        parentName: "p"
    }, "JSON"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "CSV"), " hoặc ", mdx("inlineCode", {
        parentName: "p"
    }, "TSV"), " hoặc sử dụng ", mdx("a", {
        href: "https://www.algolia.com/doc/api-reference/api-methods/",
        parentName: "p"
    }, "API"), " để thêm thông tin tìm kiếm được đánh chỉ mục."), mdx("p", null, "Với ", mdx("strong", {
        parentName: "p"
    }, "Hugo"), " mình sẽ giới thiệu các bạn cách tạo ra một file ", mdx("inlineCode", {
        parentName: "p"
    }, "JSON"), " và tải tập tin đó lên Algolia."), mdx("p", null, "Đầu tiên, ta tạo một file ", mdx("inlineCode", {
        parentName: "p"
    }, "json"), " trong ", mdx("strong", {
        parentName: "p"
    }, "layouts/_default/"), " hoặc ", mdx("strong", {
        parentName: "p"
    }, "themes/[tên-theme-của-bạn]/layouts/_default/"), " với tên là ", mdx("strong", {
        parentName: "p"
    }, mdx("em", {
        parentName: "strong"
    }, "list.algolia.json")), " với cấu trúc như sau."), mdx("codeblock", {
        className: "language-json",
        codestring: "{{- $.Scratch.Add \"index\" slice -}}\n{{- $section := $.Site.GetPage \"post\" .Section }}\n{{- range .Site.AllPages -}}\n  {{- if or (and (.IsDescendant $section) (and (not .Draft) (not .Params.private))) $section.IsHome -}}\n    {{- $.Scratch.Add \"index\" (dict \"objectID\" .File.UniqueID \"date\" .Date.UTC.Unix \"description\" .Description \"dir\" .File.Dir \"expirydate\" .ExpiryDate.UTC.Unix \"fuzzywordcount\" .FuzzyWordCount \"keywords\" .Keywords \"kind\" .Kind \"lang\" .Lang \"lastmod\" .Lastmod.UTC.Unix \"permalink\" .Permalink \"publishdate\" .PublishDate \"readingtime\" .ReadingTime \"relpermalink\" .RelPermalink \"summary\" .Summary \"title\" .Title \"type\" .Type \"url\" .Permalink \"weight\" .Weight \"wordcount\" .WordCount \"section\" .Section \"tags\" .Params.Tags \"categories\" .Params.Categories \"authors\" .Params.Authors)}}\n  {{- end -}}\n{{- end -}}\n{{- $.Scratch.Get \"index\" | jsonify -}}"
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
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "- $.Scratch.Add "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"index\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " slice -"), mdx("span", {
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
    }), mdx("span", {
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
    }, "- $section "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "= $.Site.GetPage "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"post\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Section "), mdx("span", {
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
    }), mdx("span", {
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
    }, "- range .Site.AllPages -"), mdx("span", {
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
    }, "- if or (and (.IsDescendant $section) (and (not .Draft) (not .Params.private))) $section.IsHome -"), mdx("span", {
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
    }, "- $.Scratch.Add "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"index\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " (dict "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"objectID\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .File.UniqueID "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"date\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Date.UTC.Unix "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"description\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Description "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"dir\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .File.Dir "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"expirydate\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .ExpiryDate.UTC.Unix "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"fuzzywordcount\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .FuzzyWordCount "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"keywords\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Keywords "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"kind\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Kind "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"lang\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Lang "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"lastmod\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Lastmod.UTC.Unix "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"permalink\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Permalink "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"publishdate\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .PublishDate "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"readingtime\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .ReadingTime "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"relpermalink\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .RelPermalink "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"summary\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Summary "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"title\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Title "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"type\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Type "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"url\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Permalink "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"weight\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Weight "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"wordcount\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .WordCount "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"section\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Section "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"tags\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Params.Tags "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"categories\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Params.Categories "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"authors\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " .Params.Authors)"), mdx("span", {
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
    }, "- end -"), mdx("span", {
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
    }), mdx("span", {
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
    }, "- end -"), mdx("span", {
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
    }), mdx("span", {
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
    }, "- $.Scratch.Get "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"index\""), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " | jsonify -"), mdx("span", {
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
    }, "}")))), mdx("p", null, "Tập tin ", mdx("inlineCode", {
        parentName: "p"
    }, "JSON"), " sẽ mang những thông tin được định nghĩa ở trên như ", mdx("inlineCode", {
        parentName: "p"
    }, "authors"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "date"), ", ", mdx("inlineCode", {
        parentName: "p"
    }, "title"), "..."), mdx("p", null, "Tập tin sẽ được tạo ra từ những thông tin các bài viết chứa trong thư mục ", mdx("strong", {
        parentName: "p"
    }, "post"), ". Bạn có thể thay ", mdx("strong", {
        parentName: "p"
    }, "post"), " bằng thư mục bài viết của bạn trong thư mục ", mdx("strong", {
        parentName: "p"
    }, "content")), mdx("p", null, "Ở đây tôi sử dụng một số ", mdx("a", {
        href: "https://gohugo.io/categories/functions",
        parentName: "p"
    }, "cú pháp về Functions"), " trong Hugo. Bạn có thể tham khảo thêm nhé."), mdx("p", null, "Tiếp theo ta mở tập tin ", mdx("strong", {
        parentName: "p"
    }, "config.toml"), " và thêm một số cấu hình vào:"), mdx("codeblock", {
        className: "language-toml",
        codestring: "[outputFormats.Algolia]\n  baseName = \"algolia\"\n  isPlainText = true\n  mediaType = \"application/json\"\n  notAlternative = true\n\n[params.algolia]\n  vars = [\"title\", \"description\", \"summary\", \"date\", \"lastmod\", \"permalink\"]\n  params = [\"categories\", \"tags\"]\n\n[outputs]\n  home = [\"HTML\", \"RSS\", \"Algolia\"]"
    }, mdx("pre", {
        className: "prism-code language-toml",
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
    }, "["), mdx("span", {
        className: "token table class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "outputFormats.Algolia"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "baseName"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
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
    }, "\"algolia\""), mdx("span", {
        className: "token plain",
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
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "isPlainText"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token boolean",
        style: {
            color: "rgb(255, 88, 116)"
        },
        parentName: "div"
    }, "true"), mdx("span", {
        className: "token plain",
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
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "mediaType"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
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
    }, "\"application/json\""), mdx("span", {
        className: "token plain",
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
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "notAlternative"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token boolean",
        style: {
            color: "rgb(255, 88, 116)"
        },
        parentName: "div"
    }, "true"), mdx("span", {
        className: "token plain",
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
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token table class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "params.algolia"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "vars"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
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
    }, "["), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"title\""), mdx("span", {
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
    }, "\"description\""), mdx("span", {
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
    }, "\"summary\""), mdx("span", {
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
    }, "\"date\""), mdx("span", {
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
    }, "\"lastmod\""), mdx("span", {
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
    }, "\"permalink\""), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "params"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
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
    }, "["), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"categories\""), mdx("span", {
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
    }, "\"tags\""), mdx("span", {
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
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token table class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "outputs"), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token key property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "home"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
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
    }, "["), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"HTML\""), mdx("span", {
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
    }, "\"RSS\""), mdx("span", {
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
    }, "\"Algolia\""), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]")))), mdx("p", null, "Sau đó bạn chạy lệnh"), mdx("codeblock", {
        className: "language-shell",
        codestring: "$ hugo"
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
    }, "$ hugo")))), mdx("p", null, "Bạn sẽ có một tập tin là ", mdx("strong", {
        parentName: "p"
    }, "algolia.json"), " trong thư mục ", mdx("strong", {
        parentName: "p"
    }, "public")), mdx("h3", {
        id: "tải-tập-tin-lên-alolia"
    }, "Tải tập tin lên Alolia"), mdx("p", null, "Sau khi có tập tin ", mdx("strong", {
        parentName: "p"
    }, "algolia.json"), " và ", mdx("a", {
        href: "https://www.algolia.com/users/sign_up",
        parentName: "p"
    }, "đăng ký"), " xong một tài khoản Algolia. Bạn đăng nhập vào ", mdx("a", {
        href: "https://www.algolia.com/dashboard",
        parentName: "p"
    }, "Algolia Dashboard"), "."), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, "Bạn tạo một App sử dụng Algolia. Ở đây tôi ví dụ app có tên là ", mdx("em", {
        parentName: "p"
    }, "dangthanhblog")), mdx("p", {
        parentName: "li"
    }, mdx("img", {
        src: "/images/blog/algolia_create_app.png",
        alt: "Tạo app sử dụng Algolia",
        parentName: "p"
    }))), mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, "Ở giao diện Dashboard bạn chọn ", mdx("strong", {
        parentName: "p"
    }, "Indices"), " và nhấn vào ", mdx("strong", {
        parentName: "p"
    }, "Create index"), " giả sử với tên là ", mdx("em", {
        parentName: "p"
    }, "posts")), mdx("p", {
        parentName: "li"
    }, mdx("img", {
        src: "/images/blog/algolia_create_index.png",
        alt: "Tạo index trong Algolia",
        parentName: "p"
    })), mdx("p", {
        parentName: "li"
    }, "Chọn ", mdx("strong", {
        parentName: "p"
    }, "Manage index"), " -> ", mdx("strong", {
        parentName: "p"
    }, "Upload file"), " chọn tập tin ", mdx("strong", {
        parentName: "p"
    }, "algolia.json"), " trong thư mục ", mdx("strong", {
        parentName: "p"
    }, "public"), " đã tạo được ở trên.")), mdx("li", {
        parentName: "ul"
    }, mdx("p", {
        parentName: "li"
    }, "Ngoài cách tải trực tiếp tập tin lên, bạn có thể dùng ", mdx("a", {
        href: "https://www.npmjs.com/package/atomic-algolia",
        parentName: "p"
    }, "atomic-algolia"), " để tải tập tin lên Algolia thông qua NPM scripts hoặc serverless nhé."), mdx("codeblock", {
        className: "language-shell",
        codestring: "$ npm install atomic-algolia dotenv --save-dev",
        parentName: "li"
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
    }, "$ "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "npm"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token function",
        style: {
            color: "rgb(130, 170, 255)"
        },
        parentName: "div"
    }, "install"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " atomic-algolia dotenv --save-dev")))), mdx("p", {
        parentName: "li"
    }, "Tạo một file ", mdx("inlineCode", {
        parentName: "p"
    }, ".env"), " với các thông số"), mdx("codeblock", {
        className: "language-json",
        codestring: "ALGOLIA_APP_ID=ALGOLIA_APP_ID\nALGOLIA_ADMIN_KEY=YOUR_ALGOLIA_ADMIN_KEY\nALGOLIA_INDEX_NAME=posts\nALGOLIA_INDEX_FILE=algolia.json",
        parentName: "li"
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
        className: "token plain",
        parentName: "div"
    }, "ALGOLIA_APP_ID=ALGOLIA_APP_ID")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "ALGOLIA_ADMIN_KEY=YOUR_ALGOLIA_ADMIN_KEY")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "ALGOLIA_INDEX_NAME=posts")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "ALGOLIA_INDEX_FILE=algolia.json")))), mdx("p", {
        parentName: "li"
    }, "Ở đây tôi giả sử indexName tôi sử dụng là ", mdx("strong", {
        parentName: "p"
    }, "posts"), " và tập tin có tên là ", mdx("strong", {
        parentName: "p"
    }, "algolia.json")), mdx("p", {
        parentName: "li"
    }, "Sử dụng NPM scripts trong ", mdx("strong", {
        parentName: "p"
    }, "package.json")), mdx("codeblock", {
        className: "language-json",
        codestring: "\"scripts\": {\n  \"algolia\": \"atomic-algolia\"\n}",
        parentName: "li"
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
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "\"scripts\""), mdx("span", {
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
    }, "  "), mdx("span", {
        className: "token property",
        style: {
            color: "rgb(128, 203, 196)"
        },
        parentName: "div"
    }, "\"algolia\""), mdx("span", {
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
    }, "\"atomic-algolia\""), mdx("span", {
        className: "token plain",
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
    }, "Chạy lệnh để tải file ", mdx("inlineCode", {
        parentName: "p"
    }, "algolia.json"), " lên Algolia"), mdx("codeblock", {
        className: "language-sheel",
        codestring: "$ npm run algolia",
        parentName: "li"
    }, mdx("pre", {
        className: "prism-code language-sheel",
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
    }, "$ npm run algolia")))))), mdx("h3", {
        id: "tạo-algolia-component-với-vuejs"
    }, "Tạo Algolia Component với Vue.js"), mdx("p", null, "Để hiển thị trên Hugo. tôi tạo ra một trang ", mdx("inlineCode", {
        parentName: "p"
    }, "static templates"), " với tên gọi là ", mdx("inlineCode", {
        parentName: "p"
    }, "archives.md"), " trong thư mục ", mdx("strong", {
        parentName: "p"
    }, "content"), " như sau:"), mdx("codeblock", {
        className: "language-markdown",
        codestring: "---\ntype: \"static\"\nlayout: \"archives\"\n---"
    }, mdx("pre", {
        className: "prism-code language-markdown",
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
        className: "token front-matter-block punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "---"), mdx("span", {
        className: "token front-matter-block",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token front-matter-block",
        parentName: "div"
    }), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml key atrule",
        parentName: "div"
    }, "type"), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"static\""), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml",
        parentName: "div"
    }), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml key atrule",
        parentName: "div"
    }, "layout"), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"archives\""), mdx("span", {
        className: "token front-matter-block",
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token front-matter-block",
        parentName: "div"
    }), mdx("span", {
        className: "token front-matter-block punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "---")))), mdx("p", null, "Sau đó tạo thêm file HTML có tên là ", mdx("strong", {
        parentName: "p"
    }, "layouts/static/archives.html"), " tương ứng với ", mdx("inlineCode", {
        parentName: "p"
    }, "layout"), " được khai báo ở trên."), mdx("p", null, "Algolia cung cấp một thư viện JavaScript để bạn dễ dàng kết với Algolia thông qua ", mdx("a", {
        href: "https://community.algolia.com/instantsearch.js/",
        parentName: "p"
    }, "Instantsearch.js"), " hoặc ", mdx("a", {
        href: "https://v2--vue-instantsearch.netlify.com/getting-started/migration.html",
        parentName: "p"
    }, "Vue Instantsearch"), "."), mdx("p", null, "Vì tôi đã ", mdx("a", {
        href: "/blog/bat-dau-voi-vue/",
        parentName: "p"
    }, "giới thiệu Vue.js"), " có một tính năng rất hay đó là Component. Nên tôi quyết định viết Component này sử dụng ", mdx("a", {
        href: "https://v2--vue-instantsearch.netlify.com/getting-started/migration.html",
        parentName: "p"
    }, "Vue InstantSearch"), " vừa giúp bạn biết thêm về cách xây dựng Component trong Vue thông qua thuộc tính ", mdx("strong", {
        parentName: "p"
    }, mdx("em", {
        parentName: "strong"
    }, "props")), "."), mdx("codeblock", {
        className: "language-javascript",
        codestring: "Vue.component(\"SearchAlgoliaComponent\", {\n  name: \"SearchAlgoliaComponent\",\n  template: `\n    <ais-index\n      :app-id=\"appId\"\n      :api-key=\"apiKey\"\n      :index-name=\"indexName\"\n      :routing=\"true\">\n      <ais-search-box placeholder=\"Tìm kiếm tiêu đề hoặc nội dung bài viết...\"></ais-search-box>\n      <ais-highlight :hit=\"hit\" attribute=\"title\"></ais-highlight>\n      <ais-results>\n        // Your display results\n      </ais-results>\n    </ais-index>\n  `,\n  props: {\n    appId: {\n      type: String,\n      require: true,\n    },\n    apiKey: {\n      type: String,\n      required: true,\n    },\n    indexName: {\n      type: String,\n      required: true,\n    },\n    routing: {\n      type: Boolean,\n      default: true,\n    },\n  },\n});"
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
    }, "\"SearchAlgoliaComponent\""), mdx("span", {
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
    }, "  name"), mdx("span", {
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
    }, "\"SearchAlgoliaComponent\""), mdx("span", {
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
    }, "  template"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token template-string template-punctuation string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "`"), mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    })), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "    <ais-index")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      :app-id=\"appId\"")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      :api-key=\"apiKey\"")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      :index-name=\"indexName\"")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      :routing=\"true\">")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      <ais-search-box placeholder=\"Tìm kiếm tiêu đề hoặc nội dung bài viết...\"></ais-search-box>")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      <ais-highlight :hit=\"hit\" attribute=\"title\"></ais-highlight>")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      <ais-results>")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "        // Your display results")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "      </ais-results>")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "    </ais-index>")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token template-string string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "  "), mdx("span", {
        className: "token template-string template-punctuation string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "`"), mdx("span", {
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
    }, "  props"), mdx("span", {
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
    }, "    appId"), mdx("span", {
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
    }, "      type"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token known-class-name class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "String"), mdx("span", {
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
    }, "      require"), mdx("span", {
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
    }, "    "), mdx("span", {
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
    }, "    apiKey"), mdx("span", {
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
    }, "      type"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token known-class-name class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "String"), mdx("span", {
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
    }, "      required"), mdx("span", {
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
    }, "    "), mdx("span", {
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
    }, "    indexName"), mdx("span", {
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
    }, "      type"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token known-class-name class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "String"), mdx("span", {
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
    }, "      required"), mdx("span", {
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
    }, "    "), mdx("span", {
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
    }, "    routing"), mdx("span", {
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
    }, "      type"), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token known-class-name class-name",
        style: {
            color: "rgb(255, 203, 139)"
        },
        parentName: "div"
    }, "Boolean"), mdx("span", {
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
    }, "      "), mdx("span", {
        className: "token keyword module",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "default"), mdx("span", {
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
    }, "    "), mdx("span", {
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
    }, ")"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";")))), mdx("p", null, "Vậy là ta đã có một Component sử dụng Vue cho Algolia. Giờ ta sẽ sử dụng nó trong ", mdx("strong", {
        parentName: "p"
    }, "layouts/static/archives.html"), " nhé."), mdx("codeblock", {
        className: "language-html",
        codestring: "<main id=\"app\">\n  <search-algolia-component\n    :appId=\"yourAppId\"\n    :apiKey=\"yourApiKey\"\n    :indexName=\"yourIndexName\"\n  />\n</main>"
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
    }, "main"), mdx("span", {
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
    }, "search-algolia-component"), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ":appId"), mdx("span", {
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
    }, "yourAppId"), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ":apiKey"), mdx("span", {
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
    }, "yourApiKey"), mdx("span", {
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
    }, "    "), mdx("span", {
        className: "token tag attr-name",
        style: {
            color: "rgb(173, 219, 103)",
            fontStyle: "italic"
        },
        parentName: "div"
    }, ":indexName"), mdx("span", {
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
    }, "yourIndexName"), mdx("span", {
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
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "/>"), mdx("span", {
        className: "token plain",
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
    }, "main"), mdx("span", {
        className: "token tag punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ">")))), mdx("p", null, mdx("strong", {
        parentName: "p"
    }, "appId"), " và ", mdx("strong", {
        parentName: "p"
    }, "apiKey"), " bạn vào trong Dashboard của Algolia và chọn ", mdx("strong", {
        parentName: "p"
    }, "API keys"), " để lấy thông tin nhé."), mdx("p", null, "Giờ ta đã có một trang tìm kiếm sử dụng Algolia, Hugo và Vue.js. Bạn có thể ", mdx("a", {
        href: "/archives/",
        parentName: "p"
    }, "trải nghiệm"), " hoặc có thể chỉnh sửa thêm cho ", mdx("inlineCode", {
        parentName: "p"
    }, "SearchAlgoliaComponent"), " theo cách bạn muốn hiển thị nhé."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
