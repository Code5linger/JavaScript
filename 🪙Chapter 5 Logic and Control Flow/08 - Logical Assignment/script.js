//  ||= assign the right side value only if the left is a false value

let a = false;

if (!a) {
  a = 20;
}

// a = a || 10;

console.log(a);
//  &&= assign the right side value only if the left is a truthy value
//  ||= assign the right side value only if the left is a null of undefined
