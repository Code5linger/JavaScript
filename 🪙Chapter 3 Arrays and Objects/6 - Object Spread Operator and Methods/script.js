// const todo = new Object();

// todo.id = 69;
// todo.test = true;
// todo.user = 'Cod35linger';

// const person = {
//   address: {
//     coords: {
//       lat: 42.46464654,
//       lng: -71.3546847,
//     },
//   },
// };

// const obj1 = { a: 1, b: 2, x: 6 };
// const obj2 = { c: 3, d: 4, y: 9 };

// const obj4 = Object.assign({}, obj1, obj2);

// console.log(Object.keys(todo));

// console.log(Object.keys(todo).length);

// console.log(Object.values(todo));

// console.log(Object.entries(todo));

// console.log(todo.hasOwnProperty('name'));

// const todo = {};

// todo.id = 69;
// todo.test = true;
// todo.naame = 'CodeSlinger';

// console.log(todo, typeof todo);

// const obj1 = { a: 1, b: 2, x: 6 };
// const obj2 = { c: 3, d: 4, y: 9 };

// const obj3 = { ...obj1, ...obj2 };

// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj3, typeof obj3);
// console.log(obj4, typeof obj4);

// const todos = [
//   { id: 1, name: '1' },
//   { id: 2, name: '2' },
//   { id: 3, name: '3' },
// ];

// console.log(todos);

// x = todos.length;
// console.log(x, typeof x);

const fNmae = 'Elrick';
const lName = 'Ashford';
const age = '29';

const person = {
  fNmae,
  lName,
  age,
};

console.log(person.age, typeof age);

//  Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
};

const { id, title } = todo;

console.log(id, title);
