/*let nombre = "Francisco"
let apellido = "Pugh"
let edad = 18
let altura = 1.90

const persona1 = {
    nombre: "Francisco",
    apellido: "Pugh",
    edad: 18,
    altura: 1.90
}

const persona2 = {
    nombre: "Ezequiel",
    apellido: "Tartaglia",
    edad: 20,
    altura: 1.76
}

persona1 = null 

console.log(persona1.nombre)


function Producto(nombreParam = "", marcaParam = "", precioParam = 1, stockParam = 0) {
    this.nombre = nombreParam
    this.marca = marcaParam
    this.precio = precioParam
    this.stock  = stockParam
    this.mostrarPrecio = function () { 
        console.log(`El producto ${this.nombre} vale ${this.precio}`)}
}

const producto1 = new Producto("Yerba mate", "Matecito", 400, 20)
const producto2 = new Producto("Fideos", "Fidein", undefined, 20)

console.log(producto1)
producto2.mostrarPrecio()*/

class Producto {
    constructor(id,nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    //porcAumento = 1.x, siendo x el aumento
    aumentarPrecio(porcAumento) {
        this.precio *= porcAumento //this.precio = precio * porcAumento
    }
    //porcDisminucion = 0.x, siendo x el descuento
    disminuirPrecio(porcDisminucion) {
        this.precio *= porcDisminucion
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock //this.stock = this.stock + nuevoStock
    }

    disminuirStock(nuevoStock) {
        if((this.stock - nuevoStock) < 0) {
            console.log(`El producto ${this.nombre} no puede tener stock negativo`)
        } else {
            this.stock -= nuevoStock //this.stock = this.stock - nuevoStock
        }
       
    }

}

const producto1 = new Producto(1, "Cafe", "Le cafe", 600, 40)
console.log(producto1.precio)
producto1.aumentarPrecio(1.15)
console.log(producto1.precio)
producto1.disminuirPrecio(0.90)
console.log(producto1.precio)
console.log(producto1.stock)
producto1.aumentarStock(10)
console.log(producto1.stock)
producto1.disminuirStock(50)
console.log(producto1.stock)