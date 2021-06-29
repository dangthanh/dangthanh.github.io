/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "2021",
    slug: "/2021",
    date: "2021-06-28",
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
    }, "MD to MDX"));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
