const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = () => {
  fetch(apiURL + '?_limit=5')
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodoToDom(todo)));
};

const addTodoToDom = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-ID', todo.id);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};

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

const init = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();
//
