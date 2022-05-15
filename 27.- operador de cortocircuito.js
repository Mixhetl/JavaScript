//! OPERADOR CORTOCIRCUITO

/*CORTOCIRCUITO OR: Cuando el valor de la izquierda
en la expresión siempre pueda validar a true, es el
valor que se cargara por defecto*/
function saludar(nombre) {
    nombre = nombre || "Desconocido"
    console.log(`Hola ${nombre}`);
}

saludar("Malquiel");
saludar();

console.log("Valor izquierda" || "Valor derecha");
console.log(19 || "Valor derecha");
console.log(true || "Valor derecha");
console.log([] || "Valor derecha");
console.log({} || "Valor derecha");
console.log(false || "Valor derecha");
console.log(null || "Valor derecha");
console.log(undefined || "Valor derecha");
console.log("" || "Valor derecha");
console.log(-2 || "Valor derecha");
console.log(0 || "Valor derecha");


/*CORTOCIRCUITO AND: Cuando el valor de la izquierda
en la expresión siempre pueda validar a false, es el
que se cargara por defecto*/
function saludar2(nombre) {
    nombre = nombre && "Desconocido"
    console.log(`Hola ${nombre}`);
}

saludar2("Malquiel");
saludar2();

console.log("Valor izquierda" && "Valor derecha");
console.log(19 && "Valor derecha");
console.log(true && "Valor derecha");
console.log([] && "Valor derecha");
console.log({} && "Valor derecha");
console.log(false && "Valor derecha");
console.log(null && "Valor derecha");
console.log(undefined && "Valor derecha");
console.log("" && "Valor derecha");
console.log(-2 && "Valor derecha");
console.log(0 && "Valor derecha");