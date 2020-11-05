var person = {
  name: "German",
  lastName: "Ceballos",
  age: 27,
  showData: function() {
    console.log("Hola me llamo "+this.name+" "+this.lastName+" y tengo "+this.age+" años");
  }
};

person.showData();