/** @jsx mdx */
import { mdx } from '/web_modules/@mdx-js/preact.js';
/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
export const meta = {
    title: "English and Math",
    slug: "/english-and-math",
    date: "2020-05-07",
    tags: [
        "personal"
    ]
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "I learn programming via English."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
