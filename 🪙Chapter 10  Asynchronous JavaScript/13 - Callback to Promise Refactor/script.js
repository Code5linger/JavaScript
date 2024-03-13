const posts = [
  { title: 'Title One', body: 'Body One' },
  { title: 'Title Two', body: 'Body Two' },
];

function newPost(newPost, cb) {
  setTimeout(() => {
    posts.push(newPost);
    cb();
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

newPost({ title: 'Title Three', body: 'Body Three' }, getPosts);
