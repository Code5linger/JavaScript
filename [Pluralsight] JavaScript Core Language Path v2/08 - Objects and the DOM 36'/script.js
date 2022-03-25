/*
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
*/
/*
let person = {
  name: "Code",
  age: 26,
  myMethod: function (realAge) {
    console.log(this.name + " is " + realAge);
  },
};

person.myMethod(69);
*/
//video 4
/*
let mySymbol = Symbol();

let person = {
  fname: "Code",
  age: 26,
  job: true,
  [mySymbol]: "Secret",
  myMethod: function (realAge) {
    let testMethod = "myMethod!";
    let methodString = this.fname + " is " + this.age;
    let methodStringPara = this.fname + " is " + realAge;
    return [testMethod, methodString, methodStringPara];
  },
};

console.log(person);
console.log(person.fname);
console.log(person.job);
console.log(person.age);
console.log(person.test);

person.fname = "Slinger";
console.log(person.fname);

person["fname"] = "Code";
console.log(person.fname);

console.log(person.mySymbol);
console.log(person.myMethod()[0]);
console.log(person.myMethod()[1]);
console.log(person.myMethod(69)[2]);
*/
/*
let age = 26;

function changedAge(age) {
  return ++age;
}

console.log(changedAge(age)); //27
console.log(age); //26
*/
/*
let mySymbol = Symbol();

let person = {
  name: "Code",
  age: 26,
  job: true,
  [mySymbol]: "Secret",
};

function incAge(person) {
  return ++person.age;
}

console.log(incAge(person)); //27
console.log(person.age); //27
console.log(person.mySymbol);
*/
/*
let now = new Date();

console.log(now.toDateString());
*/
