const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((todos) => todos.forEach((todos) => addToDosToDOM(todos)));
};

const addToDosToDOM = (todos) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todos.title));

  if (todos.completed === true) {
    div.classList.add('done');
  }

  div.setAttribute('data-id', todos.id);

  document.querySelector('#todo-list').appendChild(div);
};

const createNewToDos = (event) => {
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
    .then((data) => addToDosToDOM(data));
};

const toggleCompleted = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');

    updateTodo(
      event.target.dataset.id,
      event.target.classList.contains('done')
    );
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      completed,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (event) => {
  const id = event.target.dataset.id;

  fetch(`${apiURL}/${id}`)
    .then((res) => res.json())
    .then(() => event.target.remove());
};

const initialze = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);

  document
    .querySelector('#todo-form')
    .addEventListener('submit', createNewToDos);

  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);

  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

initialze();

//
