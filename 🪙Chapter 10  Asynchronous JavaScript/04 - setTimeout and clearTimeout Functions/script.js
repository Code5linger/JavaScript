// setTimeout(changeText, 2000);

// console.log('🎴');

function changeText() {
  document.querySelector('h1').textContent = '💥';
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  console.log('⏱️');
});
