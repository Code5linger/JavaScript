// const x = 100;
// const foo = 1;
// var bar = 2;

// if (true) {
//   const y = 200;
//   //   console.log(x + y);
// }

// // console.log(x + y);

// for (var i = 0; i <= 10; i++) {
//   //   console.log(i);
// }

// // console.log(i);

// //
// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// function run() {
//   var d = 100;
//   console.log(d);
// }
// // console.log(d);
// run();
// const x = 100;

// if (true) {
//   const y = 200;
//   console.log(x + y);
// }

// console.log(x + y);

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i);
//Uncaught ReferenceError: i is not defined

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// console.log(a);
// Uncaught ReferenceError: a is not defined
// console.log(b);
// Uncaught ReferenceError: b is not defined
console.log(c);
// 700

function run() {
  var d = 69;
  console.log(d);
}

run();
// console.log(d);

var aAa = 420;
console.log(window);
