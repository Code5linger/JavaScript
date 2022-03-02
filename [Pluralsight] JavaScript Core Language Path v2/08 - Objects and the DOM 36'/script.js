let mySymbol = Symbol();

let person = {
  name: "Copa",
  age: 27,
  job: false,
  [mySymbol]: "Password🔐",
};

person["age"] = 37;
console.log(person.age);
console.log(person.mySymbol);
