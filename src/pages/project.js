import { h, Fragment, Component } from "preact";

const Repository = ({ repository }) => (
  <Fragment>
    <div class="flex-1">
      <a
        href={repository.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold"
      >
        {repository.name}
      </a>
      <span class="text-sm">
        in
        <span>{repository.language}</span>
      </span>
      <p class="text-gray-600 text-sm mb-0">{repository.description}</p>
    </div>
    <div class="w-32 text-gray-600 text-sm text-right">{repository.stars}</div>
  </Fragment>
);

export default class Project extends Component {
  async componentDidMount() {
    const STARGAZERS_COUNT = 20;
    const [user, org] = await Promise.all([
      fetch("https://api.github.com/users/dangvanthanh/repos?per_page=100"),
      fetch("https://api.github.com/repos/dracula/hyper"),
    ]);

    const [userJson, orgJson] = await Promise.all([user.json(), org.json()]);

    let data = [];
    data.push(orgJson);
    data = [...data, ...userJson];

    const repos = data
      .filter((d) => d.stargazers_count >= STARGAZERS_COUNT)
      .sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1))
      .map((d) => ({
        name: d.name,
        stars: d.stargazers_count,
        language: d.language,
        repoUrl: d.html_url,
        description: d.description,
      }));

    this.setState({ repos });
  }

  render({}, { repos }) {
    return (
      <Fragment>
        <article>
          <h2 class="font-normal text-lg pb-3 uppercase">
            I<span class="text-red-600">&#10084;</span> Open Source
          </h2>
          <div class="border border-gray-300 border-solid rounded shadow">
            {Array.from(new Set(repos)).map((repository) => (
              <Repository repository={repository} />
            ))}
          </div>
        </article>
      </Fragment>
    );
  }
}
