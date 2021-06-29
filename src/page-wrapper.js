import { h, Fragment } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => <div class="bg-gray-400" {...props} />,
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {props.title ? props.title : "Digital garden about web development"}
          </title>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <header role="banner">
          <nav role="navigation" class="max-w-2xl mx-auto px-5">
            <a href="/">Home</a>
            <a href="/garden">Garden</a>
            <a href="/project">Project</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main role="main">
          <div class="max-w-2xl mx-auto px-5">{props.children}</div>
        </main>
      </Fragment>
    </MDXProvider>
  );
}
