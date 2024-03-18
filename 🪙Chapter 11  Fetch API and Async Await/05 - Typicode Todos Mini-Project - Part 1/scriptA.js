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
  console.log(div);

  document.querySelector('#todo-list').appendChild(div);
};

fetchData();
