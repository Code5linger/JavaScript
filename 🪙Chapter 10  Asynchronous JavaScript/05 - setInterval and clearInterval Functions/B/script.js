// let startBTN = (document.querySelector('#start').innerText = '🅰️');
// let stopBTN = ();

// ⬇️⬇️

// const timerStart = ;

// function currentTime() {
//   console.log(Date.now());
// }

// const timerStart = setInterval(currentTime, 2000);

// function timerStart() {
//   setInterval(currentTime, 1000);
//   console.log('📆');
// }

// const timerStop = clearInterval(timerStart);

// function timerStop() {
//   clearInterval(timerStart);
//   console.log('⛔');
// }

// document.querySelector('#start').addEventListener('click', timerStart);
// document.querySelector('#stop').addEventListener('click', timerStop);

// ⬆️⬆️ My Code

// const intervalID = setInterval(myCallback, 2000, '📆');

// function myCallback(para) {
//   console.log(para, Date.now(), para);
// }

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeColor, 1000);
//   }
// }

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
//   console.log('⛔');
// }

// document.querySelector('#start').addEventListener('click', startChange);
// document.querySelector('#stop').addEventListener('click', stopChange);

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(changeColor, 1000);
//   }
// }

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

// document.querySelector('#start').addEventListener('click', startChange);
// document.querySelector('#stop').addEventListener('click', stopChange);

// let intervalID;

// function startChange() {
//   if (!intervalID) {
//     intervalID = setInterval(currentTime, 1000);
//   }
// }

// function currentTime() {
//   console.log(Date.now());
// }

// function timerStop() {
//   clearInterval(intervalID);
// }

// document.querySelector('#start').addEventListener('click', startChange);
// document.querySelector('#stop').addEventListener('click', timerStop);

// let intervalID;

// function bgChangeStart() {
//   if (!intervalID) {
//     intervalID = setInterval(changeRandomColor, 1000);
//   }
// }

// let bgA = Math.floor(Math.random() * 16777215).toString(16);
// console.log(bgA);
// let bgB = Math.floor(Math.random() * 16777215).toString(16);
// console.log(bgB);

// function bgColors() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }
// let randomColor = Math.floor(Math.random() * 16777215).toString(16);
// function changeRandomColor() {
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = `#${randomColor}`;
//   //   document.body.style.innerHTML = `backgroundColor: linear-gradient(90deg, #${randomColor}, green)`;
//   //   document.body.style.innerHTML = `background: linear-gradient(90deg, #${randomColor}, green)`;
// }

// function bgChangeStop() {
//   clearInterval(intervalID);
// }

// document.querySelector('#start').addEventListener('click', bgChangeStart);
// document.querySelector('#stop').addEventListener('click', bgChangeStop);

// var change = document.querySelector('body');

// let getRandomColorA = Math.floor(Math.random() * 16777215).toString(16);
// let getRandomColorB = Math.floor(Math.random() * 16777215).toString(16);

// function getRandomGradient() {
//   return (
//     'linear-gradient(' +
//     Math.random() * 360 +
//     'deg, ' +
//     `#${getRandomColorA}` +
//     ', ' +
//     `#${getRandomColorB}`
//   );
// }

// console.log(getRandomGradient());

// function changeColor() {
//   change.style.background = getRandomGradient();
// }

// changeColor();
// setInterval(changeColor, 1000);
