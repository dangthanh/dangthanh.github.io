/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "2021",
    slug: "/2021",
    date: "2021-28-06",
    tags: [
        "personal"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("h1", {
        id: "md-to-mdx"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#md-to-mdx",
        parentName: "h1"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "MD to MDX"), mdx("codeblock", {
        className: "language-markdown",
        codestring: "---\ntitle: \"Thủ Thuật Sử Dụng Sublime Text 2\"\nslug: \"thu-thuat-su-dung-sublime-text-2\"\ndate: \"2013-08-25\"\ntags: [\"tools\"]\n---"
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
    }, "title"), mdx("span", {
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
    }, "\"Thủ Thuật Sử Dụng Sublime Text 2\""), mdx("span", {
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
    }, "slug"), mdx("span", {
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
    }, "\"thu-thuat-su-dung-sublime-text-2\""), mdx("span", {
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
    }, "date"), mdx("span", {
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
    }, "\"2013-08-25\""), mdx("span", {
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
    }, "tags"), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ":"), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "["), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "\"tools\""), mdx("span", {
        className: "token front-matter-block font-matter yaml language-yaml punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "]"), mdx("span", {
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
    }, "---")))), mdx("p", null, "to"), mdx("codeblock", {
        className: "language-markdown",
        codestring: "export const meta = {\n  title: \"Thủ Thuật Sử Dụng Sublime Text 2\",\n  slug: \"thu-thuat-su-dung-sublime-text-2\",\n  date: \"2013-08-25\",\n  tags: [\"tools\"]\n}"
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
        className: "token plain",
        parentName: "div"
    }, "export const meta = {")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  title: \"Thủ Thuật Sử Dụng Sublime Text 2\",")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  slug: \"thu-thuat-su-dung-sublime-text-2\",")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  date: \"2013-08-25\",")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "  tags: [\"tools\"]")), mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token plain",
        parentName: "div"
    }, "}")))));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
