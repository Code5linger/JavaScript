//
function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      hello: 'world',
      token: '69420',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: 'Test', body: 'Test' });
