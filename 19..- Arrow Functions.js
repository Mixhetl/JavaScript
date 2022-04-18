//! ARROW FUNCTIONS

//? Funciones expresadas
// Se forman cuando a una constnte se le asigna como valor una función anonima.

const saludo = nombre => console.log(`¡Hola! ${nombre}`);

saludo("Malquiel");

const sumar = (a,b) => a+b;
console.log(`La suma es ${sumar(8,9)}`);

// Función de varias lineas

const varias = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
varias();

const numeros = [1,2,3,4,5];
numeros.forEach((el, index) => console.log(`El elemento ${el} esta en la posición ${index}`))

const perro = {
    nombre: "Lucke",
    ladrar: () => console.log(this),
}
perro.ladrar();