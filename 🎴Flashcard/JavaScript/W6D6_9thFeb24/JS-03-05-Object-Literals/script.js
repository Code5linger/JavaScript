const obj = {
  firstName: 'Elrick', //Ket:  Value, = Element
  lastName: 'Ashford',
  age: 27,
  hasGF: false,
  education: {
    ssc: true,
    hsc: true,
    bsc: true,
    msc: true,
    phd: false,
  },
  hobbies: ['Learning', 'gaming', 'anime'],
};

obj['isAdmin'] = false;

console.log(obj['firstName'] + ' || Data Type:', typeof obj);
console.log(obj['education']['msc'] + ' || Data Type:', typeof obj);
console.log(obj.education.phd + ' || Data Type:', typeof obj);
console.log(obj.hobbies[1] + ' || Data Type:', typeof obj);
obj.hobbies[1] = 'movie';
console.log(obj.hobbies[1] + ' || Data Type:', typeof obj);
console.log(obj.isAdmin);

delete obj.hasGF;
console.log(obj);

obj.newProp = 'test';

console.log(obj);

obj.testFunction = function () {
  return `hello form the other side📢 ${obj.firstName}`;
};

console.log(obj.testFunction());
obj.testFunction = function () {
  return `hello form the other side📢 Mr. ${this.firstName}`;
};

console.log(obj.testFunction());

obj.alias = {
  'User name': 'Sakib',
  'Profile Picture': true,
};

console.log(obj.alias['User name']);
