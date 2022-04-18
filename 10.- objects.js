// * Objetcts  Objetos en Javascript
// En Javasript todo es un objeto, a dichos de los programadores claro.

let a = new String("Hola");
console.log(a); //* En este caso, al imprimir en la consola, esta variable aparece como un prototipo.

/*-------------------------------------------------------------------------------------------------- */
const b = {};
console.log(b);

/*-------------------------------------------------------------------------------------------------- */
const c = new Object();
console.log(c);

// * Un objeto es una colección de llaves/valores. Dentro de un objeto, a las variables se le van a llamar atributos/propiedades, y a las funciones se le llama metodos.

const yo = {
  nombre: "Malquiel",
  apellido: "Hernández",
  edad: 27,
  pasatiempo: ["Videojuegos", "Leer", "Historia", "Escribir"],
  soltero: false,
  contacto: {
    email: "mixhetl.hdz@gmail.com",
    twitter: "@mixhetl",
    movil: "525549553779",
  },

  saludar: function () {
    console.log("He avanzado más de lo que espera.");
  },

  decirMiNombre: function () {
    console.log(
      `Que onda, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años, me puedes seguir como ${this.contacto.twitter} en Twitter.`
    );
  },
};

console.log(yo);
console.log(yo["nombre"]);
console.log(yo["apellido"]);
console.log(yo.nombre);
console.log(yo.apellido);
console.log(yo.edad);
console.log(yo.soltero);
console.log(yo.pasatiempo);
console.log(yo.pasatiempo[1]);
console.log(yo.contacto);
console.log(yo.contacto.twitter);
yo.saludar();
yo.decirMiNombre();

console.log(Object.keys(yo));
console.log(Object.values(yo));
console.log(yo.hasOwnProperty("nombre"));
console.log(yo.hasOwnProperty("nacimiento"));
