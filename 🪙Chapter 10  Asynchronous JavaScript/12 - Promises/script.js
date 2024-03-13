// // 12 - Promises;

// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('object');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise Consumed');
// });

// new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('object 2');
//     resolve();
//   }, 1000);
// }).then(() => console.log('Promise 2 Consumed'));

// console.log('Global Scope');

// Create a promise
// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('object');
//     resolve();
//   }, 1000);
// });

// // promise.then(() => {
// //   console.log('Promicse ...');
// // });

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({ name: 'Sakib', age: 69 });
//     } else {
//       reject('Error: Something Went Wrong');
//     }
//   }, 1000);
// });

// getUser
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('Promice has been resolved or rejected'));

// console.log('Global Scope says Hi');

// const promise = new Promise((resolve, reject) => {
//   console.log('Promise 💍 Made');
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   console.log('Test');
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   console.log('Test 2');
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Test');
//   }, 1000);
// });

// console.log('Global Scope Says Hello');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Test');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise Consumed...');
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Test 2');
//     resolve();
//   }, 2000);
// }).then(() => console.log('Promise Consumed Again '));

// console.log('Global Scope Says Hello ');

// Global Scope Says Hello
// Test
// Promise Consumed...

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Test');
//     resolve();
//   }, 1000);
// }).then(() => console.log('Promise Consumed Again'));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'Elrick', age: 69 });
//   }, 2000);
// }).then((user) => {
//   console.log(typeof user);
// });

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({ name: 'Elrick', age: 69 });
//     } else {
//       reject('🚩Error: Something Went Wrong!');
//     }
//   }, 2000);
// });

// getUser
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('The Promise has been resolved or rejected'));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Anything');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Promise Consumed...');
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'Elrick', age: 69 });
    } else {
      reject('Error Occurred!');
    }
  }, 2000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Promises resolved or rejected ');
  });

console.log('Global Scope says Hello');
