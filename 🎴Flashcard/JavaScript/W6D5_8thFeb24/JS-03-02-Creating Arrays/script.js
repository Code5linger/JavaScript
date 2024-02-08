//
const arr = [69, 'Test', true];
console.log(arr);

//
const newArray = new Array('test', 420, false);
console.log(newArray);

// 4
const num = [12, 45, 89, 47, 19];
x = num[0];
console.log(x, typeof x);

console.log(num[2], typeof num[2]);

num[5] = 69;
num[6] = 72;

console.log(num);
console.log(num[5] + num[6]);

console.log(`Testing ${num[5]} 🤣`);

// 07
const arrTest = [7, 'Code', null, undefined, true];

console.log(arrTest.includes(7));
console.log(arrTest.length);

arrTest[0] = 69;
console.log(arrTest);

arrTest.length = 10;
console.log(arrTest);

// 11
const test11 = [69, 'জীবের', true, null, undefined];
test11[test11.length - 1] = 'Test';

console.log(test11);

test11.length = 2;
console.log(test11);
