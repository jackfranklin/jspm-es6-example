export default class Repo {
  constructor(obj) {
    this.name = obj.name;
    this.url = obj.html_url;
    this.description = obj.description;
    this.updated_at = obj.updated_at;
    this.stars = obj.stargazers_count;
  }
}

