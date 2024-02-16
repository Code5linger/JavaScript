//  ||= (OR assignment) assign the right side value only if the left is a false value

let a = false;

a ||= 69;

// console.log(a);

//  &&= (AND assignment) assign the right side value only if the left is a truthy value

let b = true;

b &&= 79;

// console.log(b);
// 79

//  ??= (nullish coalescing)assign the right side value only if the left is a null or undefined

let c = undefined;

c ??= 89;

console.log(c);
// 89
