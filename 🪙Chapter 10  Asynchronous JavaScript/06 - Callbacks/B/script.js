// function toggle(event) {
//   event.target.classList.toggle('danger');
// }

// document.querySelector('#btn').addEventListener('click', toggle);

// function toggle(event) {
//   event.target.classList.toggle('danger');
// }

// document.querySelector('#btn').addEventListener('click', toggle);

// function test(event) {
//   event.target.classList.toggle('danger');
// }

// document.querySelector('#btn').addEventListener('click', test);

// function toggleBtnBGColor(event) {
//   event.target.classList.toggle('danger');
//   // event.target.classList.toggle('bg-alt');
// }

// document.querySelector('#btn').addEventListener('click', toggleBtnBGColor);
// document.querySelector('body').addEventListener('click', toggleBtnBGColor);

// console.log(post);

// function getPosts() {
//   setTimeout(() => {
//     post.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// getPosts();

// function getPosts() {
//   setTimeout(() => {
//     post.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// getPosts();

// function getPosts() {
//   setTimeout(() => {
//     post.forEach();
//   }, 1000);
// }

// getPosts();

// function test(post) {
//   const div = document.createElement('div');
//   div.innerHTML = `<strong>${post[0].title}</strong> - ${post[0].body}`;
//   document.querySelector('#posts').appendChild(div);
// }

// test();

// function getApi() {
//   setTimeout(() => {
//     apiPlaceholder.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `${post.title} - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// getApi();

// function createPost(post, cb) {
//   setTimeout(() => {
//     apiPlaceholder.push(post);
//     cb();
//   }, 5000);
// }

// function getApi() {
//   setTimeout(() => {
//     // Setting when it will run
//     apiPlaceholder.forEach(function (xxx) {
//       // Selecting all item
//       const div = document.createElement('div');
//       // Creating a div element
//       div.innerHTML = `<strong>${xxx.title}</strong> - ${xxx.body}`;
//       // Populating the div element
//       document.querySelector('#posts').appendChild(div);
//       // Adding div element to the dom
//     });
//   }, 1000);
// }

// createPost({ title: 'Test Post Title ', body: 'Test Post Body' }, getApi);

// function getApi() {
//   setTimeout(() => {
//     apiPlaceholder.forEach(function (apiContent) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${apiContent.title}</strong> - ${apiContent.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 1000);
// }

// getApi();

const apiPlaceholder = [
  {
    title: 'Computer Science fundamentals are still important.',
    body: "I feel uncomfortable admitting that when I got my job at Microsoft in 2005, I didn't know how to implement BFS (Breadth First Search). At that time, I was six years into my professional software engineering career and held a master’s degree in Computer Science.",
  },
  {
    title: '5 Key Aspects of Learning a Programming Language',
    body: 'As you guys know(or may not know), I am Debajyati Dey, currently a CS Engineering sophomore at MAKAUT WB. I have started learning programming only 1.5+ years ago ( 2 or 3 months before my University Undergraduate program started ). So you understand that I am not someone very pro at programming.',
  },
];

function newPost(newContent, cb) {
  setTimeout(() => {
    apiPlaceholder.push(newContent);
    cb();
  }, 1000);
}

function getApi() {
  setTimeout(() => {
    apiPlaceholder.forEach(function (apiContent) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${apiContent.title}</strong> - ${apiContent.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

newPost({ title: 'Title ', body: 'Body' }, getApi);
// newPost({ title: 'Title ', body: 'Body' }, getApi);

// Setting when it will run
// Selecting all items of the api
// Creating a div element
// Populating the div element
// Adding div element to the dom
