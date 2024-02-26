const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(event) {
  heading.textContent = event.target.value;
}

function onFocus() {
  console.log('👁️');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'crimson';
}
function onBlur() {
  console.log('👓');
}

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

itemInput.addEventListener('keydown', onInput);
