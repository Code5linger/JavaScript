// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         console.log(todo.title);
//         console.log(todo.completed);
//         console.log(todo);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//           console.log(todo.title);
//         console.log(todo.completed);

//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));
//         document.getElementById('todo-list').appendChild(div);
// });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);
//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);
//         document.querySelector('#todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         console.log(todo.title);

//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);
//         document.querySelector('#todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);
//         document.querySelector('#todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         console.log(todo.title);

//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.querySelector('#todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         console.log(todo.title);

//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);

//         if (todo.completed === true) {
//           div.classList.add('done');
//         }
//         document.querySelector('#todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         console.log(todo.title);

//         const div = document.createElement('div');
//         const divFetched = document.createTextNode(todo.title);

//         div.appendChild(divFetched);
//         div.setAttribute('data-id', todo.id);

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.querySelector('#todo-list').appendChild(div);
//       });
//     });
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addToDoDOM(todo));
//     });
// };

// const addToDoDOM = (todo) => {
//   console.log(todo.title);

//   const div = document.createElement('div');
//   const divFetched = document.createTextNode(todo.title);

//   div.setAttribute('data-id', todo.id);

//   if (todo.completed === true) {
//     div.classList.add('done');
//   }

//   div.appendChild(divFetched);
//   document.querySelector('#todo-list').appendChild(div);
// };

// getTODOs();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoDOM(todo));
//     });
// };

// const addTodoDOM = (todo) => {
//   console.log(todo.title);

//   const div = document.createElement('div');
//   const divFetched = document.createTextNode(todo.title);

//   div.appendChild(divFetched);

//   div.setAttribute('data-id', todo.id);

//   if (todo.completed === true) {
//     div.classList.add('done');
//   }

//   document.querySelector('#todo-list').appendChild(div);
// };

// getTODOs();

const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTODOs = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoDOM(todo));
    });
};

const addTodoDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));

  div.setAttribute('data-id', todo.id);

  if (todo.completed === true) {
    div.classList.add('done');
  }
  document.querySelector('#todo-list').appendChild(div);
};

const createTODOs = (event) => {
  event.preventDefault();

  console.log(event.target.firstElementChild.value);

  fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: event.target.firstElementChild.value,
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => addTodoDOM(data));
};

const toggleComplete = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');

    updateTodo();
    console.log(event.target.dataset.id);
  }
};

const updateTodo = (id, completed) => {};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTODOs);
  document.querySelector('#todo-form').addEventListener('submit', createTODOs);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleComplete);
};

init();

console.log();
