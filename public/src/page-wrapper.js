import { h, Fragment } from "/web_modules/preact.js";
import { Helmet } from "/web_modules/react-helmet.js";
import { MDXProvider } from "/web_modules/@mdx-js/preact.js";
const components = {
    codeblock: (props)=>h("div", Object.assign({
            class: "bg-gray-400"
        }, props))
};
export default function PageWrapper(props) {
    return h(MDXProvider, {
        components: components
    }, h(Fragment, null, h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), h("header", {
        role: "banner"
    }, h("nav", {
        role: "navigation",
        class: "max-w-2xl mx-auto px-5"
    }, h("a", {
        href: "/"
    }, "Home"), h("a", {
        href: "/garden"
    }, "Garden"), h("a", {
        href: "/project"
    }, "Project"), h("a", {
        href: "/about"
    }, "About"))), h("main", {
        role: "main"
    }, props.children)));
};
