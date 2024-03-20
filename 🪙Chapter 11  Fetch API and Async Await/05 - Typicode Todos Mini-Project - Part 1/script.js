// API
const apiURL = 'https://jsonplaceholder.typicode.com/todos';
// Fetching PIT
const fetchAPI = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((todo) => todo.forEach((todo) => addTodosToDOM(todo)));
};

const addTodosToDOM = (todo, completed) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));

  if (todo.completed === true) {
    //⛑️
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};

// Adding new Todo

// Updating Todo

// Deleting TODO

fetchAPI();
