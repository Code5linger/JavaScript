// const itemForm = document.getElementById('item-form');
// const itemInput = document.getElementById('item-Input');
// const itemList = document.getElementById('item-List');

// function addItem(event) {
//   event.preventDefault();

//   // Validate Input
//   if (itemInput.value === '') {
//     alert('Please add an item');
//     return;
//   }

//   console.log('success');
// }

// // Event Listeners
// itemForm.addEventListener('submit', addItem);

// const itemForm = document.getElementById('item-form');
// const itemInput = document.getElementById('item-input');
// const itemList = document.getElementById('item-list');

// const itemForm = document.getElementById('item-form');
// const itemInput = document.getElementById('item-input');
// const itemList = document.getElementById('item-list');

// function addItem(e) {
//   e.preventDefault();

//   //
//   if (itemInput.value === '') {
//     alert('Please add an item');
//     return;
//   }

//   console.log('Success');
// }

// //
// itemForm.addEventListener('submit', addItem);

// let increment = 1;
// let day = 0;

// let current = 5;

// let complete = 180;

// let left = 180;

// for (let i = 6; i <= left; i = increment) {
//   increment = current + increment;
//   increment++;
//   left - i;
//   day++;
//   console.log(
//     `Days ${day} || Todays lessons ${i} || Lessons left ${complete - i} `
//   );
// }

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function displayItems() {
  const itemFormStorage = getItemsFromStorage();
  itemFormStorage.forEach((item) => addItemToDOM(item));

  checkUI();
}

function onAddItemSubmit(event) {
  event.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Add Item');
    return;
  }

  // Create item to
  addItemToDOM(newItem);

  // Add item to
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';
}

function addItemToDOM(item) {
  // Create List Item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// 🫙

function addItemToStorage(item) {
  const itemFormStorage = getItemsFromStorage();

  itemFormStorage.push(item);

  // Convert to JSON string and set to
  localStorage.setItem('items', JSON.stringify(itemFormStorage));
}

function getItemsFromStorage() {
  let itemFormStorage;

  if (localStorage.getItem('items') === null) {
    itemFormStorage = [];
  } else {
    itemFormStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemFormStorage;
}

function removeItem(event) {
  if (event.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Sure??')) {
      event.target.parentElement.parentElement.remove();

      checkUI();
    }
  }
}

function filterItems(event) {
  const items = itemList.querySelectorAll('li');
  const text = event.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

function clearItem() {
  // itemList.innerHTML = '';
  while (itemList) {
    itemList.removeChild(itemList.firstChild);
  }
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Initialize app
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItem);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}

// localStorage.setItem('firstName', 'Elrick');
// localStorage.setItem('lastName', 'Ashford');

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('firstName'));
// console.log(localStorage.getItem('lastName'));

// localStorage.removeItem('name');
// console.log(localStorage.getItem('name'));
// localStorage.clear();

init();
