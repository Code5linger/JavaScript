// function toggleBtnBGColor(event) {
//   event.target.classList.toggle('danger');
// }

// document.querySelector('#btn').addEventListener('click', toggleBtnBGColor);

const posts = [
  {
    title: '10 Must have VS Code Extensions for Developers in 2024',
    body: 'Sometimes you can feel lost when you are trying to figure out a structure of your project in a code editor. However, with this extension this process will become more user-friendly. Material Icon Theme gives your files and folders simple icons which increase the clarity of this list.',
  },
  {
    title: 'My New Portfolio!',
    body: 'What does 90% React mean? (Or any of the skills to be honest)Do you know 90% of the React library from the top of your headI learned this later as well after doing this in my portfolio, but its better to just mention what you work with and where you have the most experience in. Percentages dont mean anything to a lot of people and can be interpreted in a lot of ways.',
  },
];

function newPost(newContent, cb) {
  setTimeout(() => {
    posts.push(newContent);
    cb();
  }, 1000);
}

function getPost() {
  setTimeout(() => {
    posts.forEach(function (test) {
      const div = document.createElement('div');
      div.innerHTML = `${test.title} - ${test.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

newPost({ title: 'Title', body: 'body' }, getPost);

// ❌   3   4   5
