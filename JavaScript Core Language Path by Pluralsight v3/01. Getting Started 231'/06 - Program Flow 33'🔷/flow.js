if (5 === "5") {
  console.log("Match");
} else {
  console.log("lol");
}

if (50 > 10) {
  console.log("Bro...");
} else {
  console.log("True");
}

let district = "Dhaka",
  tax = 7;

if (district == "Dhaka") {
  tax = 0;
}

console.log(tax);

let country = "BD",
  love = 70;

if (country == "BD") {
  love = 100;
}

console.log(love + "%");

let price = 20;

if (price >= 15) {
  console.log("Discounted!");
}

if (+(1.1 + 1.3).toFixed(2) == 2.4) {
  let shout = "Out";
  console.log(shout);
}

let score = 57;

if (score >= 80) console.log("A+");
else if (score >= 70) console.log("B");
else if (score >= 60) console.log("C");
else console.log("Dabba");
