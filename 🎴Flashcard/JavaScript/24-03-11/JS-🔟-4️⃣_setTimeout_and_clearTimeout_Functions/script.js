function replaceText() {
  document.querySelector('h1').innerHTML = '🔥';
}

const timer = setTimeout(replaceText, 2000);

function cancelTextReplaceText() {
  document
    .querySelector('#cancelTextReplased')
    .addEventListener('click', () => {
      clearTimeout(timer);
      console.log('🌋');
    });
}

cancelTextReplaceText();
