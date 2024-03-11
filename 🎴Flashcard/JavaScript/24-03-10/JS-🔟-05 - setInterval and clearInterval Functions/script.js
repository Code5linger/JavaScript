// function currentTime() {
//   console.log(Date.now());
// }

// setInterval(currentTime, 5000);

document.querySelector('body').style.background = 'black';

let interval;

function colorChanger() {
  if (document.querySelector('body').style.background !== 'black') {
    document.querySelector('body').style.background = 'black';
    document.querySelector('body').style.color = 'white';
  } else {
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.color = 'black';
  }
}

setInterval(colorChanger, 1000);
