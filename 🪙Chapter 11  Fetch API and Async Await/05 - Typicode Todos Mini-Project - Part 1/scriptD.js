const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchApi = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodosToDOM(todo)));
};

const addTodosToDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));

  document.querySelector('#todo-list').appendChild(div);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  div.setAttribute('data-id', todo.id);
};

const addNewToDos = (event) => {
  event.preventDefault();
  //   console.log(event.target.firstElementChild.value);

  fetch(apiURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      title: event.target.firstElementChild.value,
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => addTodosToDOM(data));
};

const toggleCompleted = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');
  }
  // event.target.classList.toggle('done');
};

const initiate = () => {
  document.addEventListener('DOMContentLoaded', fetchApi);
  document.querySelector('#todo-form').addEventListener('submit', addNewToDos);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
};

initiate();
