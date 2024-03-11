function currentTime() {
  console.log(Date.now());
}

// setInterval(currentTime, 2000);

document
  .querySelector('#start')
  .addEventListener(
    'click',
    () => (startTimer = setInterval(currentTime, 1000))
  );

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(startTimer);
  console.log('🔥');
});
