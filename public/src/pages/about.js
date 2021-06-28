import { h, Fragment } from "/web_modules/preact.js";
export default ((props)=>h(Fragment, null, h("p", {
        class: "max-w-3xl mx-auto px-5"
    }, h("img", {
        src: "/images/personal/dangthanh.jpg",
        alt: true,
        class: "w-full rounded"
    })), h("p", {
        class: "max-w-2xl mx-auto px-5"
    }, "Hi, I'm", h("strong", {
        class: "font-semibold"
    }, "Dang Van Thanh"), " who living and working at", h("a", {
        href: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Sai Gon, Viet Nam"), "."), h("p", {
        class: "max-w-2xl mx-auto px-5"
    }, "In 2012, I worked as a Front-end Developer for", h("a", {
        href: "https://evolable.asia/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Asia Evolable"), ", an offshore services company. Since 2014, I joined", h("a", {
        href: "https://poetadigital.com/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Poeta Digital"), "as UI Developer for the education system of", h("a", {
        href: "https://www1.linkit.com/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "LinkIt"), "project."), h("p", {
        class: "max-w-2xl mx-auto px-5"
    }, "I'm worked in front-end development and focused on JavaScript (specially", h("a", {
        href: "https://vuejs.org/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Vue.js"), "and", h("a", {
        href: "https://d3js.org/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "D3.js"), "). I'm also interested in functional programming (", h("a", {
        href: "https://elm-lang.org/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Elm"), "and", h("a", {
        href: "https://elixir-lang.org/",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Elixir"), "), too. Besides, I'm always shared the knowledge which I practiced and learned via", h("a", {
        href: "https://dangthanh.org",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "my blog"), "and", h("a", {
        href: "https://github.com/dangvanthanh",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "github"), "."), h("p", {
        class: "max-w-2xl mx-auto px-5"
    }, "Apart from code, I love cycling. Everyday, I'm riding a bike around the city for exercise in morning or go to work."), h("div", {
        class: "max-w-2xl mx-auto px-5"
    }, h("p", null, "You can find me online via:", h("a", {
        href: "https://www.twitter.com/dangvanthanh",
        class: "flex flex-wrap items-center mb-3",
        target: "_blank",
        rel: "noopener noreferrer"
    }, h("span", {
        class: "text-gray-700"
    }, "twitter")), h("a", {
        href: "https://www.github.com/dangvanthanh",
        class: "flex flex-wrap items-center",
        target: "_blank",
        rel: "noopener noreferrer"
    }, h("span", {
        class: "text-gray-700"
    }, "github")))))
);
