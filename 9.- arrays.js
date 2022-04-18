// * Arrays = Arreglos
// Un array o arreglo es una colección de elementos.
const a = [];
console.log(a);

const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(b);

// Es importante saber que el conteo de los arreglos siempre va a comenzar en el numero 0.
// Es decir si tenemos 4 valores en nuestro array, el conteo sera 0, 1, 2, 3.
// * Impresión de valores del array.
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);

// * Impresión de arreglos anidados.
console.log(b[3][0]);
console.log(b[3][1]);
console.log(b[3][2]);
console.log(b[3][3]);

console.log(b[3][3][0]);
console.log(b[3][3][1]);
console.log(b[3][3][2]);

// * Otros metodos paa la creación de arrays.
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

// Metodos obsoletos.
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

// * Metodos en los arreglos.
// Agregar o quitar información en un arreglo.
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);

colores.pop();
console.log(colores);

// Ejecución por cada elemento que contenga el parametro requerido.
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});
