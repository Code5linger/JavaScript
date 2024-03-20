// API - Init ⬇️⬇️
const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodoToDom(todo)));
};

const addTodoToDom = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.classList.add('todo');
  div.setAttribute('data-ID', todo.id);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};
// API - End  ⬆️⬆️

// Creating TODO
const createTodo = (event) => {
  event.preventDefault();
  const newTodo = {
    title: event.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data));
};

// Edit Todo - Start -
const toggleCompleted = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');

    updateTodo(
      event.target.dataset.id,
      event.target.classList.contains('done')
    );
  }
};
//  Send Edited Todo's to server
const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
};
// Edit Todo - End
// Delete Todo
const deleteTodo = (event) => {
  if (event.target.classList.contains('todo')) {
    const id = event.target.dataset.id;
    fetch(`${apiURL}/${id}`)
      .then((res) => res.json())
      .then(() => {
        event.target.remove();
      });
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);

  document.querySelector('#todo-form').addEventListener('submit', createTodo);

  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);

  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();
