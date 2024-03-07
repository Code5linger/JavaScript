// let startBTN = (document.querySelector('#start').innerText = '🅰️');
// let stopBTN = ();

// const timerStart = ;

function currentTime() {
  console.log(Date.now());
}

const timerStart = setInterval(currentTime, 2000);

// function timerStart() {
//   setInterval(currentTime, 1000);
//   console.log('📆');
// }

// const timerStop = clearInterval(timerStart);

function timerStop() {
  clearInterval(timerStart);
  console.log('⛔');
}

// document.querySelector('#start').addEventListener('click', timerStart);
document.querySelector('#stop').addEventListener('click', timerStop);
