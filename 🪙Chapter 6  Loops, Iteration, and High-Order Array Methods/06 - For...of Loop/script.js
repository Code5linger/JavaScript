// const alphabet = ['A', 'B', 'C', 'D', 'E'];

// // for (let i = 0; i < alphabet.length; i++) {
// //   console.log(alphabet[i]);
// // }

// for (const items of alphabet) {
//   console.log(items);
// }

// const user = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

// for (const items of user) {
//   console.log(items.name);
// }

// Loop over strings
// const str = 'Hello World';

// for (const letter of str) {
//   console.log(letter);
// }

// Loop over maps

const map = new Map();

map.set('name', 'Ashford');
map.set('age', 29);
map.set('edu', true);

for (const [key, value] of map) {
  console.log(key, value);
}
