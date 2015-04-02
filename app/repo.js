export default class Repo {
  constructor({
    name, html_url, description, updated_at, stargazers_count
  }) {
    this.name = name;
    this.url = html_url;
    this.description = description;
    this.updated_at = updated_at;
    this.stars = stargazers_count;
  }
}

