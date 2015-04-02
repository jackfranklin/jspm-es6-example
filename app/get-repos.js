export default function(username) {
  const URL = `https://api.github.com/users/${username}/repos`;

  return fetch(URL).then(response => response.json())
}
