// console.log("Test");

// 02 All About Variable > 2.4 Variable Scopes > 2.4.1 Blocks

// let name = "Colin";
// {
//   let name = "Sam";
//   console.log(name);
// }
// console.log(name);

// 02 All About Variable > 2.4 Variable Scopes > 2.4.2 Function
function greet(name) {
  if (name === "Colin") {
    console.log("Sup! Colin");
  } else if (name === "Sam") {
    console.log("Yo! Sam");
  } else {
    console.log("🤌🤌");
  }
}

greet("Sam");
greet("Colin");
greet("Meh");

// 08 Control Flow > 8.1 Conditional Statement > 8.1.1 If...else

// let name = "Queen";

// if (name === "Colin") {
//   console.log("Sup! Colin");
// } else if (name === "Sam") {
//   console.log("Yo! Sam");
// } else {
//   console.log("🤌🤌");
// }
