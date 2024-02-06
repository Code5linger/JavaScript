const post = {
  id: 1,
  title: 'Test JS',
  body: 'Test Body',
};

console.log(post.id, typeof post);

// Convert to JSON string

const str = JSON.stringify(post);

console.log(str.id, typeof str);

// Parse JSON

const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Test JS',
    body: 'Test Body',
  },
  {
    id: 2,
    title: 'Test 2 JS',
    body: 'Test Body',
  },
];

console.log(posts.id, typeof posts);

const str2 = JSON.stringify(posts);

console.log(str2, typeof s);
