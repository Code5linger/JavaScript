const myString = 'develover ';

// console.log(myString.slice(0, 1).toUpperCase() + myString.substring(1)); //💡
// console.log(myString.charAt(0).toUpperCase() + myString.substring(1)); //✅
// console.log(myString[0].toUpperCase() + myString.substring(1)); //✅
console.log(`${myString[0].toUpperCase()}${myString.substring(1)}`);

console.log(myString);
