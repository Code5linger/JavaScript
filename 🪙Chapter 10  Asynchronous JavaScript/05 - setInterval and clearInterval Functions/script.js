// const intervalID = setInterval(myCallback, 3000, '🎴');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// function backgroundColorChange() {
//   document.body.style.backgroundColor = 'black';
// }

// document
//   .querySelector('#start')
//   .addEventListener('click', () => backgroundColorChange());

// document
//   .querySelector('#end')
//   .addEventListener('click', () => console.log('end'));

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('start').addEventListener('click', startChange);

// document
//   .getElementById('start')
//   .addEventListener('click', () => console.log('💥'));

// let gradA = (document.querySelector(
//   'body'
// ).style.backgroundColor = `linear-gradient(to right, #${randomColor}, #${randomColor})`);

// console.log(gradA);

// document.getElementById('test').style.color =
//   document.body.style.backgroundColor = `linear-gradient(to right, #${randomColor}, #${randomColor})`;

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   document.body.style.backgroundColor = `#${randomColor}`;
  //   document.body.style.backgroundColor = `linear-gradient(to right, #b91d73, #f953c6);`;
  //   document.body.style.backgroundColor = `linear-gradient(to right, #${randomColor}, #${randomColor})`;
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
