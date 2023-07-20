
class Person {
constructor(name, lastName){
    this.nombre = name;
    this.apellido = lastName
    this.saludo = function() {
        console.log("Hola  mi nombre es:" + this.nombre +" "+ this.apellido);
  };
 }
}

let persona1 = new Person("Kayce", "Dutton");
console.log(persona1, apellido);


