//! METODOS ESTATICOS, GETTERS Y SETTERS

class Animal {
  constructor(nombre, genero) {
    //? El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase.
    this.nombre = nombre;
    this.genero = genero;
  }

  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("Soy un perro y mis sonido es ladrar");
  }

  ladrar() {
    console.log("Guau guau!!");
  }

  //? Todas las clases generadas en Javascript son publicas. Sin embargo hay ciertas caracteristicas que si existen, por ejemplo los Metodos Estaticos.s
  //* Un metodo estatico es aquel que se puede ejecutar si la necesidad de instanciar la clase.
  static queEres() {
    console.log(
      "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados el mejor amigo del hombre"
    );
  }

  //? Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

//* Invocación y ejecución del metodo estatico.
Perro.queEres();

const LOCKE = new Perro("Locke", "Macho", "Gigante");

console.log(LOCKE);

LOCKE.setRaza = "Pastor Islandes";

console.log(LOCKE.getRaza);
