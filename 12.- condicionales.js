//! Estructuras de Control
// Son aquellos mecanismos que nos permiten controlar el flujo de nuestra operación.

//? If y else

let edad = 18;

if(edad > 17) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

if(edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

if(edad < 18) {
    console.log("Eres menor de edad")
} else {
    console.log("Eres mayor de edad")
}

if(edad <= 17) {
    console.log("Eres menor de edad")
} else {
    console.log("Eres mayor de edad")
}

//? If y else + If y else (Anidado)
let hora = 18;

if(hora >= 11 && hora <= 5) {
    console.log("Dejame dormir")
} else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días")
} else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

//? Simplificación (Operador Ternario)
/*
 * Solo puedes ejecutar una linea de codigo. 
 */
console.log("Operador Ternario")
let eresMayor = (edad >= 18) 
? "Eres mayor de edad" 
: "Eres menor de edad";
console.log(eresMayor);

//? Switch - Case (Se usara cuando tengamos diferentes valores para una sola condición)
/*
! domingo - 0
! lunes - 1
! martes - 2
! miercoles - 3
! jueves - 4
! viernes - 5
! sabado - 6
 */
let dia = 2;

switch (dia) {
    case 0:
        console.log("Domingo")
        break;

    case 1:
        console.log("Lunes")
        break;

    case 2:
        console.log("Martes")
        break;

    case 3:
        console.log("Miercoles")
        break;

    case 4:
        console.log("Jueves")
        break;

    case 5:
        console.log("Viernes")
        break;

    case 6:
        console.log("Sabado")
        break;

    default:
        console.log("Este día de la semana no existe")
        break;
}