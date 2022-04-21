//! PROTOTIPOS

//? Javascript es un lenguaje multiparadigma, es decir podemos hacer programación funcional, programación orientada a objetos.
//? La orientación a objetos es muy diferente a leguajes que manejan clases.

//* Dentro de la programación orientada a objetos hay cuatro caracteristicas eseciales.
/*
Clases - Modelo a seguir
Objetos - Instancía de una clase (copia o modelo).
    Atributos - Es una caracteristica o propiedad del objeto (variables dentro de un objeto).
    Metodos - Son las acciones que un objeto puede realizar (funciones dentro de un objeto).
*/

//? Función Constructora
function Animal(nombre, genero) {
  //* Atributos
    this.nombre = nombre;
    this.genero = genero;

  //* Metodos agregados al prototipo de la función costructora
  Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
  }

  Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

const SNOPPY = new Animal("Snoopy", "Macho"), LolaBunny = new Animal ("Lola", "Hembra");

console.log(SNOPPY, LolaBunny);