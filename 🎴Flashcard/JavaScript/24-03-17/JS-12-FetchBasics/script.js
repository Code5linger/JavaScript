// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('./randomText.txt')
//   .then((response) => response.text())
//   .then((data) => console.log(data));

const h1Text = document.querySelector('h1');

fetch('https://api.github.com/users/code5linger')
  .then((res) => res.json())
  .then((data) => (h1Text.innerText = data.login));
