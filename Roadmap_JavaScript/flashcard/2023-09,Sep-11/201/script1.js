// console.log("Script 1");

// let name = "AAA";

// let button = document.querySelector("#buttonA");
// let headline = document.querySelector("#headingA");

// document.body.style.textAlign = "center";
// document.body.style.padding = "10rem 0";

// button.onclick = () => {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you`);
//   headline.textContent = `Welcome ${name}`;
// };

// let button = document.querySelector("#button");
// let header = document.querySelector("#header");

// document.body.style.textAlign = "center";
// document.body.style.padding = "10rem 0";

// button.onclick = () => {
//   const name = prompt("What is your name?");
//   alert(`Hello👋 ${name}, Nice to see you!`);

//   header.textContent = `Wellcome, ${name}`;
// };

let button = document.querySelector("#button");
let header = document.querySelector("#header");

button.onclick = () => {
  alert(`Hello ${prompt("What is your name?")}, nice to see you`);
  header.textContent = `Welcome ${prompt("Your name again please")}`;
};
