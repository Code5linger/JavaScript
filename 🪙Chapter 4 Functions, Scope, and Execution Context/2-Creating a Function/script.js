function sayHello() {
  console.log('Hello World!');
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(6, 9);

function subtract(num1, num2) {
  console.log(num1 - num2);
}

subtract(6, 9);

// Default Params
function registerUser(user = 'BotZ') {
  //   if (!user) {
  //     user = 'Bot';
  //   }
  return user + ' is registered!';
}

// console.log(registerUser());

// Rest Params
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3, 4, 5));
