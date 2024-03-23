function curSuccess(pos) {
  console.log(pos);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {};

navigator.geolocation.getCurrentPosition(curSuccess, curError, options);
