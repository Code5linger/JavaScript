function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    });
}
function displayUser(user) {
  let element = document.querySelector('main');
  let bgSelector = document.body.style;
  let btnColor = document.querySelector('button');

  console.log(user);

  if (user.gender === 'female') {
    bgSelector.background = `#ff77ff`;
    btnColor.color = 'black';
  } else {
    bgSelector.background = `#00308F`;
    bgSelector.color = 'white';
  }

  element.innerHTML = `
        <img
          class="imageContent"
          src="${user.picture.large}"
          alt=""
          srcset=""
        />
        <div class="textContent">
          <h3>Name: ${user.name.first} ${user.name.last}</h3>
          <h3>Email: ${user.email}</h3>
          <h3>Phone: ${user.phone}</h3>
          <h3>Location: ${user.location.city}, ${user.location.counrty}</h3>
          <h3>Age: ${user.dob.age}</h3>
        </div>
    `;
}

document.querySelector('button').addEventListener('click', fetchUser);

addEventListener('DOMContentLoaded', fetchUser);

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}
