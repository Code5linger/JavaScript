// // 15 - Promises Versus Callback Hell
// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

// const { error } = require("console");

// const { error } = require("console");

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Something ...');
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }
console.log();
// // getData('./movies.json', (data) => {
// //   console.log(data);
// //   getData('./actors.json', (data) => {
// //     console.log(data);
// //     getData('./directos.json', (data) => {
// //       console.log(data);
// //     });
// //   });
// // });

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directorsS.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log();

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     if (this.readystate === 4) {
//       if (this.status === 200) {
//         setTimeout(() => {
//           xhr.onreadystatechange = function () {
//             resolve(JSON.parse(this.responseText));
//           };
//         }, 1000);
//       } else {
//         reject('Error');
//       }
//     }
//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// getData('./movies.json').then((movies) => {
//   console.log(movies);
// });

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('T_T');
//         }
//       }
//     };
//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//     return getData('actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//   });

// console.log();

console.log();

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error ❌');
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// getData('./actors.json')
//   .then((actors) => {
//     console.log(actors);
//     return actors.get;
//   })
//   .then((actorsName) => {
//     console.log(actorsName);
//   });

console.log();

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error ❌');
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, 1000);
//   });
// }

// getData('./movies.json').then((movies) => {
//   console.log(movies);
// });

console.log();

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error Has Occared!');
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, 1000);
//   });
// }

// getData('./movies.json').then((movies) => {
//   console.log(movies);
// });

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', endpoint);

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject('Error');
          }
        }
      };

      setTimeout(() => {
        xhr.send();
      }, Math.floor(Math.random() * 3000) + 1000);
    });
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   });
console.log();
// const moviesPromise = getData('./movies.json');
// const actorsPromise = getData('./actors.json');
// const directorsPromise = getData('./directorsX.json');

// moviesPromise.then((movies) => console.log(movies));
// actorsPromise.then((actors) => console.log(actors));
// directorsPromise.then((directors) => console.log(directors));

// Promise.all([moviesPromise, actorsPromise, directorsPromise])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

// moviesPromise.then((movie) => console.log(movie));
// actorsPromise.then((actors) => console.log(actors));
// directorsPromise.then((directors) => console.log(directors));

const testPromise = new Promise((resolve, reject) => {
  resolve('Hello  World');
});

Promise.all([moviesPromise, actorsPromise, directorsPromise, testPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
