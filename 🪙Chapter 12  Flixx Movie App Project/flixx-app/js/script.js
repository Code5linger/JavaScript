const global = { currentPage: window.location.pathname };

console.log(global.currentPage);

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
          break;
    case 
  }
}

document.addEventListener('DOMContentLoaded', init);
