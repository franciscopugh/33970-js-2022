/*setTimeout(() => {
    console.log("Hola, buenas noches!.")
}, 1);

setTimeout(() => {
    console.log("Hola, buenas tardes!.")
}, 0);
let contador = 0
const intervalo = setInterval(() => {
    setTimeout(() => {
        console.log("Buenas noches")    
    }, 1000);

    contador++
    console.log(contador)
    if(contador == 4) {
        clearInterval(intervalo)
    }
}, 2000);
*/

class User {
    constructor(id, username, email, password) {
        this.id = id 
        this.username = username
        this.email = email
        this.password = password
    }
}

const user1 = new User(1, "pepepito", "pepe@pepe.com", 1234)
const user2 = new User(2, "pepepito", "pepe@pepe.com", 1234)
const user3 = new User(3, "pepepito", "pepe@pepe.com", 1234)
const user4 = new User(4, "pepepito", "pepe@pepe.com", 1234)
const user5 = new User(5, "pepepito", "pepe@pepe.com", 1234)

const users = [user1, user2, user3, user4, user5]

function consultarUsuarios(confirmacion) {
    return new Promise((res, rej) => {
        if(confirmacion) {
            res(users)
        } else {
            rej("Permiso denegado")
        }
        
    })
}

consultarUsuarios(false)
.then((usuarios) => {
    console.table(usuarios)
})
.catch((error) => {
    console.error(error)
})