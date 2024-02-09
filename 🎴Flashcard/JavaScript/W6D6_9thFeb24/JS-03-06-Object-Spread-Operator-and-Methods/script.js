const todo = new Object();

todo.id = 1;
todo.test = 'Test';

console.log(todo, typeof todo);

const person = {
  address: {
    coord: {
      lat: 42.5446516,
      lng: -71.5164,
    },
  },
};

console.log(person.address.coord.lat);

const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };

const objC = { ...objA, ...objB };
console.log(objC);

const objD = Object.assign({}, objA, objB);
console.log(objD);

console.log(Object.keys(objC));
console.log(Object.values(objD));
console.log(Object.entries(objC));

const objectX = { a: 1, b: 2, c: 3, d: 4 };
// 4

console.log(Object.keys(objectX).length);
console.log(objectX.hasOwnProperty('a'));
