function toggleBtnBG(event) {
  event.target.classList.toggle('danger');
}

document.querySelector('#btn').addEventListener('click', toggleBtnBG);

//

const posts = [
  {
    title: 'Setting Up Obsidian for Content Planning and Project Management',
    body: 'Obsidian is a writing application created to allow for offline / private note taking in markdown format, in an interface that looks a lot like our regular programming IDE. It is very flexible, with a good collection of community plugins that you can use to customize Obsidian to your heart contents.',
  },
  {
    title: 'I Published This with Drag and Drop using Vrite',
    body: 'For many developers, blogging and technical writing play a key role in building their portfolio, sharing their projects, and for some — even in their day-to-day work. That’s why developer-centric platforms like DEV and Hashnode, and even more general ones, like Medium, are full of interesting technical content. The only problem with technical writing is in the actual writing and publishing process.',
  },
];

function newPost(xxx, cb) {
  setTimeout(() => {
    posts.push(xxx);
    cb();
  }, 1000);
}

function getApi() {
  setTimeout(() => {
    posts.forEach(function (content) {
      let div = document.createElement('div');
      div.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
      document.querySelector('.posts').appendChild(div);
    });
  }, 1000);
}

newPost(
  {
    title: '10 Must have VS Code Extensions for Developers in 2024',
    body: 'Sometimes you can feel lost when you are trying to figure out a structure of your project in a code editor. However, with this extension this process will become more user-friendly. Material Icon Theme gives your files and folders simple icons which increase the clarity of this list.',
  },
  getApi
);
