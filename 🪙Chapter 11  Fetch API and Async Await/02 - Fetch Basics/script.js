console.log('Test');

// fetch('./movies.json')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetch('./movies.json').then((response) => {
//   console.log(response);
// });
