// // 04 - Fetch Options - Method, Body Headers
// console.log('Test');

// //

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// //

// function createPost(post) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: post.title,
//       body: post.body,
//     }),
//   });
// }

//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function fetchTitle(data) {
//   return data;
// }

// console.log(fetchTitle());

// function createPost() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost();
// function createPost({ title, body }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       //   hello: 'World',
//       token: '69420',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'Test', body: 'Test' });

// function createPost({ title, body }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       token: '69420',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'Test', body: 'Test' });

// function createPost({ title, body }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       token: '69420',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'Test', body: 'Test' });

// function createPost({ title, body }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       token: 69420,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'Test', body: 'Test' });

// Method   ✔️
// HeaderS
// Body

// function createPost({ title, body }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       hello: 'World',
//       token: 42069,
//     },
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'Test', body: 'Test' });
// createPost({ title: 'TestA', body: 'TestA' });

// function createPost({ body, title }) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       hello: 'World',
//       token: 69420,
//     },
//     body: JSON.stringify({
//       body,
//       title,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ body: 'Test', title: 'Test' });

// const getTitle = () => {
//   fetch(apiURL)
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((title) => console.log(title.title));
//       console.log(data);
//     });
// };

// getTitle();
// console.log('Test');

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

const getTitle = () => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => console.log(todo.title));
    });
};

getTitle();
