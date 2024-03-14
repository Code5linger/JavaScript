// //  14 - Promise Chaining
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       resolve({ name: 'Elrick', age: 69 });
//     } else {
//       reject('Error');
//     }
//   }, 1000);
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({ name: 'Elrick', age: 69 });
//     } else {
//       reject('Error🚩');
//     }
//   }, 1000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//     return name.length;
//   })
//   .then((nameLength) => {
//     console.log(nameLength);
//     // return name.length;
//   })
//   .catch((error) => console.log(error))
//   .then(() => {
//     console.log('Error 1');
//     return 69;
//   })
//   .then((x) => console.log(x))
//   .finally(() => console.log('✒️fin'));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({ name: 'Elrick', age: 69 });
//     } else {
//       reject('Error🚩');
//     }
//   }, 1000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//     return name.length;
//   })
//   .then((nameLength) => {
//     console.log(nameLength);
//   })
//   .catch((error) => {
//     console.log(error);
//     return 69;
//   })
//   .then(() => {
//     console.log(`error part 2`);
//     return 69;
//   })
//   .then((x) => {
//     console.log(x);
//     return 420;
//   })
//   .then((y) => {
//     console.log(y);
//   })
//   .finally(() => {
//     console.log('I am inhabitable 🫰');
//   })
//   .then(() => {
//     console.log('& I am iron man');
//   });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'Elrick', age: 69 });
    } else {
      reject('Error');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log('Error the ERROR');
    return 69;
  })
  .then((x) => {
    console.log(x);
    return 420;
  })
  .then((y) => {
    console.log(y);
  })
  .finally(() => {
    console.log('✒️fin');
  });
