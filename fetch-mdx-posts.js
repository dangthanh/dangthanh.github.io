import { fetchMdxFromDisk, processMdx } from "@toastdotdev/mdx";
import mdx from "@mdx-js/mdx";
import rehypePrism from "@toastdotdev/mdx/rehype-prism-mdx.js";
import rehypeSlug from "rehype-slug";

export const sourceData = async ({ setDataForSlug }) => {
  const files = await fetchMdxFromDisk({ directory: "./content/" });

  return await Promise.all(
    files.map(async ({ filename, file }) => {
      let compiledMDX;

      const { data } = await processMdx(file, {
        filepath: filename,
      });

      try {
        compiledMDX = await mdx(file, {
          rehypePlugins: [rehypePrism, rehypeSlug],
        });
      } catch (e) {
        console.error(e);
        throw e;
      }

      const mdxExports = data.exports.meta;

      await setDataForSlug(`${data.exports.meta.slug}`, {
        component: {
          mode: "source",
          value: `/** @jsx mdx */
            import {mdx} from '@mdx-js/preact';
            ${compiledMDX}`,
        },
        data: { ...mdxExports },
      });

      return {
        ...mdxExports,
      };
    })
  );
};
