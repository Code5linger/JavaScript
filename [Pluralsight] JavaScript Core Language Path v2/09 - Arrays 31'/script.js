/*
let values = [1, 2, 3];

console.log(Array.isArray(values));
*/
/*
let values = ["a", "b", "c"];
values[0] = "XxX";
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);
*/
/*
let values = ["a", "b", "c"];
const first = values.shift();
const last = values.pop();
console.log(values, last, first);
*/
/*
const values = ["a", "b", "c"];
const newValues = values.slice(1, 2);
console.log(newValues);
*/
/*
const values = ["a", "b", "c"];
const newValues = values.slice(1, 4);

console.log(newValues);
*/
/*
let id = 123;
*/
/*
let values = [1, 2, 3];
*/
/*
let values = Array.of(1, 2, 3);
values[1] = 69;
console.log(values[1]);
*/
/*
const values = ["a", "b", "c"];
values.push("d");

console.log(values);
*/
/*
const values = ["a", "b", "c", "d"];
let dropped = values.pop();
console.log(dropped);
*/
/*
const values = ["a", "b", "c", "d"];
let dropped = values.shift();

console.log(dropped);
*/
/*
const values = ["b", "c", "d"];
values.unshift("a");

console.log(values);
*/
/*
const values = ["a", "b", "c", "d"];
const newValues = values.slice(1, 3);

console.log(newValues);
console.log(values);
*/
/*
const values = ["a", "b", "c", "d"];
values.splice(1, 2, "copa");
console.log(values);
*/
/*
const values = ["a", "b", "c", "d"];
console.log(values.indexOf("x"));
*/
/*
const values = ["a", "b", "c", "d"];
const set = values.filter(function (item) {
  return item > "b";
});
console.log(set);
*/
/*
const values = ["a", "bb", "c", "dddd"];
const found = values.find(function (item) {
  return item.length >= 2;
});

console.log(found);
*/
/*
const values = ["a", "b", "c", "d"];
values.forEach(function (item) {
  console.log("item: ", item);
});
*/
/*
let Array = ["a", "b", "c"];
console.log(Array[0]);
*/
/*
let values = Array.of("1", "2", "3");
console.log(values[0]);
*/
/*
const values = ["a", "b", "c"];
console.log(typeof values);
console.log(Array.isArray(values));
*/
/*
const values = ["a", "b", "c"];
values[1] = "bbbbb";
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);
*/
/*
const values = ["a", "b", "c"];
values.push("d");
console.log(values[3]);
*/
/*
const values = ["a", "b", "c"];
let dropped = values.pop();
console.log(dropped);
console.log(values);
*/
/*
const values = ["a", "b", "c"];
let first = values.shift();
console.log(first);
console.log(values);
*/
/*
const values = ["b", "c"];
let first = values.unshift("a", "d", "e");
console.log(values, first);
*/
/*
const values = ["a", "b", "c"];
console.log(values);
const newValues = values.splice(2, 1, "hello");

console.log(newValues);
console.log(values);
*/
/*
const values = ["a", "b", "c"];
console.log(values.indexOf("c"));
console.log(values.indexOf("a"));
console.log(values.indexOf("d"));
*/
/*
const values = ["a", "b", "c", "d"];
const set = values.filter(function (item) {
  return item > "b";
});
console.log(set);
*/
/*
const values = ["a", "b", "c", "d"];
values.forEach(function (item) {
  console.log("item: ", item);
});
*/

const containers = document.getElementsByClassName("containers");

console.log(containers);
const values = ["a", "bbb", "c", "d"];
const found = values.find(function (item) {
  return item.length > 1;
});

console.log(found);

/*
const values = ["a", "b", "c", "d"];
values.forEach(function (item) {
  console.log(item);
});

*/
//For the streak