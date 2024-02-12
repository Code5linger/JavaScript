// 1
function sayHello() {
  console.log('Hello👋');
}

// sayHello();

// 2
function sum(num1, num2, num3) {
  console.log((num1 + num2) * num3);
}

// sum(1, 2, 3);

// 3
function subtraction(num1, num2, num3) {
  return num1 - num2 - num3;
}
subtraction(10, 5, 2);
// console.log(subtraction(20, 7, 8));

//0036_More_on_Arguments_Parameters
function registerUser(user = 'BOT', test = 69) {
  return user + ' is registered ' + test;
}

// console.log(registerUser('BOT', 420));
// Bot is registered

// Rest Param
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

// console.log(sum(1, 2, 3, 4, 5, 100));

// Objects as params
function login(user) {
  return `Username: ${user.name} | ID: ${user.id}`;
}

const userA = {
  id: 69,
  name: 'Elrick',
};

const userB = {
  id: 420,
  name: 'Ashford',
};

// console.log(login(userA));
// Username: Elrick | ID: 69
// console.log(login(userB));
// Username: Ashford | ID: 420

// Array as params
function getRandom(...array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log('➡️ ' + randomIndex, typeof randomIndex);

  console.log(randomIndex);
}

getRandom(2, 4, 6, 8, 10, 12, 100);
