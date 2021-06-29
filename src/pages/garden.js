import { h, Fragment } from "preact";
import dayjs from "dayjs";

export default (props) => {
  return (
    <Fragment>
      {Array.from(new Set(props.posts)).map((post) => (
        <article>
          <div>{dayjs(post.date).format("MMMM DD, YYYY")}</div>
          <a href={post.slug}>{post.title}</a>
        </article>
      ))}
    </Fragment>
  );
};
