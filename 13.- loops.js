//! CICLOS (loops)

let contadorWhile = 0;
let contadorDoWhile = 0;

//? En el caso de while, la condición siempre se evalua primero antes de iniciar su ciclo.
while (contadorWhile <= 5) {
    console.log("while " + contadorWhile);
    contadorWhile ++;
}

//? En el caso de do while, primero se ejecuta el ciclo y la evaluación se realiza al final.
do {
    console.log("do while " + contadorDoWhile);
    contadorDoWhile ++;
} while (contadorDoWhile <= 5 )

/*
? La estructura for se compone de cuatro partes.
? La primera parte es la declaración de la variable
? La segunda parte es la condición
? La tercera es el incremento o el decremente
? La ultima sera la sentencía o el codigo que se ejecutara.
*/
for (let i = 0; i < 5; i++) {
    console.log("for " + i);
}


let numeros = [10,20,30,40,50,60,70,80,90];

for (let a = 0; a < numeros.length; a++) {
    console.log(numeros[a])
}


//? for in, me va a permitir recorrer o iterar las propiedades de un objeto.

const yo = {
    nombre: "Malquiel",
    apellido: "Hernández",
    edad: 27
}

for (const propiedad in yo) {
    console.log(`Key: ${propiedad}, Value: ${yo[propiedad]}`);
}

//? for of, me permite recorrer todos los elementos de cualquier objeto que sea iterable en Javascript

for (const elemento of numeros) {
    console.log(elemento);
}


let cadena = "Hola mundo";

for (const caracter of cadena) {
    console.log(caracter);
}