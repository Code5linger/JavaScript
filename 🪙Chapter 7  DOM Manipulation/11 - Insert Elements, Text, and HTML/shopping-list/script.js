// insertAdjacentElement
function insertAdjacentElementUpA() {
  const filter = document.querySelector('.filter');
  const element = document.createElement('h1');
  element.textContent = '🖼️';

  filter.insertAdjacentElement('beforebegin', element);
}

function insertAdjacentElementDownA() {
  const filter = document.querySelector('.filter');
  const element = document.createElement('h1');
  element.textContent = '🏞️';

  filter.insertAdjacentElement('afterbegin', element);
}

function insertAdjacentElementUpB() {
  const filter = document.querySelector('.filter');
  const element = document.createElement('h1');
  element.textContent = '🖼️';

  filter.insertAdjacentElement('beforeend', element);
}

function insertAdjacentElementDownB() {
  const filter = document.querySelector('.filter');
  const element = document.createElement('h1');
  element.textContent = '🏞️';

  filter.insertAdjacentElement('afterend', element);
}

// insertAdjacentElementUpA();
// insertAdjacentElementDownA();
// insertAdjacentElementUpB();
// insertAdjacentElementDownB();

function insertAdjacentTextUpA() {
  const filter = document.querySelector('.filter');

  filter.insertAdjacentText('beforebegin', 'CodeSlinger Was Here⬆️🅰️');
}

function insertAdjacentTextUpB() {
  const filter = document.querySelector('.filter');

  filter.insertAdjacentText('afterbegin', 'CodeSlinger Was Here⬆️🅱️');
}

function insertAdjacentTextDownA() {
  const filter = document.querySelector('.filter');

  filter.insertAdjacentText('beforeend', 'CodeSlinger Was Here⬇️🅰️');
}

function insertAdjacentTextDownB() {
  const filter = document.querySelector('.filter');

  filter.insertAdjacentText('afterend', 'CodeSlinger Was Here⬇️🅱️');
}

// insertAdjacentTextUpA();
// insertAdjacentTextUpB();
// insertAdjacentTextDownA();
// insertAdjacentTextDownB();

// insertAdjacentHTML
function insertAdjacentHTMLUpA() {
  const clearBTN = document.querySelector('#clear');

  clearBTN.insertAdjacentHTML(
    'beforebegin',
    '<h4>CodeSlinger Was Here⬆️🅰️</h4>'
  );
}

function insertAdjacentHTMLUpB() {
  const clearBTN = document.querySelector('#clear');

  clearBTN.insertAdjacentHTML(
    'afterbegin',
    '<h4>CodeSlinger Was Here⬆️🅱️</h4>'
  );
}

function insertAdjacentHTMLDownA() {
  const clearBTN = document.querySelector('#clear');

  clearBTN.insertAdjacentHTML('beforeend', '<h4>CodeSlinger Was Here⬇️🅰️</h4>');
}

function insertAdjacentHTMLDownB() {
  const clearBTN = document.querySelector('#clear');

  clearBTN.insertAdjacentHTML('afterend', '<h4>CodeSlinger Was Here⬇️🅱️</h4>');
}

insertAdjacentHTMLUpA();
insertAdjacentHTMLUpB();
insertAdjacentHTMLDownA();
insertAdjacentHTMLDownB();

// beforebegin
// afterbegin
// beforeend
// afterend
