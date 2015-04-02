import 'fetch';

import getRepos from './get-repos';

getRepos('jackfranklin').then(function(repos) {
  console.log(repos);
});
