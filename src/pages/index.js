import { h, Fragment } from "preact";

export default (props) => (
  <Fragment>
    <div class="max-w-2xl mx-auto px-5">
      <article class="mb-8">
        <div class="text-3xl mb-3">
          Hello, I'm
          <strong class="font-semibold">Dang Van Thanh</strong>.
        </div>
        <div class="text-2xl">
          I'm write code with JavaScript and love cycling. Currently, I'm
          <strong class="font-semibold">UI Developer</strong> at
          <a
            href="https://poetadigital.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poeta Digital
          </a>
          .
        </div>
      </article>
    </div>
  </Fragment>
);
