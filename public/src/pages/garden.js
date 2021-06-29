import { h, Fragment } from "/web_modules/preact.js";
import dayjs from "dayjs";
export default ((props)=>{
    return h(Fragment, null, Array.from(new Set(props.posts)).map((post)=>h("article", null, h("div", null, dayjs(post.date).format("MMMM DD, YYYY")), h("a", {
            href: post.slug
        }, post.title))
    ));
});
