// // How many types of data are there?
// // 2 |
// // 1 - Primitive
// // String
// let str = 'String';
// console.log(str, typeof str);
// // Number || Integer
// let num = 69;
// console.log(num, typeof num);
// // Null
// let empty = null;
// console.log(empty, typeof empty);
// // Boolean
// let bool = true;
// console.log(bool, typeof bool);
// // Undefined
// let test;
// console.log(test, typeof test);
// // Bigint
// let big = 9000000000n;
// console.log(big, typeof big);
// // Symbol
// let id = Symbol('id');
// console.log(id, typeof id);
// // 2 - Reference or Object Type
// // FUnction
// // Object litarel

// let trueValue = true;
// console.log(trueValue);
// let falseValue = false;
// console.log(falseValue);

// let notTrue = !true;
// console.log(notTrue);
// let notFalse = !false;
// console.log(notFalse);

// let firstName = 'Sakib';
// let lastName = 'Ahmed';
// let age = 69;

// let firstName = 'Elrick';

let person = {
  firstName: 'Sakib',
  lastName: 'Ahmed',
  age: 69,
  hello: function () {
    return 'Hello ' + this.firstName + '👋';
  },
};

console.log(person.hello());

//Undefined vs Null
//

let test = undefined;
console.log(typeof test); //undefined

let testA = null;
console.log(typeof testA); // object

let mail = 'codeslinger.io@gmail.com';

console.log(mail.lastIndexOf('o'));
console.log(mail.indexOf('o'));
