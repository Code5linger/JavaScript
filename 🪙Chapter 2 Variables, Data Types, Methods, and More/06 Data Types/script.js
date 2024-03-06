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

// let person = {
//   firstName: 'Sakib',
//   lastName: 'Ahmed',
//   age: 69,
//   hello: function () {
//     return 'Hello ' + this.firstName + '👋';
//   },
// };

// console.log(person.hello());

//Undefined vs Null
//

// let test = undefined;
// console.log(typeof test); //undefined

// let testA = null;
// console.log(typeof testA); // object

// let mail = 'codeslinger.io@gmail.com';

// console.log(mail.lastIndexOf('o'));
// console.log(mail.indexOf('o'));

// let testA = false;
// console.log(testA);

// let testB = true;
// console.log(testB);

// let notTestA = !false;
// console.log(notTestA);

// let notTestB = !true;
// console.log(notTestB);

// let firstName = 'Elrick';

// console.log(person);
// console.log(person.age);
// console.log(person.func());

// What is the difference between Undefined & Null
// A variable gets undefined if we don't add any value to it. Null you have to assign manually

// let testC;
// console.log(testC, typeof testC);

// let testD = null;
// console.log(testD, typeof testD);

// let email = 'codeslinger.io@gmail.com';

// console.log(email.lastIndexOf('o'));
// console.log(email.indexOf('o'));

// let arr = [1, 2, 3, 4];
// console.log(typeof arr);

// let date = new Date();
// console.log(typeof date);

// let lit = `Blah Blah ${date} ...`;
// console.log(typeof lit);

// console.log(typeof person);

// let email = 'codeslinger.io@gmail.com';

// console.log(email.slice(12, 14));
// console.log(email);

// console.log(email.substr(0, 11));
// console.log(email);

// console.log(email.replace('io', '69'));
// console.log(email);

// console.log(email.replaceAll('o', '⭕'));
// console.log(email);

//
//
// let err = error('💥');
// console.log(err);

// let fName = 'sakib';
// console.log(fName.toUpperCase());

let title = 'Hi, I am ';
let age = 30;
let emoji = '🧓';

// Concatenation Way
// console.log(title + age + emoji);
// Template String Way
// console.log(`${title} ${age} ${emoji}`);
// let A = Math.random() * 10;
// let B = Math.random() * 10;
// let C = Math.random() * 10;
// let D = Math.random() * 10;

// let A1 = Math.floor(A);
// let B1 = Math.floor(B);
// let C1 = Math.floor(C);
// let D1 = Math.floor(D);

// console.log(A1, B1, C1, D1);

// let bacA = Math.floor(Math.random() * 16777215).toString(16);
// let bacB = Math.floor(Math.random() * 16777215).toString(16);

// let html = `<div style ="display: flex;color: red;align-items: flex-end;justify-content: center; color: red; background: linear-gradient(to right, #${bacA}, #${bacB});">
// <h3>${title}</h3>
// <h1>${age} </h1>
// <h1>${emoji}</h1>
// </div>`;

// document.querySelector('body').innerHTML = html;
//

// let objA = {};
// console.log(typeof objA);

// let objB = new Object();
// console.log(typeof objB);

// let person = {
//   firstName: 'Sakib',
//   lastName: 'Ahmed',
//   age: 69,
//   func: function () {
//     return 'Hello ' + this.firstName;
//   },
// };

// delete person.age;
// console.log(person.func());

// let num1 = 6;
// let num2 = -100000000000000;

// let num4 = 900000000000000000000000000000000000000000000000000000000000;

// console.log(num4);

// let num5 = -80000000000000000000000000000000000000000000000000000000000;

// console.log(num5);

// let num6 = 1.2e10;
// console.log(num6);

// console.log(`${Number.MIN_VALUE}`);
// console.log(`${Number.MIN_SAFE_INTEGER}`);
// // console.log(`${Number.}`);

// let num = Number.MAX_VALUE;
// let num_ = 1n;
// console.log(typeof num_);

// let bigInt = 1_000_560_000_000n;
// console.log(bigInt);
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
