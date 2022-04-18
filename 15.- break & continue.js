//! BREAK & CONTINUE

const numeros = [1,2,3,4,5,6,7,8,9,0];


//? La palabra reservada break provocara que se salga de la operación que se esta realizando cuando se cumplen ciertos parametros.
for(let i = 0; i < numeros.length; i++){
    if (i === 5) {
        break;
    }
    console.log("Break - " + numeros[i]);
}


//? La palabra reservada continue provocara que un flujo de operación continue si se cumplen ciertos parametros.
for(let i = 0; i < numeros.length; i++){
    if (i === 5) {
        continue;
    }
    console.log(`Continue - ${numeros[i]}`);
}