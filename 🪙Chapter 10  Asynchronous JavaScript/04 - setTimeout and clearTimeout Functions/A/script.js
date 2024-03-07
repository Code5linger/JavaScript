// setTimeout(changeText, 2000);

// console.log('🎴');

// function changeText() {
//   document.querySelector('h1').textContent = '💥';
// }

// const timerId = setTimeout(changeText, 3000);

// document.querySelector('#cancel').addEventListener('click', () => {
//   clearTimeout(timerId);
//   console.log('⏱️');
// });

// function changeText() {
//   document.querySelector('h1').textContent = '🌀';
// }

// const timerId = setTimeout(changeText, 3000);

// document.querySelector('#cancel').addEventListener('click', () => {
//   clearTimeout(timerId), console.log('⏱️🔨');
// });

// setTimeout(changeText, 2000);

// function changeText() {
//   document.querySelector('h1').textContent = '🎴';
// }
// console.log('1️⃣');

function changeText() {
  document.querySelector('h1').textContent = '🎴';
  console.log('⏱️🔨');
}

// setTimeout(changeText, 2000);

// console.log('2️⃣');

const timetID = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timetID);
  console.log('💥');
});
