// for (let i = 50; i >= 5; i--) {
//   console.log('Number ' + i);
// }

// for ([initialExpression]; [conditionalExpression], [incrementExpression]) {
//     statement
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('🍀7️⃣➡️');
//   } else {
//     console.log('Number ➡️ ' + i);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log('Number ➡️ ' + i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// const names = ['Brad', 'Test', 'A'];

// for (let i = 0; i <= names.length; i++) {
//   if (names[i] === 'A') {
//     console.log(`🪙`);
//   } else {
//     console.log(names[i]);
//   }
// }

// if (([initialExpression], [conditionExprssion], [incrementExpression])) {
//   statement;
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log(i + ' is a lucky number!');
//   } else {
//     console.log('Number ➡️ ' + i);
//   }
// }

// console.log(i);
// Uncaught ReferenceError: i is not defined

// Nest Loops

// for (let i = 1; i <= 5; i++) {
//   console.log('Number ➡️ ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// const alphabets = ['A', 'B', 'C', 'D', 'E'];

// for (i = 0; i <= alphabets.length; i++) {
//   if (alphabets[i] === 'D') {
//     console.log('8====' + alphabets[i]);
//   } else {
//     console.log(alphabets[i]);
//   }
// }

// 1
// if (([initialExpression], [conditionalExpression], [incrementExpression])) {
//   statement;
// }
// 2 3
// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log(`${i} is a lucky number`);
//   } else {
//     console.log(`Number ➡️ ${i}`);
//   }
// }
// 8
// for (let i = 0; i <= 5; i++) {
//   console.log(`Number ➡️ ${i}`);
//   for (let j = 0; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// 9
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < alphabets.length; i++) {
  if (alphabets[i] === 'D') {
    console.log('8===' + alphabets[i]);
  } else {
    console.log(alphabets[i]);
  }
}
