// function fetchData() {
//   fetch('https://randomuser.me/api/')
//     .then((response) => response.json())
//     .then((data) => fetchUser(data.results[0]));
// }

// function fetchUser(user) {
//   let content = document.querySelector('.apiFeed');
//   let bg = document.body.style;

//   if (user.gender === 'female') {
//     bg.background = 'hotpink';
//   } else {
//     bg.background = 'royalblue';
//     bg.color = 'white';
//   }

//   content.innerHTML = `
//         <img src="${user.picture.large}" alt="./Dtafalonso-Yosemite-Flat-Game-Center.ico" />
//         <div class="content">
//           <h2>Name: ${user.name.first} ${user.name.last}</h2>
//           <h2>Email: ${user.email}</h2>
//           <h2>Phone: ${user.phone}</h2>
//           <h2>Location: ${user.location.city}, ${user.location.country}</h2>
//           <h2>Age: ${user.dob.age}</h2>
//     `;
// }

// addEventListener('DOMContentLoaded', fetchData());
// document.querySelector('#btn').addEventListener('click', fetchData);

// Spinner Animation 1

function fetchData() {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      hideSpinner();
      fetchUser(data.results[0]);
    });
}

function fetchUser(user) {
  let content = document.querySelector('.apiFeed');
  let bg = document.body.style;

  if (user.gender === 'female') {
    bg.background = 'hotpink';
  } else {
    bg.background = 'royalblue';
    bg.color = 'white';
  }

  content.innerHTML = `
        <img src="${user.picture.large}" alt="./Dtafalonso-Yosemite-Flat-Game-Center.ico" />
        <div class="content">
          <h2>Name: ${user.name.first} ${user.name.last}</h2>
          <h2>Email: ${user.email}</h2>
          <h2>Phone: ${user.phone}</h2>
          <h2>Location: ${user.location.city}, ${user.location.country}</h2>
          <h2>Age: ${user.dob.age}</h2>
    `;
}

addEventListener('DOMContentLoaded', fetchData());
document.querySelector('#btn').addEventListener('click', fetchData);

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}
