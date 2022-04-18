//! OBJETOS LITERALES
// Una nueva forma de escribir objetos y atributos en Javascript

let nombre = "Malquiel";
let edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauuu!!!");
  },
};
console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: "Doberman",
  ladrar() {
    console.log("guauu guauu guaaauuu!!!!");
  },
};

console.log(dog);
dog.ladrar();