if (1 !== "1") {
  //false
  console.log(true);
} else {
  console.log(false);
}

if (1 != "1") {
  //true //JS converts types, in this case 1 to sting '1'
  //false
  console.log(true);
} else {
  console.log(false);
}
