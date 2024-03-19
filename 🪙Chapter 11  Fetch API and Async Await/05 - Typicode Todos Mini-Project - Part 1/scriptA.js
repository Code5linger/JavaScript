const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const fetchData = () => {
  fetch(apiURL + '?_limit=5')
    .then((res) => res.json())
    .then((data) =>
      data.forEach((todo) => {
        todoDOM(todo);
      })
    );
};

const todoDOM = (todo) => {
  const div = document.createElement('div');
  const fetchedDiv = document.createTextNode(todo.title);
  div.appendChild(fetchedDiv);

  div.setAttribute('data-id', todo.id);

  if (todo.completed === true) {
    div.classList.add('done');
  }

  document.querySelector('#todo-list').appendChild(div);
};

fetchData();
