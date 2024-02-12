// SCOPE
// window.alert('Hello');
// console.log(window.innerWidth, window.innerHeight);

let x = 100;

console.log(x, ' in Global');

function run() {
  let x = 69;
  console.log(window.innerHeight);
  console.log(x, ' in Function');
}

console.log(x, ' in Global❗');

run();
console.log(x, ' in Global');

if (true) {
  let y = 420;
  console.log(x, ' in block');
  console.log(y);
}

console.log(y);
