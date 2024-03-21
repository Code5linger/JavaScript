// 1
// fetch('https://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'));
//
// fetch('https://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => console.log(error + '💥'));
//
// fetch('https://httpstat.us/404/69')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => console.log(error + '💥'));
//
// fetch('https://httpstat.us/200')
//   .then((response) => {
//     if (response.status === 404) {
//       throw new Error('404');
//     } else if (response.status === 500) {
//       throw new Error('Server Error');
//     } else if (response.status !== 200) {
//       throw new Error('Request Failed');
//     }
//     // console.log(response.status);
//     return response;
//   })
//   .then(() => console.log('Success'))

//   .catch((error) => console.log(error + '💥'));
console.log();
// 2
// fetch('https://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'));

// fetch('https://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => console.log(error + '💥'));

// fetch('https://69')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => console.log(error + ' 💥'));

fetch('https://httpstat.us/200')
  .then((response) => {
    // console.log(response.status);
    // console.log(response.ok);
    // console.log(response.statusText);
    // if (!response.ok) {
    //   console.log('Request Failed💔');
    // }
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    } else if (response.status !== 200) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => console.log('Success'))
  .catch((error) => console.log(error + ' 💥'));
