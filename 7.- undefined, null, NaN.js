// Null y Undefined van a representar una variable que no tiene valor.
/* La diferencia entre estos ultimos radica en la declaración de la misma
Es decir:
Javascript utiliza undefined para las variables a las cuales no se les ha asignado un valor */

let indefinida;
console.log(indefinida);

/**En cambio el valor null indica vacio de información pero este ultimo es asignado directamente por el programador */

let nula = null;
console.log(nula);

// * Por lo tanto, undefined es asignado por javascript y null lo asigna el programador.

// Existe otro tipo de valor que se genera cuando hacemos operaciones entre valores que no son numericos.
// NaN (Not a number).

let noEsUnNumero = "Hola" * 3.7;
console.log(noEsUnNumero);
