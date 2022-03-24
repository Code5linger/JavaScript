let mySymbol = Symbol();

let person = {
  name: "Copa",
  age: 26,
  job: true,
  [mySymbol]: "Secret",
  myMethod: function () {
    console.log("Method!");
  },
  testMethod: function () {
    console.log(this.name + " is " + this.age);
  },
};

console.log(person);
console.log(person.name);
console.log(person.job);
console.log(person.age);
console.log(person.wife);
console.log(person.mySymbol);

person.name = "Samsu";
console.log(person.name);

person["name"] = "Code";
console.log(person.name);

person.myMethod();
person.testMethod();
