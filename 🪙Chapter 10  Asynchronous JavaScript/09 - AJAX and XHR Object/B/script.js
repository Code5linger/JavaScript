// const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');

// xhr.onreadystatechange = function () {
//   console.log(this.readyState);
// };

// xhr.send();

// const xhr = new XMLHttpRequest();

// console.log(xhr);

// xhr.open('GET', './movies.json');

// xhr.onreadystatechange = function () {
//   console.log(this.readyState);
// };

// xhr.send();

// const xhr = new XMLHttpRequest();

// console.log(xhr);

// xhr.open('GET', './movies.json');

// xhr.onreadystatechange = function () {
//   console.log(this.readyState);
// };

// xhr.send();
// const xhr = new XMLHttpRequest();

// console.log(xhr);

// xhr.open('GET', './movies.json');

// xhr.onreadystatechange = function () {
//   console.log(this.readyState);
// };

// xhr.send();

// xhr.open('GET', './movies.json');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/code5linger/repos');

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
