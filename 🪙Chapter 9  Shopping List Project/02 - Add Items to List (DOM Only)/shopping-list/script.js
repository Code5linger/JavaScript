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

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  //
  if (itemInput.value === '') {
    alert('Please add an item');
    return;
  }

  console.log('Success');
}

//
itemForm.addEventListener('submit', addItem);
