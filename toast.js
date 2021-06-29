import * as FetchMdxPosts from "./fetch-mdx-posts.js";

export const sourceData = async ({ setDataForSlug }) => {
  const mdxPosts = await FetchMdxPosts.sourceData({ setDataForSlug });
  const allPostsData = mdxPosts
    .map(({ title, slug, date, tags }) => ({
      title,
      slug,
      date,
      tags,
      contentType: "post",
    }))
    .sort((b, a) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      if (da < db) return -1;
      if (da === db) return 0;
      if (da > db) return 1;
    });

  await setDataForSlug("/garden", { data: { posts: allPostsData } });
  return;
};
