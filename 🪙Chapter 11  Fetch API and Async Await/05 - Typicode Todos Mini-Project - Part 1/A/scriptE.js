const apiURl = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = () => {
  fetch(apiURl + '?_limit=10')
    .then((response) => response.json())
    .then((todo) => todo.forEach((todo) => addToDosToDom(todo)));
};

const addToDosToDom = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));

  document.querySelector('#todo-list').appendChild(div);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  div.setAttribute('data-id', todo.id);
};

const addNewTodos = (event) => {
  event.preventDefault();
  console.log(event.target.firstElementChild.value);

  fetch(apiURl, {
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
    .then((data) => addToDosToDom(data));
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
  fetch(`${apiURl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed,
    }),
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (event) => {
  const id = event.target.dataset.id;

  fetch(`${apiURl}/${id}`)
    .then((res) => res.json())
    .then(() => event.target.remove());
};

const initiate = () => {
  document.addEventListener('DOMContentLoaded', fetchAPI);

  document.querySelector('#todo-form').addEventListener('submit', addNewTodos);

  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);

  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

initiate();
