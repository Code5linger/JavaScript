// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Add an event listener on all items
// // listItems.forEach((item) => {
// //   item.addEventListener('click', (e) => {
// //     e.target.remove();
// //   });
// // });

// // Add a single event listener on the parent (Event Delegation)
// list.addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.remove();
//   }
// });

// list.addEventListener('mouseover', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.style.color = 'red';
//   }
// });

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

console.log(listItems);
console.log(list);

// listItems.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     event.target.remove();
//   });
// });

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});

list.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.color = 'red';
  }
});
