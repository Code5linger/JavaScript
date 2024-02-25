function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = '1️⃣Replaced';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>2️⃣Replaced</li>';
  // const li = document.createElement('li');
  // li.textContent = '2️⃣Replaced';

  // secondItem.replaceWith(li);
}

function replaceAllItem() {
  const li = document.querySelectorAll('li');

  // li.forEach((item, index) => {
  //   // item.outerHTML = '<li>👴Replaced</li>'
  //   if (index === 1) {
  //     item.innerHTML = '2️⃣';
  //   } else {
  //     item.outerHTML = '<li>👴Replaced</li>';
  //   }
  // });

  li.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
  );
}

replaceFirstItem();
replaceSecondItem();
replaceAllItem();

function replaceChildHeading() {
  const header = document.querySelector('header');
  console.log(header);
  const h1 = document.querySelector('header h1');
  console.log(h1);

  const h2 = document.createElement('h2');

  h2.id = 'app-title';
  h2.textContent = '🌱';

  console.log(h2);

  header.replaceChild(h2, h1);
}

replaceChildHeading();
