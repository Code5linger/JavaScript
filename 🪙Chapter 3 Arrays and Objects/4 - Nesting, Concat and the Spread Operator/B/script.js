// const arrayA = ['apple', 'grape', 'banana'];
// const arrayC = ['strawberry', 'blueberry', 'rasberry'];
// const arrayB = [
//   'strawberry',
//   ['strawberry', 'blueberry', 'rasberry'],
//   'rasberry',
// ];

// console.log(arrayA.concat(arrayB));

// arrayA.push(arrayB);
// console.log(arrayA);

// console.log(arrayA[3][2]);

// const fruits = [arrayA, arrayB];

// console.log(fruits[1][1]);

// console.log(...arrayA, ...arrayB);
// console.log(arrayB);
// console.log(arrayB.flat());

// console.log(Array.isArray(arrayC));

// console.log(Array.from('Elrick'));

// let varA = 'A';
// let varB = 'B';
// let varC = 'C';

// array = [varA, varB, varC];
// console.log(array);

// const array = [1, 2, 3, 4, 5];
// array.push(6);
// array.unshift(0);
// console.log(array);
// console.log(array.reverse());

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [5, 6, 7, 8, 9, 10];

arrayB.shift();
console.log(...arrayA, ...arrayB);
