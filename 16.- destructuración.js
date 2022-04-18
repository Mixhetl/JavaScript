//! DESTRUCTURACIÓN

const numeros = [1,2,3];

//* Aplicado en "Arrays"
//? Esto es una asignación de datos a variables "Sin destructuración" -->
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(`Impresión de variables si destructuración ${uno}, ${dos} y ${tres}`);

//? Con destructuración -->
const [one, two, three] = numeros;
console.log(`Impresión de un Array con destructuración ${one}, ${two} y ${three}`);


//* Aplicado en "Objects"
const persona = {
    nombre: "Malquiel",
    apellido: "Hernández",
    edad: 27
};

// Para que la destructuración funcione con los objects las variables deben llamarse igual que la propiedad que se desee aislar.
let {nombre, apellido, edad} = persona;
console.log(`Impresión de variables de un Objetc con destructuración, ${nombre}, ${apellido} y ${edad}`)