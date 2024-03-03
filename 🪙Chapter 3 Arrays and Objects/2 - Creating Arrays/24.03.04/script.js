// const array = ['a', 'b', 'c']; // Array Literal

// const newArray = new Array('X', 'Y', 'Z'); // Array Constructor

// console.log(array);
// console.log(newArray);

const number = [12, 45, 33, 29, 39];

// console.log(number[2], typeof number[4]);

// number.push(69, 420);

// console.log(number[0] + number[3]);
// console.log(`Test ${number[4]}`);

const mixed = [
  'string',
  96,
  true,
  NaN,
  undefined,
  { firstName: 'elrick', lastName: 'Ashford' },
];

// console.log(typeof mixed[0]);
// console.log(typeof mixed[1]);
// console.log(typeof mixed[2]);
// console.log(typeof mixed[3]);
// console.log(typeof mixed[4]);
// console.log(typeof mixed[5].firstName);
// console.log(typeof mixed[5].lastName);
// console.log(typeof mixed[5]);

// console.log(mixed.length);
// console.log(mixed);
// mixed[1] = 69;
// console.log(mixed[1]);
// console.log(mixed);
// mixed.length = 20;
console.log(mixed);

mixed[mixed.length - 1] = 'Test';

console.log(mixed);
