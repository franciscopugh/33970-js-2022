class Producto {
    constructor(id, nombre, marca, precio, stock){
      this.id = id 
      this.nombre = nombre
      this.marca = marca
      this.precio = precio
      this.stock = stock
    }
}

const producto1 = new Producto(1, "Fideos", "Fidein", 120, 50)
const producto2 = new Producto(2, "Manteca", "Mantequin", 220, 40)
const producto3 = new Producto(3, "Cafe", "Cafe", 120, 50)
const producto4 = new Producto(4, "Yerba", "Yerbin", 110, 40)
const producto5 = new Producto(5, "Arroz", "Arrozan", 140, 20)

const productos = [producto1, producto2, producto3, producto4, producto5]

const divProductos = document.getElementById("divProductos")
const botonAlerta = document.getElementById("botonAlerta")
const botonesProductos = document.getElementsByClassName("botonesProductos")

productos.forEach(producto => {
  divProductos.innerHTML += `
    <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem;margin:4px;">
      <div class="card-header">${producto.nombre}</div>
        <div class="card-body">
          <p class="card-text">Marca: ${producto.marca}</p>
          <p class="card-text">Precio: $${producto.precio}</p>
          <p class="card-text">Stock: ${producto.stock}</p>
          <button class="btn btn-secondary botonesProductos">Agregar al carrito</button>
      </div>
    </div>
  
  `
});

function mostrarCarrito() {
  Swal.fire({
    title: 'Carrito',
    showDenyButton: true,
    showCancelButton: true,
    html:
      '<p>Productos de Carrito</p>',
    confirmButtonText: 'Finalizar Compra',
    denyButtonText: `Cancelar Compra`,
    cancelButtonText: 'Seguir comprando'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {   
      Swal.fire('Compra Finalizada', 'En breve se enviaran los productos', 'success')
    } else if (result.isDenied) {
      Swal.fire('¿Desea Cancelar su compra?', '', 'info')
    }
  })
}
for(let i = 0; i < botonesProductos.length; i++) {
  botonesProductos[i].addEventListener('click', () => {
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000,
      //destination: "https://github.com/apvarun/toastify-js",
      //newWindow: false,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
        fontFamily: "Arial, Helvetica, sans-serif"
      },
      onClick: function(){
          mostrarCarrito()
      } // Callback after click
    }).showToast();
  })
}

botonAlerta.addEventListener('click', () => {
    mostrarCarrito()
})

