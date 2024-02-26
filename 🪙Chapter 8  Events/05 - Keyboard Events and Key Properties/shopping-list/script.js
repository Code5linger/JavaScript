// const people = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-1111',
//     age: 30,
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@gmail.com',
//     phone: '222-222-2222',
//     age: 25,
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-3333',
//     age: 45,
//   },
//   {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'Sara@gmail.com',
//     phone: '444-444-4444',
//     age: 19,
//   },
//   {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'jose@gmail.com',
//     phone: '555-555-5555',
//     age: 23,
//   },
// ];

// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((person) => ({ name: person.firstName + ' ' + person.lastName }));

// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positiveSum = numbers
//   .filter((numbers) => numbers >= 0)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum); // 79

// const words = ['coder', 'programmer', 'developer'];

// const cWords = words.map();

// console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']

const itemInput = document.getElementById('item-input');

const onKeyPress = (event) => {
  console.log('⌨️');
};

const onKeyUp = (event) => {
  console.log('⌨️🆙');
};

const onKeyDown = (event) => {
  // console.log('⌨️🔽');
  // Key
  // console.log(event.key);
  // document.querySelector('h1').innerText = event.key;
  // if (event.key === 'Enter') {
  //   alert('💥');
  // }
  // KeyCode
  // if (event.keyCode === 13) {
  //   alert('🚫');
  // }
  // Code
  // if (event.code === 'Digit1') {
  //   console.log('1️⃣');
  // } else if (event.code === 'Digit2') {
  //   console.log('2️⃣');
  // } else {
  // }

  if (event.repeat) {
    console.log('🔃' + event.key);
  }

  console.log('🏎️' + event.shiftKey);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
