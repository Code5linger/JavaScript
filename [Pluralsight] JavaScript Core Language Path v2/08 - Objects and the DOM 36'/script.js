/*
let person = {
  name: "Copa",
  age: 27,
  job: false,
  showInfo: function (realAge) {
    return this.name + " is " + realAge;
  },
};

console.log(person.showInfo(69));
*/
/*
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
*/
/*
let message = "Hello";

function changeMessage(message) {
  message = "Yoyoyo!";
}

console.log(changeMessage(message));

console.log(message);
*/

let person = {
  name: "Jhon",
  age: 32,
  job: false,
};

function incrementAge(person) {
  person.age++;
}

console.log(person.age);
console.log(incrementAge(person));
