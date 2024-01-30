const person = {
  name: 'Elrick ',
  age: 30,
  location: 'BD',
  education: true,
  address: {
    street: '936 Kiehn Route',
    City: 'West Ned',
    State: 'Tennessee',
    Zip_Code: '11230',
  },
  hobbies: ['Video Games', 'Movies', 'Anime'],
};

person.alias = {
  'User Name': 'CodeSlinger',
  'Profile Picture': true,
};

console.log(person.alias['User Name']);
