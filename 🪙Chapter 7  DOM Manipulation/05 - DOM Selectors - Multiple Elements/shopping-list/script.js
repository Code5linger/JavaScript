//
//
//
//
//
//
//
// document.links[0].className = 'google-class';

// console.log(document.images[0].src);
// const forms = Array.from(document.forms);
// forms.forEach((from) => console.log(from));

// console.log(forms);

//

// document.getElementById();

// console.log(document.getElementById('app-title'));

// console.log(document.getElementById('app-title').className);

// console.log(document.getElementById('app-title').getAttribute('id'));

// console.log(document.getElementById('app-title').getAttribute('class'));

//Set attributes
// console.log((document.getElementById('app-title').title = '🙃🤪'));

// console.log(document.getElementById('app-title').setAttribute('class', '🙃🤪'));

const title = document.getElementById('app-title');

// console.log(title);

// Get/Change Content
// console.log(title.textContent);
// title.textContent = 'Copa Samsu';

// console.log(title.textContent);

// title.innerText = 'Copa Samsu';

// console.log(title.innerText);
// title.innerHTML = '<strong>cowabunga</strong>';

// title.style.backgroundColor = 'crimson';
// title.style.color = 'white';
// title.style.padding = '1rem';

// document.querySelector()
// console.log(document.querySelector('h1'));

// console.log(document.querySelector('#app-title'));

// console.log(document.querySelector('.container'));

// console.log(document.querySelector('input[type="text"]'));

// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');

// console.log(secondItem);

// secondItem.innerText = 'Copasamsu';

// secondItem.style.color = 'crimson';

// const list = document.querySelector('ul');

// console.log(list);

// const firstItem = list.querySelector('li');

// console.log(firstItem.innerText);

// firstItem.style.color = 'yellow';

// querySelectorAll();

// const listItems = document.querySelectorAll('li');

// console.log(listItems);

const listItemsByClass = document.querySelectorAll('.item');

// console.log(listItemsByClass[1].innerText);

// listItemsByClass[1].style.color = 'red';

// listItemsByClass.forEach((item, index) => {
//   if (index === 0) {
//     item.innerHTML = `🍑
//     <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>
//       `;
//   }
// });

// const listItems = document.getElementsByClassName('item');

// const listItemsArray = Array.from(listItems);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });

// const listItems = document.getElementsByTagName('li');

// const listItemsArray = Array.from(listItems);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });
