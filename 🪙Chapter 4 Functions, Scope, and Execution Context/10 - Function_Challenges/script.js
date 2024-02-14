// function getCelsius(fahrenheit) {
//   return `The temperature is ${Math.floor(
//     (fahrenheit - 32) / 1.8
//   )}\xB0C Celsius`;
// }

// const getCelsius = (fahrenheit) =>
//   `The temperature is ${Math.floor((fahrenheit - 32) / 1.8)}\xB0C Celsius`;

// console.log(getCelsius(32));
// console.log(getCelsius(79));

function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 0, 3, 69, 4, 5, 9]));

((height, width) => {
  console.log(
    `The area of a rectangle with a length of ${height} and a width of ${width} is ${
      height * width
    }.`
  );
})(4, 3);
