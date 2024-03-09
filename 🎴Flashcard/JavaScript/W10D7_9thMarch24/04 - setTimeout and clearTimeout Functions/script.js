// let startChange = ();

function startChange() {
  document.body.querySelector('h1').textContent = '🔥';
}

let timerID = setInterval(startChange, 3000);

// function timerStart() {
//   console.log('Timer start');
// }

function stopChange() {
  clearInterval(timerID);
  console.log('⌛🔨');
}

document.body.querySelector('#start').addEventListener('click', () => timerID);
document.body.querySelector('#stop').addEventListener('click', stopChange);
