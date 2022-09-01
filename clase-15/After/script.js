
/*
fetch('https://criptoya.com/api/dolar')
.then(response => response.json())
.then(({blue}) => {
    const habitacion1 = {precio: 10000}

    console.log(`El precio en pesos es ${habitacion1.precio}`)
    console.log(`El precio en dolares es ${habitacion1.precio / blue}`)
})*/
const divProductos = document.getElementById("divProductos")
const botonProductos = document.getElementById("botonProductos")
const inputProducto = document.getElementById("inputProducto")

const traerProductos = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    return productos
}

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;margin:3px;">
            <img src="./img/${producto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Marca: ${producto.marca}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                    <button class="btn btn-dark">Agregar al carrito</button>
                </div>
            </div>
        
        `
    });

}

inputProducto.addEventListener('input', () => {
    let res = inputProducto.value
   
    traerProductos().then(productos => {
        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(res.toLowerCase()))
        divProductos.innerHTML = ""
        mostrarProductos(productosFiltrados)
    })
})


botonProductos.addEventListener('click', () => {
    traerProductos().then(productos => {
        mostrarProductos(productos)
    })
})