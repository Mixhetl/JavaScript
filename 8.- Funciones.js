// Valores de tipo complejo o compuesto.
// * FUNCIONES
/* Generalmente son un bloque de codigo independiente al scoop o al ambito global. Se pueden ejecutar en cualquier momento */

// * Funcione declaradas ->
function unaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}
// Invocación de funciones
unaFuncion();

// Funciones que devuelven valores
function devolver() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
  return "La funcion ha retornado una cadena de texto";
}
/* El codigo se ejecutara hasta que Javascript encuentre la palabra return,
todo lo que este despues de esta palabra sera ignorado y en consecuencia no se ejecutara */

// Invocación de función
let valorDev = devolver();
console.log(valorDev);

// Funciones que aceptan parametros.
function saludar(nombre = "Malquiel", edad = 27) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar(); //Arrastra los valores declarados en la función.

saludar("Locke", 6); // Reemplaza los valores declarados inicialmente.

// * Funciones expresadas ->
//
declarada();

function declarada() {
  console.log(
    "Esto es una función declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la función sea declarada."
  );
}

// * Función anonima

funcionExpresada(); // Lanzara un error, debido a que este tipo de funciones no pueden invocarse antes de ser declaradas. Esta es la diferencia entre funciones declaradas y funciones expresadas.

const funcionExpresada = function () {
  console.log(
    "Esto es una función Expresada, es decir una función que se le ha asignado como valor a una variable. Si invocamos esta función antes de su definciión, Javascript nos dira..."
  );
};

funcionExpresada();
