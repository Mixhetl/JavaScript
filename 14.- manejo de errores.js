//! MANEJO DE ERRORES EN JAVASCRIPT

try {
    console.log("En el try se agrega el codigo a evaluar.");
    noExiste;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("Captura cualquier error surgido o lanzado en el try.")
    console.log(error);
} finally {
    console.log("En el bloque finally se ejecutará siempre al final de un bloque try-catch.")
}

//? Lanzar mensajes de Error de manera personalizada.
try {
    let numero = "Hola";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un numero");
    };

    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}