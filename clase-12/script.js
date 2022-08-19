/*let bebida = "cafe"
let comida = "tostadas"

if(bebida == "cafe") {
    console.log("Desayuno cafe con leche")
} else if(bebida == "te"){
    console.log("Desayuno te")
} else {
    console.log("Desayuno mate")
}

let desayuno = (bebida == "cafe") ? "Cafe con medialunas" : (bebida == "te") ? "Te con medialunas" : "mate"

console.log(desayuno)


class Empleado {
    constructor(nombre, apellido, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.sueldo = sueldo
    }
}

const empleado1 = new Empleado("Pedro", "Perez", 10000)
const empleado2 = new Empleado("Marta", "Martinez", 12000)
const empleado3 = new Empleado("Sancho", "Sanchez", 8000)
const empleado4 = new Empleado("Manolo", "Manuales", 13000)
const empleado5 = new Empleado("Luciana", "Luz", 15000)
const empleado6 = new Empleado("Maria", "Mariales", undefined)


const empleados = [empleado1, empleado2, null, empleado4, empleado5, empleado6]

console.log (null?.sueldo) //undefined

let acumulador = 0

empleados.forEach(empleado => {
    acumulador += empleado?.sueldo ?? 0 //empleado.sueldo == undefined retornar es cero
})

console.log(acumulador)

const arrayPersonas =  JSON.parse(localStorage.getItem("personas")) ?? []

class Empleado {
    constructor(x, y, z, w) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    dormir() {
        console.log("Duermo")
    }
}
const empleado1 = new Empleado("Lucrecia", "Luz", 4000, null)
const empleado2 = new Empleado("Pedro", "Perez", 10000, empleado1) 
console.log(empleado2)

const {x: nombre, y: apellido, z: sueldo, dormir, w: empleadoACargo} = empleado2

console.log(nombre, apellido, sueldo, empleadoACargo)
dormir()

/*
const obj = {nombre: "Pancho", apellido: "Perez"}

let {nombre, apellido } = obj

nombre = "Francisco"
console.log(nombre, apellido)*/

const persona1 = {
    nombre: "Sandra", 
    apellido:"Sanchez", 
    edad: 18,
    vehiculos: [
        {patente: "1234", tipo: "Automovil"},
        {patente: "543", tipo: "Motocicleta"}
    ]
}
const persona2 = structuredClone(persona1)

persona2.vehiculos[0] = null

console.log(persona1)
console.log(persona2)