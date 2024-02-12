// SCOPE
// window.alert('Hello');
// console.log(window.innerWidth, window.innerHeight);

// let x = 100;

// console.log(x, ' in Global');

// function run() {
//   let x = 69;
//   console.log(window.innerHeight);
//   console.log(x, ' in Function');
// }

// console.log(x, ' in Global❗');

// run();
// console.log(x, ' in Global');

// if (true) {
//   let y = 420;
//   console.log(x, ' in block');
//   console.log(y);
// }

// console.log(y);

let x = 100;
console.log(x + ' in Global');
// 100 in Global;

function run() {
  console.log(x + ' in Function');
}

run();
// 100 in Function

if (true) {
  console.log(x + ' in Conditional Block');
}
// 100 in Conditional Block

function add() {
  let x = 1;
  let y = 420;
  console.log(x + y + ' in Function');
}

add();
// 421 in Function;
