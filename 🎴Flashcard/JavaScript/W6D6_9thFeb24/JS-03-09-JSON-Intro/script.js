// const post = {
//   id: 1,
//   title: 'Post 1',
//   body: 'Body',
// };
// console.log(post);
// const str = JSON.stringify(post);
// console.log(str);

// console.log(JSON.parse(str));

// const array = [
//   {
//     id: 1,
//     title: 'Post 1',
//     body: 'Body',
//   },
//   {
//     id: 2,
//     title: 'Post 2',
//     body: 'Head',
//   },
// ];

// const arrat2string = JSON.stringify(array);
// console.log(arrat2string);
// const string2array = JSON.parse(arrat2string);
// console.log(string2array[1]['id']);

const library = [
  {
    title: 'জোছনা ও জননীর গল্প',
    author: 'হুমায়ূন আহমেদ',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'ময়ূরাক্ষী',
    author: 'হুমায়ূন আহমেদ',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'তিন গোয়েন্দা',
    author: 'রকিব হাসান',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// library[0]['status']['read'] = true;
// library[1]['status']['read'] = true;
// library[2]['status']['read'] = true;

// console.log(
//   library[0]['status']['read'],
//   library[1]['status']['read'],
//   library[2]['status']['read']
// );

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(
  library[0].status.read,
  library[1].status.read,
  library[2].status.read
);

// library[0].title;

const { title: firstBook } = library[0];

console.log(firstBook);
// const { title: firstBook } = library[0];

// console.log(firstBook);

const str = JSON.stringify(library);
console.log(str);
