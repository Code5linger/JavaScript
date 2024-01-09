key = 42;

function getCode(value) {
  let keyGen = function () {
    let key = 12;
    console.log("In KeyGen: ", key);
    return key;
  };
  let code = value * keyGen();
  console.log("in getCode: ", key);
  return code;
}

console.log(getCode(5));
