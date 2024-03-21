// fetch('https://httpstat.us/404')
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => {
//     console.log(error);
//   });

// fetch('https://69.420')
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => {
//     console.log(error);
//   });

// fetch('https://httpstat.us/')
//   .then((res) => {
//     console.log(res.statusText);
//     return res;
//   })
//   .then(() => console.log())
//   .catch((error) => {
//     console.log(error);
//   });

// fetch('https://httpstat.us/404')
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log('Success'));

// fetch('https://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('??'));

// fetch('https:69.420')
//   .then((response) => {
//     return response;
//   })
//   .then(() => console.log('Success'))
//   .catch((error) => console.log(error + '💥'));

fetch('https://httpstat.us/200')
  .then((res) => {
    if (res.status === 404) {
      throw new Error('Not Found');
    } else if (res.status === 500) {
      throw new Error('Server Error');
    } else if (res.status !== 200) {
      throw new Error('Request Failed');
    }
    return res;
  })
  .then(() => console.log('Success'));
