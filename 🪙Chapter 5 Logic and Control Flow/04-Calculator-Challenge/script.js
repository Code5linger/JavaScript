function calculator(number1, number2, operator) {
  switch (operator) {
    case '+':
      console.log(number1 + number2);
      break;
    case '-':
      console.log(number1 - number2);
      break;
    case '*':
      console.log(number1 * number2);
      break;
    case '/':
      console.log(number1 / number2);
      break;
    default:
      console.log('💥Error');
  }
}

calculator(5, 2, '+'); // returns 7
calculator(5, 2, '-'); // returns 3
calculator(5, 2, '*'); // returns 10
calculator(5, 2, '/'); // returns 2.5
calculator(5, 2, '🤌'); // returns error
