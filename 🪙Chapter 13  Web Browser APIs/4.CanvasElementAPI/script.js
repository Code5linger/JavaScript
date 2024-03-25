const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

ctx.fillStyle = 'crimson';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.font = '30px Arial';
ctx.fillStyle = 'Blue';
ctx.fillText('Codeslinger', 300, 100, 300);

ctx.lineWidth = 1.5;
ctx.strokeText('Was Here', 450, 150, 100);

const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 600, 150, 50, 50));
