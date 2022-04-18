//! Parametros REST & Spread Operator

/*
En el caso de las funciones simples es posible generar una operación con dos parametros, sin embargo;
cuando se requiere hacer uso de más parametros, ocuparemos el operadotr REST & SPREAD.
*/

//? Parametro REST --> Parametros que recibe una función
function sumar (a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));


//? Spread Operator --> Combina dos arreglos para formar uno.
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);