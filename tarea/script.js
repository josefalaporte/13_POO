//EJERCICIO 1
/*Crear una clase "Rectángulo" con métodos para calcular el área y el perímetro de un rectángulo.
Crear la clase "Rectangulo" con los atributos "ancho" y "altura".
Implementar el método "calcularArea()" que devuelve el área del rectángulo.
Implementar el método "calcularPerimetro()" que devuelve el perímetro del rectángulo.*/

class Rectangulo {
    constructor (ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    calcularArea() {
        return this.ancho * this.altura;
    }
    calcularPerimetro () {
        return 2 * (this.ancho + this.altura);
}
}
const miRectangulo = new Rectangulo (5, 3);
const area = miRectangulo.calcularArea();
const perimetro = miRectangulo.calcularPerimetro();

console.log("El area es igual a: " + area);
console.log ("El perimetro es igual a: " + perimetro); 


//EJERCICIO 2
/* Crear una clase "CuentaBancaria" con métodos para gestionar una cuenta con saldo, depósitos y retiros.

Crear la clase "CuentaBancaria" con el atributo "saldo".
Implementar el método "depositar(cantidad)" que incrementa el saldo de la cuenta.
Implementar el método "retirar(cantidad)" que disminuye el saldo de la cuenta si hay fondos suficientes.
Implementar el método "consultarSaldo()" que muestra el saldo actual de la cuenta.  */

class CuentaBancaria {
    constructor(){
        this.saldo = 0;   //inicialmente tiene 0 pesos en la cuenta
    }
    depositar(cantidad) {   //se le deposita una cantidad mayor a 0 
        if (cantidad > 0) {
            this.saldo += cantidad;
            return true;
        }else{
            console.log('La cantidad debe ser mayor a cero');
            return false;
        }
    }
    retirar(cantidad){    //la cantidad a retirar debe ser mayor a 0 y esa cantidad es menor al saldo total, se hace la resta de saldo menos cantidad
        if(cantidad > 0 && cantidad <= this.saldo){
            this.saldo -= cantidad;
            return true; // si se cumple que la cantidad es menor al saldo que hay, retorna true y el valor que queda en la cuenta
        }else{ //si no se cumple esa condición (de que la cantidad a retirar sea menor al saldo disponible) retorna un false y dice que no hay fordos 
            console.log(`No se puede retirar ${cantidad}, no tiene fondos`);
            return false;
        }
    }
    consultarSaldo () {  //En consola transmitirá la frase junto con con el número
        console.log("Su saldo actual es: " + this.saldo);
    }
}

const miCuenta = new CuentaBancaria ();
miCuenta.consultarSaldo();  //la cuenta parte en cero

miCuenta.depositar(2000);  //Se hace un dposito de 1000 y queda en 1000
miCuenta.consultarSaldo();

miCuenta.retirar(800);    //Se retiran 500 y la cuenta queda en 500 cumpliendo con la condición
miCuenta.consultarSaldo();

miCuenta.retirar(3000)   //Se hace un retiro de 700 pero no alcanza porque en la cuenta solo quedan 500, por lo que retorna que no hay fonos suficientes

