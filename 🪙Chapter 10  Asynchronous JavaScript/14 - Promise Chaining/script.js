//  14 - Promise Chaining
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
