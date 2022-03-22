let mySymbol = Symbol();

let person = {
  name: "Copa",
  age: 27,
  job: true,
  [mySymbol]: "Secret🤫",
};
person["age"] = 44;

console.log(person.mySymbol);
