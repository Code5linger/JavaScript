// 🎴   ✅ 1,     ❌    2°  3°  4   5,
console.log(); //1
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'crimson';
// ctx.fillRect(50, 50, 300, 300);
// ctx.fillRect(X, Y, Width, Height);

console.log(); //2
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'crimson';
// ctx.fillRect(10, 10, 150, 100);

console.log(); //3
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'crimson';
// ctx.fillRect(10, 10, 150, 100);

console.log(); //4
// const canvas = document.querySelector('#myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'crimson';
// ctx.fillRect(10, 10, 150, 100);

console.log(); //5
// const canvas = document.querySelector('#myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'crimson';
// ctx.fillRect(10, 10, 150, 100);

console.log(); //6
// const canvas2D = document.querySelector('#myCanvas').getContext('2d');

// canvas2D.fillStyle = 'crimson';
// canvas2D.fillRect(10, 10, 150, 100);

console.log(); //7
// const canvas = document.querySelector('#myCanvas').getContext('2d');

// canvas.fillStyle = 'crimson';
// canvas.fillRect(10, 10, 150, 100);

console.log(); //8
// const canvas = document.querySelector('#myCanvas').getContext('2d');

// canvas.fillStyle = 'crimson';
// canvas.fillRect(10, 10, 150, 100);

console.log(); //9
// const canvas = document.querySelector('#myCanvas').getContext('2d');

// canvas.fillStyle = 'crimson';
// canvas.fillRect(10, 10, 150, 100);

console.log(); //10
const canvas2D = document.querySelector('#myCanvas').getContext('2d');

canvas2D.fillStyle = 'crimson';
canvas2D.fillRect(10, 10, 150, 100); // Rect
console.log(); //1
// canvas2D.arc(250, 250, 100, 0, Math.PI * 2); //Circle
// canvas2D.fill();
// canvas2D.arc(50, 450, 100, 0, Math.PI * 2);
// canvas2D.fill();
// canvas2D.arc(980, 480, 100, 0, Math.PI * 2);
// canvas2D.fill();
// canvas2D.arc(980, 30, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //2
// canvas2D.arc(250, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //3
// canvas2D.fillStyle = 'yellowGreen';
// canvas2D.arc(250, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //4
// canvas2D.fillStyle = 'yellowgreen';
// canvas2D.arc(250, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //5
// canvas2D.fillStyle = 'yellowgreen';
// canvas2D.arc(250, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //6
// canvas2D.fillStyle = 'white';
// canvas2D.arc(300, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //7
// canvas2D.fillStyle = 'lime';
// canvas2D.arc(300, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //8
// canvas2D.fillStyle = 'white';
// canvas2D.arc(300, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //9
// canvas2D.fillStyle = 'red';
// canvas2D.arc(300, 250, 100, 0, Math.PI * 2);
// canvas2D.fill();

console.log(); //10
canvas2D.fillStyle = 'gray';
canvas2D.arc(300, 250, 100, 0, Math.PI * 2);
canvas2D.fill();

console.log(); //1
// canvas2D.beginPath();
// canvas2D.strokeStyle = 'white';
// canvas2D.lineWidth = 5;
// canvas2D.moveTo(0, 0);
// canvas2D.lineTo(1702, 850);
// canvas2D.stroke();

console.log(); //2
// canvas2D.beginPath();
// canvas2D.strokeStyle = 'white';
// canvas2D.lineWidth = 5;
// canvas2D.moveTo(0, 0);
// canvas2D.lineTo(1702, 850);
// canvas2D.stroke();

console.log(); //3
canvas2D.beginPath();
canvas2D.strokeStyle = 'white';
canvas2D.lineWidth = 5;
canvas2D.moveTo(0, 0);
canvas2D.lineTo(1702, 850);
canvas2D.stroke();

console.log(); //1
// canvas2D.font = '30px Arial';
// canvas2D.fillStyle = 'white';
// canvas2D.fillText('Codeslinger', 600, 400, 500);

console.log(); //2
// canvas2D.font = '30px Arial';
// canvas2D.fillStyle = 'white';
// canvas2D.fillText('Codeslinger', 500, 400, 300);

console.log(); //3

canvas2D.font = '60px';
canvas2D.fillStyle = 'white';
canvas2D.fillText('Codeslinger', 500, 300, 300);

const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () =>
  canvas2D.drawImage(image, 700, 80, 200, 200)
);
