const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodosToDom(todo)));
};

const addTodosToDom = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));

  div.setAttribute('data-ID', todo.id);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};

const createTodo = (event) => {
  event.preventDefault();
  const newToDo = {
    title: event.target.firstElementChild.value,
    completed: false,
  };
  console.log(event.target.firstElementChild.value);

  fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newToDo),
  })
    .then((res) => res.json())
    .then((data) => addTodosToDom(data));
};

const toggleComplete = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');

    console.log(event.target.dataset.id);
  }
};

const initiate = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleComplete);
};

initiate();
