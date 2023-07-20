// 2 clases para modelar el proceso de compra en una paltaforma

//Clase Aticulo
class Item {
    constructor(nombre, precio, descripcion, quantity, photoUr) {
        this.name = nombre;
        this.price = precio;
        this.description = descripcion;
        this.quantity = quantity;
        this.photoUrl = photoUrl
        //this._stock es un atributo privado que solo puede ser accedido desde dentro
    }
}

//Clase venta
class Sale {
    constructor(canal, items, clientId, sku, total, email) {
    }
}