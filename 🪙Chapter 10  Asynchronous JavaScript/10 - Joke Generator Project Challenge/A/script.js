// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
// // xhr.open('GET', 'https://api.github.com/users/code5linger/repos');

// console.log(xhr);

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const feed = JSON.parse(this.responseText);

//     const h1 = document.createElement('h1');
//     h1.innerHTML = `${feed.value}`;
//     document.querySelector('#apiFeed').appendChild(h1);
//   }
// };

// document.querySelector('#btn').addEventListener('click', () => xhr.send());

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

// const xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const feed = JSON.parse(this.responseText).value;

//     const h1 = document.createElement('h1');
//     h1.innerHTML = `${feed}`;
//     document.querySelector('#apiFeed').appendChild(h1);
//   }
// };

// function displayFeed() {
//   xhr.send();
//   console.log('Button Pressed');
// }

// document.querySelector('#btn').addEventListener('click', displayFeed);

// ❌ Could not replace the "Loading..." text
// ❌ Getting Error after the 2nd Press

const jokeEL = document.getElementById('joke');
const jokeBTN = document.getElementById('btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(JSON.parse(this.responseText).value);
        jokeEL.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEL.innerHTML = 'Something Went Wrong (Not Funny)';
      }
    }
  };

  xhr.send();
};

jokeBTN.addEventListener('click', generateJoke);

document.addEventListener('DOMContentLoaded', generateJoke);
