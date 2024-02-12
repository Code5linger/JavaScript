// function first() {
//   const x = 100;

//   function second() {
//     const y = 200;
//     console.log(x + y);
//   }

//   second();
// }

// first();
// 300

if (true) {
  const x = 100;

  if (true) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y);
}
// 300
// Uncaught ReferenceError: y is not defined
