const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchData = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((data) =>
      data.forEach((todo) => {
        todoDOM(todo);
      })
    );
};

const todoDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};

const createNewToDos = (event) => {
  event.preventDefault();

  fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: event.target.firstElementChild.value,
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => todoDOM(data));
};

const toggleComplete = (event) => {
  if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');

    console.log(event.target.dataset.id);
  }
};

const initialze = () => {
  document.addEventListener('DOMContentLoaded', fetchData);
  document
    .querySelector('#todo-form')
    .addEventListener('submit', createNewToDos);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleComplete);
};

initialze();
