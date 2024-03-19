const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchApi = () => {
  fetch(apiURL + '?_limit=5')
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodosToDOM(todo)));
};

const addTodosToDOM = (todo) => {
  const div = document.createElement('div');
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

const initiate = () => {
  document.addEventListener('DOMContentLoaded', fetchApi);
  document.querySelector('#todo-form').addEventListener('submit', addNewToDos);
};

initiate();
