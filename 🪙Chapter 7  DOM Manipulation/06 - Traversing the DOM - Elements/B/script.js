// let initalStage = 4 * 60 + 44; // 284

// let minIncrement = 284 / 33.3; //3 %

// let goal = 858; // 100HourWeek

// let days = 0;

// for (let i = initalStage; i <= goal; i = i + minIncrement) {
//   let minutes = Math.floor(i % 60);
//   let hour = Math.floor(i / 60);

//   console.log(`On day ${days} work for ${hour} Hour and ${minutes} minutes`);
//   days++;
// }
const parent = document.querySelector('.parent');

// console.log(parent);

// const children = parent.children;

// console.log((children[1].innerText = 'CopaSamsu'));

// children[2].style.color = 'crimson';

// parent.firstElementChild.innerText = '🤷';
// parent.lastElementChild.innerText = '🤷‍♀️';

// Get Parent Element
// const child = document.querySelector('.child');

// child.parentElement.style.border = '2px solid red';

// Sibling Element
const secondItem = document.querySelector('.child:nth-child(2)');

secondItem.previousElementSibling.style.color = 'red';

secondItem.nextElementSibling.style.color = 'green';

console.log(secondItem);
