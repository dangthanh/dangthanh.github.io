import { h, Fragment } from "/web_modules/preact.js";
export default ((props)=>h(Fragment, null, h("div", {
        class: "max-w-2xl mx-auto px-5"
    }, h("article", {
        class: "mb-8"
    }, h("div", {
        class: "text-3xl mb-3"
    }, "Hello, I'm", h("strong", {
        class: "font-semibold"
    }, "Dang Van Thanh"), "."), h("div", {
        class: "text-2xl"
    }, "I'm write code with JavaScript and love cycling. Currently, I'm", h("strong", {
        class: "font-semibold"
    }, "UI Developer"), " at", h("a", {
        href: "https://poetadigital.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Poeta Digital"), "."))))
);
