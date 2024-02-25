// const li = document.createElement('li');
// li.textContent = 'Insert Me After!';

// console.log(li);

// const firstItem = document.querySelector('li:first-child');

// console.log(firstItem);

// function insertAfter(element, text) {
//   const existingEl = document.querySelector(element);

//   const newEl = document.createElement('li');
//   newEl.innerHTML = `${text}
//   <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>`;

//   console.log(newEl);
//   newEl.insertAdjacentElement('afterend', existingEl);

//   document.querySelector(element).appendChild(newEl);
// }

// insertAfter('ul', '🅰️');
// insertAfter('body', '🅰️');
// insertAfter('ul', '🅰️');
// insertAfter('ul', '🅰️');
// insertAfter('ul', '🅰️');
// insertAfter('li', '🅱️');
// insertAfter('.filter', '©️');

// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

// const li = document.createElement('li');
// li.textContent = 'Insert Me After!';

// const firstItem = document.querySelector('li:first-child');

// insertAfter(li, firstItem);

// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

function insertAfter(newEl, existingEl) {
  console.log(existingEl.parentNode);
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const li = document.createElement('li');
li.textContent = '🦐';

const firstItem = document.querySelector('li:first-child');

insertAfter(li, firstItem);
