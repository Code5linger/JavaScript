function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())

    .then((data) => {
      hideSpinner();
      userGenerator(data.results[0]);
    });
}

function userGenerator(user) {
  const userDisplay = document.querySelector('.container');
  const bodySelector = document.body.style;

  console.log(user.gender);
  if (user.gender === 'female') {
    bodySelector.background = 'pink';
    bodySelector.color = 'black';
  } else {
    bodySelector.background = 'royalblue';
  }
  console.log(user);
  userDisplay.innerHTML = `
        <h1>Name : ${user.name.first} ${user.name.last}</h1>
        <p>Email : ${user.email}</p>
        <p>Phone : ${user.phone}</p>
        <p>Location : ${user.location.city}, ${user.location.country}</p>
        <p>Age : ${user.dob.age}</p>
        <img src="${user.picture.large}" alt="" srcset="" />
    `;
}

document.querySelector('#newUser').addEventListener('click', fetchUser);
document.addEventListener('DOMContentLoaded', fetchUser);

// fetchUser();

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}
