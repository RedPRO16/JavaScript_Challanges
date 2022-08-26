const GithubApi = require("./githubApi");

class Github {
  constructor(api) {
    this.api = api
  }

  fetch(repo) {
    this.repo = repo;
    // this.api.fetchRepositoryInfo(this.repo, console.log);
    this.api.fetchRepositoryInfo(this.repo, (response) => { this.result = (response) });
  }

  getRepoData() {
    return this.result
  };
};

module.exports = Github;

// type in node to use
const github = new Github(new GithubApi)
github.fetch('sinatra/sinatra')
setTimeout(() => { console.log(github.getRepoData()) }, 1000)