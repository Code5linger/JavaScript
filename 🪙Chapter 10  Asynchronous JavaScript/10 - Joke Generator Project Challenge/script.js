const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
// xhr.open('GET', 'https://api.github.com/users/code5linger/repos');

console.log(xhr);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const feed = JSON.parse(this.responseText);

    const h1 = document.createElement('h1');
    h1.innerHTML = `${feed.value}`;
    document.querySelector('#apiFeed').appendChild(h1);
  }
};

xhr.send();

// const feed = JSON.parse(this.responseText);
// feed.forEach((random) => {
//   const h1 = document.createElement('h1');
//   h1.innerHTML = `${random}`;
//   document.querySelector('#apiFeed').appendChild(h1);

// const data = JSON.parse(this.responseText);
// data.forEach((repo) => {
//   const li = document.createElement('li');
//   li.innerHTML = `${repo.name}`;
//   document.querySelector('#apiFeed').appendChild(h1);
