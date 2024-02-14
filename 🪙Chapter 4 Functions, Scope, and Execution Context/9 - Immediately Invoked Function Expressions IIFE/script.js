(function () {
  const user = 'Ashford';
  console.log(user);

  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Code');

(function (age) {
  console.log(age + ' !!');
})(69);
