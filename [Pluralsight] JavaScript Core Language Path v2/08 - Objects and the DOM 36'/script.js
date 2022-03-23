let person = {
  name: "Copa",
  age: 32,
  job: true,
  showInfo: function (realAge) {
    console.log("Inside");
    let showMessage = console.log(this.name + " Samsu is " + realAge);
  },
};
person.showInfo(69);
