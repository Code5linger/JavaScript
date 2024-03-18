// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// const getTODOs = () => {
//   fetch(apiURL + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         console.log(todo.title);
//         console.log(todo.completed);
//         console.log(todo);
//       });
//     });
// };

// getTODOs();

const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTODOs = () => {
  fetch(apiURL + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        console.log(todo.title);
        console.log(todo.completed);
        // console.log(todo);
      });
    });
};

getTODOs();
