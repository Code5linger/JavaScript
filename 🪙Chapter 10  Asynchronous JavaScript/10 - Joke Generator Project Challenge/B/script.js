const jokeEL = document.getElementById('jokeEl');
const jokeBTN = document.getElementById('jokeBTN');

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status) {
        jokeEL.innerHTML = `${JSON.parse(this.responseText).value}`;
      }
    }
  };
  xhr.send();
}

jokeBTN.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
