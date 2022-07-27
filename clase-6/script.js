/*const valores = [true, "Hola", 4, "Chau", false, "Buenos dias"]

valores[1] = "Saludos"
console.log(valores[1])

for(let i = 0; i < valores.length;i++) {
    console.log(valores[i]) //valores[0], valores[1] .. valores[4]
}
const notas = []

let nota1 = prompt("Ingrese una pequeña nota")

notas.unshift(nota1)

console.log(notas)

let nota2 = prompt("Ingrese otra pequeña nota")

notas.unshift(nota2)

console.log(notas)

const alumnos1 = ["Santiago", "Seba", "Emiliano", "Ines", "Matias", "Kevin"]
const alumnos2 = ["Gonza", "Joaquin", "Andres"]
const alumnos3 = alumnos2.concat(alumnos1)


//alumnos.pop()
//alumnos.shift()
//alumnos.splice(1,3)
//console.log(alumnos)
//console.log(alumnos.join("-"))

console.log(alumnos3)



//console.log(alumnos.slice(0,-9))

let alumnoEliminar = prompt("Ingrese un/a alumno/a a eliminar").toLowerCase()

let indice = alumnos.indexOf(alumnoEliminar)

if(indice != -1) {
    alumnos.splice(indice, 1)
} else {
    alert("Alumno/a no encontrado/a")
}

alumnos.splice(0,alumnos.length)

console.log(alumnos)

const alumnos = ["santiago", "seba", "emiliano", "ines", "matias", "kevin", "gonza", "joaquin", "andres"]

console.log(alumnos.includes("ines"))

console.log(alumnos.reverse())

console.log(alumnos)*/

class Gato {
    constructor(nombre, raza, color, peso) {
        this.nombre = nombre
        this.raza = raza
        this.color = color
        this.peso = peso
    }
}

const gato1 = new Gato("Copito de nieve", "Blanco", "Blanco", 4)
const gato2 = new Gato("Gatito con botas", "Naranjoso", "Naranja", 3.2)
const gato3 = new Gato("Peludo", "Indefinida", "Marron", 3.8)
const gato4 = new Gato("Viento Gris", "Atigrado", "Gris", 4.2)

const gatos = [gato1, gato2, gato3, gato4]

console.table(gatos)

const gato = new Gato(prompt("Ingrese el nombre"), prompt("Ingrese la raza"), prompt("Ingrese el color"), parseFloat(prompt("Ingrese el peso")))

gatos.push(gato)

console.table(gatos)
