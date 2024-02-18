// let numOfFizzBuzz = 0,
//   numOfFizz = 0,
//   numOfBuzz = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('FizzBuzz');
//     numOfFizzBuzz++;
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//     numOfFizz++;
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//     numOfBuzz++;
//   } else {
//     console.log(i);
//   }
// }

// console.log(
//   `Number of FizzBuzz is ${numOfFizzBuzz}, Number of Fizz is ${numOfFizz}, Number of Buzz is ${numOfBuzz}`
// );

let i = 1;

while (i <= 100) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  i++;
}
