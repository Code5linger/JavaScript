// const posts = [
//   { title: 'Title One', body: 'Body One' },
//   { title: 'Title Two', body: 'Body Two' },
// ];

// function newPost(newPost, cb) {
//   setTimeout(() => {
//     posts.push(newPost);
//     cb();
//   }, 1000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (content) {
//       let h3 = document.createElement('h3');
//       h3.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
//       document.getElementById('posts').appendChild(h3);
//     });
//   }, 1000);
// }

// newPost({ title: 'Title Three', body: 'Body Three' }, getPosts);

// function newPost(newContert) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;

//       if (!error) {
//         posts.push(newContert);
//         resolve();
//       } else {
//         reject('Error🚩');
//       }
//     });
//   }, 1000);
// }

// function getPost() {
//   setTimeout(() => {
//     posts.forEach(function (content) {
//       let h3 = document.createElement('h3');
//       h3.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
//       document.getElementById('posts').appendChild(h3);
//     });
//   }, 1000);
// }

// function showError(error) {
//   let h3 = document.createElement('h3');
//   h3.innerHTML = `<strong>${error}</strong>`;
//   document.getElementById('posts').appendChild(h3);
// }

// newPost({
//   title: 'Resources Every Web Developer Needs',
//   body: "I have compiled a list of the tools that have helped me over the years in building my websites for personal use and for clients. Let's get started, this is a small list compared to many other resources out there on the internet you can use to enhance the look and feel of your websites.",
// });
// .then(getPost)
// .catch(showError);

// function newPost(newPost) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;

//       if (!error) {
//         posts.push(newPost);
//         resolve();
//       } else {
//         reject('Error!');
//       }
//     });
//   }, 1000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (content) {
//       let h3 = document.createElement('h3');
//       h3.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
//       document.getElementById('posts').appendChild(h3);
//     });
//   }, 1000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (content) {
//       let h3 = document.createElement('h3');
//       h3.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
//       document.getElementById('posts').appendChild(h3);
//     });
//   }, 1000);
// }

// function showError(error) {
//   let h3 = document.createElement('h3');
//   h3.innerHTML = `<strong>${error}</strong>`;
//   document.getElementById('posts').appendChild(h3);
// }

// function showError(error) {
//   let h3 = document.createElement('h3');
//   h3.innerHTML = `<strong>${error}</strong>`;
//   document.getElementById('posts').appendChild(h3);
// }

// newPost({
//   title: 'Resources Every Web Developer Needs',
//   body: "I have compiled a list of the tools that have helped me over the years in building my websites for personal use and for clients. Let's get started, this is a small list compared to many other resources out there on the internet you can use to enhance the look and feel of your websites.",
// })
//   .then(getPosts)
//   .catch(showError)
//   .finally('✒️fin');

// .then(getPosts)
// .catch(showError);

const posts = [
  {
    title: 'CSS Cheatsheet',
    body: "CSS works by targeting specific elements in your HTML document and applying styles to them. This targeting is achieved through selectors. Selectors point to the HTML elements you want to style. Once you've selected the element, you define the styles using properties and values.",
  },
  {
    title: '25 Unnoticeable Features of JavaScript',
    body: 'Often, as developers, we write similar types of code, falling into a pattern that, while comfortable, can sometimes feel mundane.However, the world of JavaScript is vast, filled with advanced features that, when discovered and used, can transform our development work into something much more exciting and fulfilling.',
  },
];

function newPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if (!error) {
        posts.push(newPost);
        resolve();
      } else {
        reject('Error ❌');
      }
    });
  }, 1000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (content) {
      let h3 = document.createElement('h3');
      h3.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
      document.getElementById('posts').appendChild(h3);
    });
  }, 1000);
}

function showError(error) {
  let h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById('posts').appendChild(h3);
}

newPost({
  title: 'Resources Every Web Developer Needs',
  body: "I have compiled a list of the tools that have helped me over the years in building my websites for personal use and for clients. Let's get started, this is a small list compared to many other resources out there on the internet you can use to enhance the look and feel of your websites.",
})
  .then(getPosts)
  .catch(showError)
  .finally(() => {
    console.log('✒️fin');
  });
