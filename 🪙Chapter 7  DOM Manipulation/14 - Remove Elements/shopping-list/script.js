function removeClearButton() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.remove();
}

// removeClearButton();

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// removeFirstItem();

// function removeItem(itemNumber) {}

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

// removeItem(2);

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

removeItem2(1);
