import 'fetch';

import { reposForUser } from './api';
import Repo from './repo';
import Handlebars from 'handlebars';

import $ from 'jquery';

import template from './repo.hbs!text';

reposForUser('jackfranklin').then(function(repos) {
  var content = repos
    .map(repo => new Repo(repo))
    .map(Handlebars.compile(template))
    .join('');

  $('body').append(`<ul>${content}</ul>`);
});
