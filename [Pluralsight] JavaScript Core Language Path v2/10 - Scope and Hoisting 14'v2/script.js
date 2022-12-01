/*
const app = {
  id: 12345,
  fname: "Copa",
  lname: "Samsu",
};

function useId() {
  console.log(app.id, app.fname, app.lname);
}

useId();
*/
let pid = 69;

function showId() {
  function fix() {
    let pid = 420;
    console.log("in fix ", pid);
  }

  fix();

  console.log("in showId ", pid);
}

showId();
