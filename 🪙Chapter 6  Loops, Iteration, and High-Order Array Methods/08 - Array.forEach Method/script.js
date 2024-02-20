// const array = ['a', 'b', 'c'];

// array.forEach((element) => console.log(element));

// // console.log(array.__proto__);

const alphabets = ['a', 'b', 'c', 'd', 'e'];

// console.log(alphabets.__proto__);

// alphabets.forEach(function (word) {
//   console.log(word);
// });

// alphabets.forEach((word, index, arr) => {
//   console.log(`${index} - ${word}`, arr);
// });

// 0 - a (5) ['a', 'b', 'c', 'd', 'e']

// function logAlphabets(word) {
//   console.log(word);
// }

// logAlphabets(alphabets);

// alphabets.forEach(logAlphabets);

const socialObj = [
  { name: 'A', url: '#A' },
  { name: 'B', url: '#B' },
  { name: 'C', url: '#C' },
  { name: 'D', url: '#D' },
  { name: 'E', url: '#E' },
];

socialObj.forEach((item) => console.log(item.url));
