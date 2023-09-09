console.log("test 🍀");

// alert("Hello World!");

let first_name = prompt("What is your name?");
alert("Hi! " + first_name);

let today = new Date();
document.body.innerHTML = "<h1>Todays date is " + today + "</h1>";
document.body.style.backgroundColor = "Crimson";
document.body.style.color = "white";

let newParagraph = document.createElement("p");
let textForNewParagraph = document.createTextNode("Text for paragraph.");

newParagraph.appendChild(textForNewParagraph);
document.body.appendChild(newParagraph);
