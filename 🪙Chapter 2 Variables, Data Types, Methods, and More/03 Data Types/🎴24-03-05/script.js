let obj = {
  a: 'a',
  b: 'b',
};
//
console.groupCollapsed('🪬');
//
console.log('string', 69, true, undefined, null, obj);

// Primmitive
// String
const firstName = 'Elrick';
console.log(firstName, typeof firstName);
// Number
const number = 69;
console.log(number, typeof number);
// Boolean
const bool = true;
console.log(bool, typeof bool);
// Null
const empty = null;
console.log(empty, typeof empty);
// Undefined
let notEmpty;
console.log(notEmpty, typeof notEmpty);
// Symbol
const id = Symbol('test');
console.log(id, typeof id);
// Bigint
const bInt = 90000000n;

console.log(bInt, typeof bInt);

// Non-primitive
// Object Literals
const alphabets = {
  a: 'a',
};
console.log(alphabets, typeof alphabets);
// Arrays
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);
// Functions
function test() {
  return 69;
}

console.log(test(), typeof test);
console.groupEnd();

let dataType = '100';
console.log(dataType, typeof dataType);
console.log(Number(dataType));
console.log(parseInt(dataType));
console.log((dataType = +dataType));

let numToString = 100;
console.log(numToString, typeof numToString);
console.log(numToString.toString());
console.log((numToString = numToString.toString()));

let stringToDecimal = '99.5';

let result = parseFloat(stringToDecimal);
console.log(result, typeof result);

let int = 1;
console.log(Boolean(int));

let amm = 'sup';
console.log(purseInt(amm));
