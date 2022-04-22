//! HERENCIA

//? En Javascript la herencía es prototipica

//* Función Constructora
function Animal(nombre, genero) {
  //* Atributos
  this.nombre = nombre;
  this.genero = genero;
}

//* Metodos agregados al prototipo de la función costructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

//! Herencía Prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//! Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//! Sobreescritura de metodos del prototipo padre en el prototipo hijo
Perro.prototype.sonar = function(){
    console.log("Soy un Perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function() {
    console.log("Guau guau")
}


const SNOPPY = new Perro("Snoopy", "Macho", "Pequeño");
const LOLABUNNY = new Animal("Lola", "Hembra");

console.log(SNOPPY);
console.log(LOLABUNNY);