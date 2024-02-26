const logo = document.querySelector('img');

function onClick(event) {
  // console.log(event.target);
  // console.log(event.currentTarget);
  // event.target.style.backgroundColor = 'black';
  // console.log(event.type);
  // console.log(event.timeStamp);
  // console.log(event.clientX);
  // console.log(event.clientY);
  // console.log(event.offsetX);
  // console.log(event.offsetY);
  // console.log(event.pageX);
  // console.log(event.pageY);
  // console.log(event.screenX);
  // console.log(event.screenY);
}

function onDrag(event) {
  document.querySelector(
    'h1'
  ).textContent = `X ${event.clientX} Y ${event.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

// document.body.addEventListener('click', function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// function linkCloser(event) {
//   event.preventDefault();
//   console.log('Link was clicked🖱️');
// }

// document.querySelector('a').addEventListener('click', linkCloser);
