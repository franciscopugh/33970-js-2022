/*localStorage.setItem('saludar', 'Hola')

console.log(localStorage.getItem("despedirse")) //null*/

let darkMode

if(localStorage.getItem("darkMode")) { //null si no existe la key
    darkMode = localStorage.getItem("darkMode") //consulto el local storage
} else {
    localStorage.setItem("darkMode", "light") //Creo
}

if(darkMode == "dark") {
    document.body.classList.add('darkMode')
}

const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
const botonProductos = document.getElementById("botonProductos")
const divProductos = document.getElementById("divProductos")

botonDarkMode.addEventListener('click', () => {
   // document.body.style.backgroundColor = "black"
   // document.body.style.color = "white"
   document.body.classList.add('darkMode')
   localStorage.setItem("darkMode", "dark")
})

botonLightMode.addEventListener('click', () => {
   // document.body.style.backgroundColor = "white"
   // document.body.style.color = "black"
   document.body.classList.remove('darkMode')
   localStorage.setItem("darkMode", "light")
})

class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    mostrarProducto() {
        console.log("Hola, soy producto")
    }
}

const producto1 = new Producto("Yerba mate", "La yerbita",500, 20)
const producto2 = new Producto("Fideos", "Fidein", 120, 50)
const producto3 = new Producto("Cafe", "Le cafe", 540, 10)
const producto4 = new Producto("Manteca", "Acetnam", 310, 20)
const producto5 = new Producto("Lentejas", "Lentejin", 200, 40)

const productos = [producto1, producto2, producto3, producto4, producto5]

localStorage.setItem('carrito', JSON.stringify(productos)) //.stringify() pasar de Objeto a JSON


botonProductos.addEventListener('click', () => {
    const productoStorage = JSON.parse(localStorage.getItem("carrito")) //.parse() pasar de JSON a objeto
    divProductos.innerHTML = ""
    productoStorage.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.marca}</p>
                <p class="card-text">$${producto.precio}</p>
                <p class="card-text">${producto.stock}</p>
                <button class="btn btn-danger">Eliminar Producto</button>
            </div>
        </div>
        
        `
    });
})



