/*/console.log(document.getElementsByClassName("parrafos")[0].children[0])
//console.log(document.getElementsByTagName("p")[0])

const user1 = {nombre: "Francisco Pugh", direccion: "Calle Falsa 123"}

const parrafo1 = document.getElementById("parrafo1")

parrafo1.innerText = `Hola ${user1.nombre}, enviar productos a ${user1.direccion}`*/

class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "Celular", "Samsung", 120, 22)
const producto2 = new Producto(2, "Lavarropas", "Enova", 500, 21)
const producto3 = new Producto(3, "Televisor", "LG" , 200, 40)
const producto4 = new Producto(4, "PS5", "Sony" , 140, 10)
const producto5 = new Producto(5, "Notebook", "HP" , 1400, 40)
const producto6 = new Producto(6, "Auriculares", "Apple" , 1500, 5)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const divProductos = document.getElementById("divProductos")

productos.forEach((productoArray) => {
    divProductos.innerHTML += `
    <div class="card productos">
        <div class="card-body">
            <h5 class="card-title">${productoArray.nombre}</h5>
            <p class="card-text">Marca: ${productoArray.marca}</p>
            <p class="card-text">Precio: $${productoArray.precio}</p>
            <p class="card-text">Stock: ${productoArray.stock}</p>
    </div>
  </div>
    `
})