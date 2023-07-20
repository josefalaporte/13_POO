//Parte 1 JavaScript
/*Cree una clase llamada Person que acepte el nombre de una persona como una cadena y su edad como un número.
La clase Person debe tener un método llamado Describe que devuelve una cadena con la siguiente sintaxis: "nombre, edad años".
Por ejemplo, si Manny tiene 19 años, la función Describe() de su objeto devolverá "Manny, 19 años".
 */

class Person {
    constructor(nombre = "", edad = "") {
        this.nombre = nombre;
        this.edad = edad;
}
Describe() {
    return `${this.nombre}, ${this.edad} años`;
    }
}

const persona = new Person ("kayce", 30);
console.log(persona.Describe());