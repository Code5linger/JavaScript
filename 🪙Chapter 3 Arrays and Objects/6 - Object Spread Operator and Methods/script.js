const todo = new Object();

todo.id = 69;
todo.test = true;
todo.user = 'Cod35linger';

const person = {
  address: {
    coords: {
      lat: 42.46464654,
      lng: -71.3546847,
    },
  },
};

const obj1 = { a: 1, b: 2, x: 6 };
const obj2 = { c: 3, d: 4, y: 9 };

const obj4 = Object.assign({}, obj1, obj2);

console.log(Object.keys(todo));

console.log(Object.keys(todo).length);

console.log(Object.values(todo));

console.log(Object.entries(todo));

console.log(todo.hasOwnProperty('name'));
