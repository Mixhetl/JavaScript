//* TIPOS DE OPERADORES

//* OPERADORES ARITMETICOS ->
let a = 5 + 5 - 10 * 3;
console.log(a);

let modulo = 5 % 2;
console.log(modulo);

//* OPERADORES RELACIONALES ->
console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

/*
 = es igual a asignación de variable o valor
 == es comparación de valores
 === es comparación de tipo de dato y valor
 */

 console.log(7 == 7);
 console.log("7" == 7);
 console.log(0 == false);

 // Esto es considerado buena practica.
 console.log(7 === 7);
 console.log("7" === 7);
 console.log(0 === false);


//* OPERADORES DE INCREMENTO ->
 let i = 1;
 
 // i = i + 2;
 i += 3;
 console.log(i);

 i -= 1;
 console.log(i);

 i *= 5;
 console.log(i);

 i /= 2;
 console.log(i);

 //* Operador unario
i ++;
console.log(i);

i --;
console.log(i);
// - Alternativa -
++ i;
console.log(i);

-- i;
console.log(i);


//* OPERADORES LOGICOS ->
/*
! = Not: Niega, es decir lo que es verdadero lo vuelve falso y viceversa.
*/
console.log(!true);

/*
|| = Or: Cuando tengo dos o más condiciones, con que una se cumpla, el Or validara.
*/
console.log((9 === 9) || ("9" === 9));

/*
&& = And: Solo cuando las dos o más condiciones se cumplen And validara.
 */
console.log((9 === 9) && ("9" === 9));
console.log((9 === 9) && ("9" === "9"));    