const { object } = require("prop-types");

console.log('Test')

document.title = 'Copa Samsu';

const items = document.getElementsByClassName('item')
const node = document.querySelector("#todo-list")
console.log(node.childNodes)
console.log(node.children)

// What is DOM
    // It is Document Object Model, is a way for us to access html, css code through JavaScript. [INFO] The Browser creates an object oriented model of the html
// ❓Window object > Document > Everything Else ((Element, Node) == Object)
// Document > Head > Body > h1, button, ... (Objects with Property ) Can be change using element.class
// ❓Console 

// Propper way to see all the document & console element in bowser console
// Change The Title 
// Get how many class elements dose the page has  

// Difference between HTMLCollection vs Nodelist
// Node
    // 