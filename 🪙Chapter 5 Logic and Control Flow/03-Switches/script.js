const d = new Date();
const month = d.getMonth() + 1;

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('🦥 Too lazy to type');
}

const hour = 22;

switch (true) {
  case hour < 12:
    console.log('🌅');
    break;
  case hour < 18 && hour >= 22:
    console.log('☀️');
    break;
  default:
    console.log('🌆');
}
