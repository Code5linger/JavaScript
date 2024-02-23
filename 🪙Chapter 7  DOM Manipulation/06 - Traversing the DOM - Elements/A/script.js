// Get child elements
// let output = parent.children;

const parent = document.querySelector('.parent');

// console.dir(parent);

let output = parent.children[1].nodeName;

parent.children[1].innerText = '2️⃣';

parent.children[2].style.color = 'red';

console.log(parent.firstElementChild);
