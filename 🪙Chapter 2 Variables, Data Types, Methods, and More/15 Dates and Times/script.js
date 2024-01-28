let d = new Date('1994/08/26 10:30:20');

x = d.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Dhaka',
});

console.log(x);

// x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
