// Declaración de variables

// Para la declaración de variables, existen dos palabras reservadas, var y let.
// La palabra reservada var tiene un alcance global, aun cuando la variable este declarada dentro de un ambito de bloques
var variableGlobal = "Global";

// La palabra reservada let cumple la misma funcion que var, sin embargo, esta se puede utilizar para declarar variables en ambitos de bloque.
let compras = "compras";

if (true) {
  let compras = "gusanitos";
}

// Resumen: No uses var, utiliza let.
