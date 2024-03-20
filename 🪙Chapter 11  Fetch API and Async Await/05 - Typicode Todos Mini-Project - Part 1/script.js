// API
const apiURL = 'https://jsonplaceholder.typicode.com/todos';
// Fetching PIT
const fetchAPI = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((todo) => todo.forEach((todo) => addTodosToDOM(todo)));
};

const addTodosToDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed === true) {
    //⛑️
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};

// Adding new Todo
const addingNewToDO = (event) => {
  event.preventDefault();

  fetch(apiURL, {
    //⛑️
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: event.target.firstElementChild.value,
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => addTodosToDOM(data));
};

// Updating Todo
const toggleComplete = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done'); //⛑️

    updateToDo(
      event.target.dataset.id,
      event.target.classList.contains('done')
    );
  }
};

const updateToDo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed,
    }),
  });
};

// Deleting TODO
const deleteTODO = (event) => {
  if (event.target.classList.contains('todo')) {
    const id = event.target.dataset.id;
    fetch(`${apiURL}/${id}`)
      .then((res) => res.json())
      .then(() => event.target.remove());
  }
};

// Event Manager
const initialze = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);

  document
    .querySelector('#todo-form')
    .addEventListener('submit', addingNewToDO);

  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleComplete);

  document.querySelector('#todo-list').addEventListener('dblclick', deleteTODO);
};

initialze();
