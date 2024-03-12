// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (content) {
//       let div = document.createElement('div');
//       div.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
//       document.querySelector('.blog').appendChild(div);
//     });
//   }, 1000);
// }

// function newPost(newPost, cb) {
//   setTimeout(() => {
//     posts.push(newPost);
//     cb();
//   }, 2000);
// }

// newPost({ title: 'Title', body: 'Body' }, getPosts);

// getPosts();

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (content) {
//       let div = document.createElement('div');
//       div.innerHTML = `${content.title} - ${content.body}`;
//       document.querySelector('.blog').appendChild(div);
//     });
//   }, 1000);
// }

// getPosts();

function toggleBtnBG(event) {
  event.target.classList.toggle('danger');
}

document.querySelector('#btn').addEventListener('click', toggleBtnBG);

const posts = [
  {
    title: 'Build an awesome developer portfolio website.',
    body: 'As a software developer, its important to have a robust portfolio website that can display our abilities and experiences. To assist other developers, I have designed a portfolio website using Next, Tailwind CSS, and EmailJS. In this article, I will provide a step-by-step guide on the setup process, along with the GitHub link.',
  },
  {
    title: '10 Must have VS Code Extensions for Developers in 2024',
    body: 'Sometimes you can feel lost when you are trying to figure out a structure of your project in a code editor. However, with this extension this process will become more user-friendly. Material Icon Theme gives your files and folders simple icons which increase the clarity of this list.',
  },
];

function newPost(xxx, cb) {
  setTimeout(() => {
    posts.push(xxx);
    cb();
  }, 1000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (content) {
      let div = document.createElement('div');
      div.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
      document.querySelector('.blog').appendChild(div);
    });
  }, 1000);
}

newPost(
  {
    title: 'How to Never Forget: Mastering the Art of Retaining Knowledge',
    body: 'First and foremost, we really need to relearn how to read a book. When we are starting out, we often think that reading a book simply involves spelling out words sequentially, constructing phrases, followed by paragraphs, and eventually chapters. However, this approach is perhaps the least effective way to truly absorb and retain the content. It leads us directly into the pitfall of the forgetting curve, which is a topic I address more thoroughly in another article.',
  },
  getPosts
);

// getPosts();
