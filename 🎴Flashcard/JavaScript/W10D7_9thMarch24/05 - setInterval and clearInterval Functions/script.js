// setInterval(function () {
//   console.log('.');
// }, 1000);

// setInterval(function () {
//   console.log('Hello From Callback ');
// }, 5000);

//
//  🛣️🅰️ //
//

// const timer = setInterval(currentTime, 1000, '📆');

// function currentTime(para) {
//   console.log(para, Date.now(), para);
// }

// function stopInterval() {
//   clearInterval(timer);
// }

// document.body.querySelector('#start').addEventListener('click', () => timer);

// document.body.querySelector('#stop').addEventListener('click', stopInterval);

//
//  🛣️🅱️ //
//

// let intervalID;

// function startChange(para) {
//   if (!intervalID) {
//     intervalID = setInterval(currentTime, 1000, '📆');
//   }
// }

// function currentTime(para) {
//   console.log(para, Date.now(), para);
// }

// function timerStop() {
//   clearInterval(intervalID);
//   console.log('Test');
// }

// document.querySelector('#start').addEventListener('click', startChange);
// document.querySelector('#stop').addEventListener('click', timerStop);

// document.body.style.background = 'black';

// function colorChanger() {
//   if (document.body.style.background !== 'black') {
//     document.body.style.background = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.background = `#${randomColor}`;
//     document.body.style.color = 'black';
//   }
// }

// let intervalID;

// function timerStart() {
//   if (!intervalID) {
//     intervalID = setInterval(colorChanger, 1000);
//   }
// }

// function colorChanger() {
//   let randomColorA = Math.floor(Math.random() * 16777215).toString(16);
//   let randomColorB = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.background = `linear-gradient(to left, #${randomColorA}, #${randomColorB})`;
// }

// function timerStop() {
//   clearInterval(intervalID);
// }

// timerStart();

// document.body.querySelector('#start').addEventListener('click', timerStart);
// document.body.querySelector('#stop').addEventListener('click', timerStop);
