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
/*
let person = {
  name: "Jhon",
  age: 32,
  job: false,
};

function incrementAge(person) {
  return person.age++;
}

console.log(incrementAge(person));
console.log(person.age);
*/
/*
let now = new Date();
console.log(now.toDateString());

console.log(Math.abs(-42));
*/
/*
function showMessage(message) {
  document.getElementById("message").textContent = message;
}

console.log(message);
*/

const header = document.getElementById("message");

header.style.color = "#105679";
header.style.fontWeight = "100";

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log("Click!");
});

console.log("Test");
