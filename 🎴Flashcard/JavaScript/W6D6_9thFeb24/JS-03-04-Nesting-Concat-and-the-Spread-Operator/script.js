// const fruits = ['apple', 'grape', 'banana'];
// const berries = [
//   'strawberry',
//   'blueberry',
//   'rasberry',
//   [1, 2, 3, 4, [7, 8, 9, 0], 5, 6],
// ];

// // console.log(fruits.push(berries));
// // console.log(fruits);
// // console.log(fruits[3][1]);

// // const allFruits = [fruits, berries];
// // console.log(allFruits[1][0]);

// // console.log(fruits.concat(berries));

// // console.log(...fruits, ...berries);

// // const f = [...fruits, ...berries];
// // console.log(f);

// // console.log(berries.flat());

// // console.log(Array.isArray(fruits));

// const a = 1;
// const b = 2;
// const c = 3;

// console.log(Array.of(a, b, c));

// console.log(Array.from('CodeSlinger'));

const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);

console.log(arr.reverse());

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [5, 6, 7, 8, 9, 10];

// arr2.pop();
// console.log(arr2.concat(arr3));

console.log(arr2.slice(0, 4).concat(arr3));
