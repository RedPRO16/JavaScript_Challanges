const got = require('got');

const baseurl = 'https://api.github.com/repos/';

const fetchRepositoryInfo = (repo, callback) => {
  got(baseurl + repo)
    .then((response) => {
      callback(JSON.parse(response.body));
    });
};

module.exports = fetchRepositoryInfo;