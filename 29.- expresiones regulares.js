//! EXPRESIONES REGULARES

/*
Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), replace(), replaceAll() (en-US), search() y split() métodos de String.
*/

let cadena = "Lorem ipsum dolor sit";

let expReg = new RegExp("lorem","ig");

let expReg2 = /lorem/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));