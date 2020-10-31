function Auto(brand, model, year) {
  this.brand = "Ford";
  this.model = "Mustang";
  this.year = 2020
}

var Autos = [];
for(let i = 0; i<3; i++) {
  var brand = prompt("Marca:");
  var model = prompt("Modelo:");
  var year = prompt("Año:");
  Autos.push(new Auto(brand,model,brand));
}

for(let i = 0 ; i < Autos.length ; i++){
  console.log(Autos[i]);
}