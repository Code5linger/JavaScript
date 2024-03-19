const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((todos) => todos.forEach((todos) => addToDosToDOM(todos)));
};

const addToDosToDOM = (todos) => {
  const div = document.createElement('div');
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
  event.target.classList.toggle('done');
};

const initialze = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);
  document
    .querySelector('#todo-form')
    .addEventListener('submit', createNewToDos);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
};

initialze();

//
