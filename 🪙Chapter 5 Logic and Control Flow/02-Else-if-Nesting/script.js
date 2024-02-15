const day = new Date();
// const hour = day.getHours();

const hour = 18;
// console.log(day);
// console.log(hour);

// if (hour < 12) console.log('Good Morning 🌅');
// else if (hour < 18) console.log('Good Afternoon ☀️');
// else console.log('Good Night🌆');

if (hour >= 6 && hour <= 12) console.log('Good Morning');
if (hour >= 6 && hour <= 9) console.log('Wake Up!');
else if (hour >= 9 && hour <= 12) console.log('Get to Work');
else if (hour >= 12 && hour <= 18) console.log('Afternoon ☀️');
if (hour >= 12 && hour <= 15) console.log('⚒️Work Hard');
else if (hour >= 15 && hour <= 18) console.log('🍕Lunch');
if (hour === 6 || hour === 18) console.log('🦷');
else console.log('Good Night🌆');
