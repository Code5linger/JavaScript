// function currentTime() {
//   console.log(Date.now());
// }

// // setInterval(currentTime, 2000);

// document
//   .querySelector('#start')
//   .addEventListener(
//     'click',
//     () => (startTimer = setInterval(currentTime, 1000))
//   );

// document.querySelector('#stop').addEventListener('click', () => {
//   clearInterval(startTimer);
//   console.log('🔥');
// });

// const timerStart = setInterval(currentTime, 2000);

// function currentTime() {
//   console.log(Date.now());
// }

// function timerStop() {
//   clearInterval(timerStop);
// }

// document.querySelector('#stop').addEventListener('click', timerStart);

// function colorChange() {
//   if (document.querySelector('body').style.background !== 'black') {
//     document.querySelector('body').style.background = 'black';
//     document.querySelector('body').style.color = 'white';
//   } else {
//     document.querySelector('body').style.background = `#${randomColor}`;
//     document.querySelector('body').style.color = 'black';
//   }
// }

// let intervalID = setInterval(colorChange, 1000);

// function timerStop() {
//   clearInterval(intervalID);
// }
// // function timerStart() {
// //   setInterval(colorChange, 1000);
// // }
// // setInterval(colorChange, 2000);

// document.querySelector('#stop').addEventListener('click', timerStop);

let intervalID;

function bgChangeStart() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function changeRandomColor() {
  let randomColorA = Math.floor(Math.random() * 16777215).toString(16);
  let randomColorB = Math.floor(Math.random() * 16777215).toString(16);
  let randomColorC = Math.floor(Math.random() * 16777215).toString(16);
  let randomColorD = Math.floor(Math.random() * 16777215).toString(16);
  let randomColorE = Math.floor(Math.random() * 16777215).toString(16);
  let randomColorF = Math.floor(Math.random() * 16777215).toString(16);

  document.querySelector(
    'body'
  ).style.background = `linear-gradient(to left, #${randomColorA}, #${randomColorB} ) `;

  document.querySelector(
    '#start'
  ).style.background = `linear-gradient(to left, #${randomColorC}, #${randomColorD} ) `;

  document.querySelector(
    '#stop'
  ).style.background = `linear-gradient(to left, #${randomColorE}, #${randomColorF} ) `;
}

function bgChangeStop() {
  clearInterval(intervalID);
}

document.querySelector('#start').addEventListener('click', bgChangeStart);
document.querySelector('#stop').addEventListener('click', bgChangeStop);
