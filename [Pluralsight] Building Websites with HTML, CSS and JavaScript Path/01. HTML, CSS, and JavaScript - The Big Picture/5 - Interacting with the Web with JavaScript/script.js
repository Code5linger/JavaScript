function Prompt() {
  var txt;
  var name = window.prompt("What is your name");
  if (name != null || name != "") {
    txt = "Hello " + name;
  }
  document.getElementById("name").innerHTML = txt;
}

function MyFunction() {
  
}
