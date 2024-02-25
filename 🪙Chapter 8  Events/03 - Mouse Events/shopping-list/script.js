const logo = document.querySelector('img');

const onClick = () => console.log('🦐');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'gray') {
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('🤯');
const onMouseUp = () => console.log('🌋');
const onMouseDown = () => console.log('⛷️');
const onMouseWheel = () => console.log('🛞');
const onMouseOver = () => console.log('⭕');

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseUp);
logo.addEventListener('mouseup', onMouseDown);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
