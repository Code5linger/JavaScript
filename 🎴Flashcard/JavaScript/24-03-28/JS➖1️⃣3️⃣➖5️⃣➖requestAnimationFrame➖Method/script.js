const image = document.querySelector('img');

let start;
let stop = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed >= 2000) {
    stop = true;
  }

  if (stop) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 20}px)`;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);
