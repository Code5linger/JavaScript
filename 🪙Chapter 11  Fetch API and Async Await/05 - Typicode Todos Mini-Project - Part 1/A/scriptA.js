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

    updateTodo(
      event.target.dataset.id,
      event.target.classList.contains('done')
    );
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const deleteTodo = (event) => {
  if (event.target.classList.contains('todo')) {
    const id = event.target.dataset.id;
    fetch(`${apiURL}/${id}`)
      .then((res) => res.json())
      .then(() => event.target.remove());
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

  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

initialze();

<CLg></CLg>;
