const firstname = 'Code';
const lastName = 'Ashford';
var age = 69;

const person = {
  firstname,
  lastName,
  age,
};

console.log(person.firstname, person.lastName, person.age);

const todo = {
  id: 17,
  title: 'Meh',
  user: {
    name: 'code',
    edu: true,
  },
};

// const { id, title } = todo;

let x = todo.id;
console.log(x);

const number = [23, 45, 99, 12];

// let numA = number[1];
// let numB = number[0];

// const [numA, numB, ...rest] = number;

const library = {
  title: 'Title A',
  author: 'Author A',
  status: {
    own: true,
    reading: false,
    read: false,
  },
  title: 'Title B',
  author: 'Author B',
  status: {
    own: true,
    reading: false,
    read: false,
  },
  title: 'Title ',
  author: 'Author ',
  status: {
    own: true,
    reading: false,
    read: false,
  },
};

console.log(library);

console.log(numA, numB, rest);
// ❌   Could not do :: 1, 2    6
// ⚠️   Remove 8 - Destructuring and Naming >
// 🥴   3   4   5   7
