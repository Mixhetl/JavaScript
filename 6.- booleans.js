// En Javascript unicamente tenemos dos valores booleanos.
// true y false
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);

console.log(v, f);

//Existen valores que no son booleanos, pero que son representados como tales bajo ciertas condiciones.
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean("Verdadero"));
