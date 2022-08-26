const Github = require('./github')

describe('Github class', () => {
  it('gets the repo data', () => {
    const fakeApi = {
      fetchRepositoryInfo: (repo, callback) => {
        const responseObject = {
          name: 'sinatra/sinatra',
          description: 'Fake news!'
        };
        callback(responseObject)
      }
    }

    const github = new Github(fakeApi)
    github.fetch('sinatra/sinatra')
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Fake news!'
    })
  });
});

