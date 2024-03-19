const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((todo) => todo.forEach((todo) => addTodosToDom(todo)));
};

const addTodosToDom = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  document.querySelector('#todo-list').appendChild(div);

  if (todo.completed) {
    div.classList.add('done');
  }

  div.setAttribute('data-id', todo.id);
};

const addNewTodos = (event) => {
  event.preventDefault();
  console.log(event.target.firstElementChild.value);

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
    .then((data) => addTodosToDom(data));
};

const initiat = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);
  document.querySelector('#todo-form').addEventListener('submit', addNewTodos);
};

initiat();
