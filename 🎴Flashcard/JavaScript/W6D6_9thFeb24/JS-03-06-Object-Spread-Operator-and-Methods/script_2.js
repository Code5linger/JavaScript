const todo = Object();

todo.name = 'Code';
todo.id = 69;

console.log(todo, typeof todo);

// 02
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };

const objX = { ...objA, ...objB };

console.log(objX);

const objY = Object.assign({}, objA, objB);

console.log(objY);

// 04
console.log(Object.keys(objX));
console.log(Object.values(objY));
console.log(Object.entries(objX));

console.log(Object.entries(objX).length);

console.log(objX.hasOwnProperty('a'));
