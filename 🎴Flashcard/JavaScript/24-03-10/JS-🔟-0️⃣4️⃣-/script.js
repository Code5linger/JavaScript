// console.log('🅰️');

// setTimeout(function () {
//   console.log('Hello from Callback');
// }, 0);

// console.log('💤');

function textReplacer() {
  document.querySelector('h1').innerHTML = '🔥';
}

const timer = setTimeout(textReplacer, 2000);

function printInConsole() {
  console.log('🔥');
}

document
  .querySelector('#cancelTextReplacement')
  .addEventListener('click', () => {
    clearTimeout(timer);
    printInConsole();
  });

// 6 ???
