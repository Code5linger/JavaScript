// let randomColorA = Math.floor(Math.random() * 16777215).toString(16);
// let randomColorB = Math.floor(Math.random() * 16777215).toString(16);
// let change = document.querySelector('body');

// let intervalID = setInterval(randomGradient, 1000);

// function randomGradient() {
//   return `linear-gradient(to left, #${randomColorA}, #${randomColorB})`;
// }

// change.style.background = randomGradient();

// let testA = setInterval(bgChangeStart, 1000);

function randomColorA() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function randomColorB() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function randomGradient() {
  return `linear-gradient(to left, #${randomColorA()}, #${randomColorB()})`;
}

let timerC = setInterval(cTB, 1000);

function cTB() {
  return randomGradient();
}

let timerD = setInterval(changer, 1000);
function changer() {
  let change = document.querySelector('body');
  change.style.background = cTB();
}
