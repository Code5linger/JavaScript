const firstName = 'Code';
const lastname = 'Ashford';
var age = 69;

const person = {
  firstName,
  lastname,
  age,
};

console.log(person.firstName, person.lastname, person.age);

// Destructuring

const todo = {
  id: 17,
  title: 'Task 17',
  user: {
    name: 'code',
    edu: true,
  },
};

// Change Keys
const { id: todoId } = todo;

console.log(todoId);

//
const numbers = [23, 45, 99, 12];
const [a, b, ...rest] = numbers;

console.log(a, b, rest);
