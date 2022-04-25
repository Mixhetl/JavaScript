//! CLASES Y HERENCIA

class Animal {
    constructor(nombre,genero){   //? El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase.
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

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //? super() es un metodo que manda a llamar el constructor de la clase padre, y asignara los atributos.
        super(nombre,genero)
        this.tamanio = tamanio;
    }

    sonar() {
        console.log("Soy un pero y mis sonido es ladrar");
    }

    ladrar() {
        console.log("Guau guau!!");
    }
}

const MIMI = new Animal("Mimi", "Hembra");
const SCOOBY = new Perro("Scooby", "Macho", "Gigante");

console.log(MIMI);
MIMI.saludar();
MIMI.sonar();
console.log(SCOOBY);
SCOOBY.saludar();
SCOOBY.sonar();