// console.log("Test");

// 02 All About Variable > 2.4 Variable Scopes > 2.4.1 Blocks

// let name = "Colin";
// {
//   let name = "Sam";
//   console.log(name);
// }
// console.log(name);

// 02 All About Variable > 2.4 Variable Scopes > 2.4.2 Function
// function greet(name) {
//   if (name === "Colin") {
//     console.log("Sup! Colin");
//   } else if (name === "Sam") {
//     console.log("Yo! Sam");
//   } else {
//     console.log("🤌🤌");
//   }
// }

// greet("Sam");
// greet("Colin");
// greet("Meh");

// function greet(name) {
//   if (name == "Colin") {
//     return "Sup! Colin";
//   } else if (name == "Sam") {
//     return "Yo! Sam";
//   } else {
//     return "🤌🤌";
//   }
// }

// function greet(name) {
//   let result = "";

//   if (name == "Colin") {
//     result = "Sup! Colin";
//   } else if (name == "Sam") {
//     result = "Yo! Sam";
//   } else {
//     result = "🤌🤌";
//   }

//   return result;
// }

// console.log(greet("Sam"));

// let test = greet("Colin");

// console.log(test);

//03 Data Types > 3.3.1 Object
// let firstName = "Sakib";
// let lastName = "Ahmed";
// let youTube = "CodeSlinger";

// let person = {
//   firstName: "Sakib",
//   lastName: "Ahmed",
//   youTube: "CodeSlinger",
//   greet: function () {
//     console.log("Hi👋 " + this.firstName);
//   },
// };

// person.greet();

//05 Data Structures\5.1 Indexed Collections\5.1.2 Arrays
// function test() {
//   return "💥";
// }

// let array = [1, "Colin", true, test()];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// console.log(array[0], array[1], array[2], array[3]);
// console.log(array.reverse());
// console.log(array.length);

// console.log(person.firstName, person.lastName, person.youTube);
// 08 Control Flow > 8.1 Conditional Statement > 8.1.1 If...else

// let name = "Queen";

// if (name === "Colin") {
//   console.log("Sup! Colin");
// } else if (name === "Sam") {
//   console.log("Yo! Sam");
// } else {
//   console.log("🤌🤌");
// }

// 08 Control Flow\8.1 Conditional Statement\8.1.3 While Loop
