// function toggleBtnBgColor(event) {
//   event.target.classList.toggle('danger');
// }

// document.querySelector('#btn').addEventListener('click', toggleBtnBgColor);

const apiPlaceholder = [
  {
    title: '12 Tips for Acing MAANG Software Engineering Interviews',
    body: 'Landing a software engineering role at a tech giant like Meta, Amazon, Apple, Netflix, or Google (MAANG) is a career milestone for many developers. However, the interview process at these companies is notoriously challenging, testing candidates on a wide range of technical and non-technical skills. To increase your chances of success, thorough preparation is crucial. Here are 12 proven tips to help you crack the code and ace your MAANG software engineering interview',
  },
  {
    title: 'Tech Lead Software Setup - 2024 Edition',
    body: 'MindMeister uses AI to enhance mind mapping, allowing you to brainstorm and organize ideas more effectively. Leverage intelligent features for better visualization and planning.Copy.ai is a valuable AI tool for content creators: marketers and sales teams looking to leverage the full power of AI to create top-notch content that resonates with their target audience.',
  },
];

// function getApi() {
//   setTimeout(function () {
//       apiPlaceholder.forEach(
//           document.createElement('div');

//       );
//   }, 1000);
// }

function getApi() {
  setTimeout(() => {
    apiPlaceholder.forEach(function (xxx) {
      const div = document.createElement('div');
      div.innerHTML = `${xxx.title} - ${xxx.body}`;
      document.querySelector('#posts').append(div);
    });
  }, 1000);
}

getApi();
