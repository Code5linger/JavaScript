// console.log("script 2");

// let name = "CCC";

// const headers = document.getElementsByTagName("h1");
// console.log(headers[1]);

const boxes = ["a", "b", "c", "d", "e"];

function multiple(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

multiple(boxes);
