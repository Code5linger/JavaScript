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

function addItem(event) {
  event.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Add Item');
    return;
  }

  // Create List Item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  console.log(li);
  itemList.appendChild(li);

  itemInput.value = '';
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

// Event Listeners
itemForm.addEventListener('submit', addItem);
