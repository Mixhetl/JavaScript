//! OBJETO CONSOLE

//? El objeto console:
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");

let nombre = "Malquiel";
let apellido= "Hernández";
let edad = 35;

console.log(edad,apellido,nombre);

console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

//Para limpiar la consola
console.clear();

console.log(window);
console.log(document);

//Muestra las caracteristicas de un objeto
console.dir(window);
console.dir(document);
console.clear();

console.group("Los cursos de @mixhetl en Youtube.");
console.log("Curso de Javascript");
console.log("Curso de CSS avanzado");
console.log("Curso de NODE.js");
console.log("Curso de HTML semantico avanzado.")
console.log("Curso de React.js");
console.log("Diseño de Interfaces");
console.groupEnd();

console.groupCollapsed("Los cursos de @mixhetl en Youtube.");
console.log("Curso de Javascript");
console.log("Curso de CSS avanzado");
console.log("Curso de NODE.js");
console.log("Curso de HTML semantico avanzado.")
console.log("Curso de React.js");
console.log("Diseño de Interfaces");
console.groupEnd();
console.clear();

console.table(Object.entries(console).sort());
console.clear();

const numeros = [1,2,3,4,5];
const vocales = ["a","e","i","o","u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Lucas",
    raza: "pastor",
    color: "Café"
}
console.table(perro);
console.clear();

//Temporizador
console.time("Timer");
const arreglo = Array(1000000);

    for(let i = 0; i<arreglo.length; i++){
        arreglo[i] = i;
    }

console.timeEnd("Timer");
console.clear();

//Impresión del numero de ejecuciones
for(let i = 0; i <= 100; i++) {
    console.count("Contador");

    console.log(i);
}
console.clear();

//Pruebas
let x = 3;
let y = 2;
let pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, (x,y,pruebaXY));