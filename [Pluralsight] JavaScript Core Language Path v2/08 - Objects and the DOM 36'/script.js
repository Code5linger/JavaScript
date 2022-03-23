let mySymbol = Symbol();

let person = {
  name: "Jon",
  age: 32,
  job: true,
  [mySymbol]: "Secret",
};

//person.name = "Copa";
person["name"] = "Samsu";

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.job);
console.log(person.country);
console.log(person.mySymbol);
 