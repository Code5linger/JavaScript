// Falsy Values
// false
// 0
// '' ""
// null
// undefined
// NaN

//

// const x = NaN;

// if (x) {
//   console.log('Truthy');
// } else {
//   console.log('Falsy');
// }
// console.log(Boolean(x));

// const email = 'test@gmail.com';

// if (email) {
//   console.log('You got mail📬');
// }

// console.log(Boolean(email)); // true

// const x = function () {};

// if (x) {
//   console.log('This is truthy');
// } else {
//   console.log('This is falsy');
// }

// console.log(Boolean(x));
// This is truthy
// true

// const children = 0;

// if (!isNaN(children)) {
//   console.log(`You have ${children} childrens`);
// } else {
//   console.log(`Please enter number of children`);
// }

//Please enter number of children

// const posts = [];

// if (posts.length > 0) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }

// const user = { name: 'test' };

// console.log(Object.keys(user).length);

// if (Object.keys(user).length > 0) {
//   console.log('List of users 📃');
// } else {
//   console.log('No user to show ');
// }

//
console.log(false === 0);
console.log(' ' === 0);
console.log(null === undefined);
