// function onClear() {
//   alert('🧼');
// }

const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//   alert('🧼');
// };

// clearBtn.onclick = function () {
//   console.log('🧼');
// };

// clearBtn.addEventListener('click', function () {
//   alert('🧼');
// });
// clearBtn.addEventListener('click', () => alert('🧼'));

// clearBtn.addEventListener('click', () => alert('🧼'));
// clearBtn.addEventListener('click', () => console.log('🧼'));

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

// function removeItem2(itemNumber) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li');

//   ul.removeChild(li);
// }

function removeClearButton() {
  // const clearBtn = document.querySelector('ul');
  // clearBtn.remove();
  // const ul = document.querySelector('ul');
  // console.log(ul);
  // const li = document.querySelectorAll('li');
  // console.log(li);
  // ul.removeChild(li);

  const items = document.querySelectorAll('li');

  items.forEach((item) => item.remove());
}

// clearBtn.addEventListener('click', () => console.log('🧼'));

clearBtn.addEventListener('click', removeClearButton);
