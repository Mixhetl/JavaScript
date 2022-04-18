// Javascript es el unico lenguaje que puede hacer ISOMORFISMO.

// Javascript puede ejecutarse en 3 capas de aplicaciones web.
// Frontend - Javascript
// Backend - Node.js
// Persistencia de datos - (MongoDB, CouchDB, Firebase, etc.)

//  Con Javascript se pueden desarrollar disntintas cosas:
// * Diseño y desarrollo WEB
// * Videojuegos
// * Realidad aumentada / Realidad virtual
// * Controldar hardware
// * Aplicaciones hibridas
// * Machine learning

// Caraceristicas de Javascript
// * Lenguaje de Alto nivel
// * Interpretado
// * Dinamico
// * Débilmente tipado
// * Multi paradigma
// * Sensible a Mayusculas y minusculas
// * No necesita punto y coma al final de cada linea

// Escritura de CODIGO
// Los identificadores deben comenzar con: letra, signo de dolar o guíon bajo, nunca con numeros

// Tecnicas de Escritura de Codigo.
// snake_case -> mi_archivo_javascritp.js => Para guardar Archivos
// UPPER_CASE
// Constantes
const UNA_CONSTANTE = "Constante";

// UpperCamelCase
// Clases
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}

// lowerCamelCase
// Objetos
const unObjeto = {
  nombre: "Jonathan",
  email: "mixhetl@gmail.com",
};

// Valores Primitivos
let unaCadena = "Hola mundo",
  unNumero = 19,
  unBoolean = true;

// Funciones
function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Mixhetl");

//Instancias
const ajax = new XMLHttpRequest(),
  jon = new SerHumano("Mixhetl", "Hombre");

// Ordenamiento del codigo
// 1.- Importación de Modulos
// 2.- Declaración de Variables
// 3.- Declaración de Funciones
// 4.- Ejecución del Código

// Tipos de datos en Javascript
// 1.- Primitivos: Se accede directamente al valor.
// * string
// * number
// * boolean
// * null
// * undefined
// * NaN
// 2.- Compuestos: Se accede a la referencia del valor.
// * object = {}
// * array = []
// * function () {}
// * class {}
// * etc.
