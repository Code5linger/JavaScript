// Level 0 Noob
// function add(a, b) {
//   return a + b;
// }

// Level 1 Meh
// const add = function (a, b) {
//   return a + b + ' 1️⃣ ';
// };

// Level 2
// Arrow function syntax

// const add = (a, b) => {
//   return a + b + '2️⃣';
// };

// Level 3
//Implicit Return
// const add = (a, b) => a + b;

// Level 4
const double = (a = 5) => a * 2;
const add = (a = 3, b = 7) => a + b;

console.log(add());
console.log(double());
