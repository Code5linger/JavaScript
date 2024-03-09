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

const post = [
  {
    title: 'Computer Science fundamentals are still important.',
    body: "I feel uncomfortable admitting that when I got my job at Microsoft in 2005, I didn't know how to implement BFS (Breadth First Search). At that time, I was six years into my professional software engineering career and held a master’s degree in Computer Science.",
  },
  {
    title: '5 Key Aspects of Learning a Programming Language',
    body: 'As you guys know(or may not know), I am Debajyati Dey, currently a CS Engineering sophomore at MAKAUT WB. I have started learning programming only 1.5+ years ago ( 2 or 3 months before my University Undergraduate program started ). So you understand that I am not someone very pro at programming.',
  },
];

function getPosts() {
  setTimeout(() => {
    post.forEach(function () {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#post').appendChild(div);
    });
  }, 1000);
}

getPosts();
