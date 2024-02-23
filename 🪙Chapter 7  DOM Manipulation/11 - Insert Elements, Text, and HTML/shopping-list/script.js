// // Quick
// // function createListItem(item) {
// //   const li = document.createElement('li');

// //   li.innerHTML = `${item}
// //           <button class="remove-item btn-link text-red">
// //             <i class="fa-solid fa-xmark"></i>
// //           </button>`;

// //   document.querySelector('.items').appendChild(li);
// // }

// // Better
// function createNewItem(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const button = createButton('remove-item btn-link text-red');

//   li.appendChild(button);

//   console.log(li.innerHTML);

//   document.querySelector('.items').appendChild(li);
// }

// function createButton(classes) {
//   const button = document.createElement('button');
//   button.className = classes;

//   const icon = createIcon('fa-solid fa-xmark');

//   button.appendChild(icon);

//   return button;
// }

// function createIcon(classes) {
//   const icon = document.createElement('i');
//   icon.className = classes;
//   return icon;
// }

// // createListItem('Eggs');
// createNewItem('Biriani🍚');
// createNewItem('Noodls🍜');

function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentElement');
}

function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirditem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirditem);
}

// insertElement();
// insertText();
// insertHTML();
insertBeforeItem();
