import { h, Fragment, Component } from "/web_modules/preact.js";
const Repository = ({ repository  })=>h(Fragment, null, h("div", {
        class: "flex-1"
    }, h("a", {
        href: repository.repoUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "font-semibold"
    }, repository.name), h("span", {
        class: "text-sm"
    }, "in", h("span", null, repository.language)), h("p", {
        class: "text-gray-600 text-sm mb-0"
    }, repository.description)), h("div", {
        class: "w-32 text-gray-600 text-sm text-right"
    }, repository.stars))
;
export default class Project extends Component {
    async componentDidMount() {
        const STARGAZERS_COUNT = 20;
        const [user, org] = await Promise.all([
            fetch("https://api.github.com/users/dangvanthanh/repos?per_page=100"),
            fetch("https://api.github.com/repos/dracula/hyper"), 
        ]);
        const [userJson, orgJson] = await Promise.all([
            user.json(),
            org.json()
        ]);
        let data = [];
        data.push(orgJson);
        data = [
            ...data,
            ...userJson
        ];
        const repos = data.filter((d)=>d.stargazers_count >= STARGAZERS_COUNT
        ).sort((a, b)=>a.stargazers_count < b.stargazers_count ? 1 : -1
        ).map((d)=>({
                name: d.name,
                stars: d.stargazers_count,
                language: d.language,
                repoUrl: d.html_url,
                description: d.description
            })
        );
        this.setState({
            repos
        });
    }
    render({}, { repos  }) {
        return h(Fragment, null, h("div", {
            class: "max-w-2xl mx-auto px-5"
        }, h("article", null, h("h2", {
            class: "font-normal text-lg pb-3 uppercase"
        }, "I", h("span", {
            class: "text-red-600"
        }, "❤"), " Open Source"), h("div", {
            class: "border border-gray-300 border-solid rounded shadow"
        }, Array.from(new Set(repos)).map((repository)=>h(Repository, {
                repository: repository
            })
        )))));
    }
};
