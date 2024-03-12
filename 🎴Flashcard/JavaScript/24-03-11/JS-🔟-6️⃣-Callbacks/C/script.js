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

function getPosts() {
  setTimeout(
    posts.forEach(function (content) {
      let div = document.createElement('div');
      div.innerHTML = `<strong>${content.title}</strong> - ${content.body}`;
      document.querySelector('.blog').appendChild(div);
    }),
    1000
  );
}

getPosts();
