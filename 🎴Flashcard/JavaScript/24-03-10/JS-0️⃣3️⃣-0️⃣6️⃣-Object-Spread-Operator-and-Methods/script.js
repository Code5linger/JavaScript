// // console.log('🔥');

// // const todo = {};

// // todo.id = 69;
// // todo.test = true;

// // console.log(todo);

// let objA = {
//   item1: '1',
//   item2: '2',
//   item3: '3',
// };

// let objB = {
//   item1: '10',
//   item2: '20',
//   item3: '30',
// };

// // let objC = { ...objA, ...objB };
// let objC = Object.assign({}, objA, objB);

// // console.log(Object.keys(objA).length);

// // console.log(Object.values(objB));
// // console.log(Object.keys(objB).length);

// // const objectX = { a: 1, b: 2, c: 3, d: 4 };

// // console.log(objectX.hasOwnProperty('a'));
// // console.log(objC);

// let x;

// const todo = new Object();

// todo.id = 1;
// todo.name = true;

// x = todo;

// console.log(x);

let objA = { a: 1, b: 2, c: 3 };
let objB = { d: 1, e: 2, f: 3 };

let objC = { ...objA, ...objB };
let objD = Object.assign({}, objA, objB);

let test = [objA, objB, objC];
console.log(test[0].a);

// // WTF 8
