// 1
const arr = [12, 56, 89, 11];

arr.push(69);

console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(420);
console.log(arr);

arr.shift();
console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr.includes(11));
console.log(arr.indexOf(69));
console.log(arr.indexOf(56));

console.log(arr.slice(0, 2));
console.log(arr);

console.log(arr.splice(0, 3));
console.log(arr);

// 12
const practice = [12, 56, 89, 11, 69];
console.log(practice.slice(1, 3).reverse().toString().charAt(1));
