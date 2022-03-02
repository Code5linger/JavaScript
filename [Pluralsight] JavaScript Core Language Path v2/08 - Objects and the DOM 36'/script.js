let person = {
  name: "Copa",
  age: 27,
  job: false,
  showInfo: function (realAge) {
    return this.name + " is " + realAge;
  },
};

console.log(person.showInfo(69));

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
