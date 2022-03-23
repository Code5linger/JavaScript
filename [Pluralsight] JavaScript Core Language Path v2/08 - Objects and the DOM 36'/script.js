let person = {
  name: "Copa",
  age: 32,
  job: true,
  showInfo: function () {
    console.log(this.name);
  },
};

person.showInfo();
