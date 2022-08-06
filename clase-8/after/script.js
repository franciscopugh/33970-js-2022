class Tienda {
    constructor(id, nombre, direccion, tipo, img) {
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.tipo = tipo
        this.img = img
    }
}

const tienda1 = new Tienda(1, "Amancay", "Calle Falsa 123", "Kiosco", "https://cnnespanol.cnn.com/wp-content/uploads/2018/08/180819174855-simpsons-kwikemart-myrtle-beach-full-169.jpg?quality=100&strip=info")
const tienda2 = new Tienda(2, "Milagros", "Azul Rocio 456", "Tienda de ropa", "https://cnnespanol.cnn.com/wp-content/uploads/2018/08/180819174855-simpsons-kwikemart-myrtle-beach-full-169.jpg?quality=100&strip=info")
const tienda3 = new Tienda(3, "La esquina", "Av. Coderhouse y Maipu", "Locutorio", "https://cnnespanol.cnn.com/wp-content/uploads/2018/08/180819174855-simpsons-kwikemart-myrtle-beach-full-169.jpg?quality=100&strip=info")
const tienda4 = new Tienda(4, "Peon borracho", "Caballo acostado 123", "Bar", "https://cnnespanol.cnn.com/wp-content/uploads/2018/08/180819174855-simpsons-kwikemart-myrtle-beach-full-169.jpg?quality=100&strip=info")
const tienda5 = new Tienda(5, "Kwik e Mart", "Av Siempre Viva 456", "Mini-supermercado", "https://cnnespanol.cnn.com/wp-content/uploads/2018/08/180819174855-simpsons-kwikemart-myrtle-beach-full-169.jpg?quality=100&strip=info")

const tiendas = [tienda1, tienda2, tienda3, tienda4, tienda5]

const tBody = document.querySelector('#tBodyTiendas') //O(N^2)

//const divTiendas2 = document.getElementById("divTiendas") //O(log(N))
//document.querySelectorAll('.divTiendas') //O(N^2)

tiendas.forEach(tiendaArray => {
    tBody.innerHTML += `
        <tr>
            <th scope="row">${tiendaArray.id}</th>
            <td>${tiendaArray.nombre}</td>
            <td>${tiendaArray.direccion}</td>
            <td>${tiendaArray.tipo}</td>
            <td><img src="${tiendaArray.img}"></td>
        </tr>
    `
})

         