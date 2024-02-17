const age = 19;

// Using If Statement
// if (age >= 18) {
//   console.log('You can vote');
// } else {
//   console.log("Can't Vote");
// }

// Using a ternary Operator
// age >= 18 ? console.log('You can vote') : console.log("Can't Vote");

// Assigning a conditional value to a variable
const canVote = age >= 18 ? 'Can vote' : false;

// console.log(canVote);

//Multiple Statement

// let redirect;

// if (auth) {
//   alert('Welcome to the dashbord');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

const auth = true;

// const redirect = auth
//   ? (alert('Welcome to the dashbord'), '/dashboard')
//   : (alert('Access Denied'), '/login');

// console.log(redirect);

// auth ? console.log('Welcome to the dashbord') : null;

auth && console.log('Welcome to the dashbord');
