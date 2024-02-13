// console.log(addDollarSign(100));
// console.log(addPlusSign(69));

// // Function Declaration
// function addDollarSign(value) {
//   return '$' + value;
// }

// // Function Expression
// const addPlusSign = function (value) {
//   return '+' + value;
// };
console.log(addDollarSign(100));
//$100
console.log(addPlusSign(100));
//Uncaught ReferenceError: Cannot access 'addPlusSign' before initialization

function addDollarSign(value) {
  return '$' + value;
}

const addPlusSign = function (value) {
  return '+' + value;
};
