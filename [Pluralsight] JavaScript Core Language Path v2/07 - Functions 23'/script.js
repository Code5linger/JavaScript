key = 42;
function getCode(value) {
  let code = value * key;
  return code;
}

console.log(getCode(5));
