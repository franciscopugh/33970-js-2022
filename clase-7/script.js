/*function asignarFuncion(cuenta) {
    if(cuenta == "+") {
        return (a,b) => a+b
    } else if(cuenta == "-") {
        return (a,b) => a-b
    } else if(cuenta == "-") {
        return (a,b) => a-b
    } else if(cuenta == "-") {
        return (a,b) => a-b
    } else if(cuenta == "-") {
        return (a,b) => a-b
    } else if(cuenta == "-") {
        return (a,b) => a-b
    } else if(cuenta == "-") {
        return (a,b) => a-b
    }
}

const operacion1 = asignarFuncion("+")
const operacion2 = asignarFuncion("-")

console.log(operacion1(5,10))
console.log(operacion2(5,10))*/

class Empleado {
    constructor(nombre, apellido, sueldo, edad, cargo) {
        this.nombre = nombre
        this.apellido = apellido
        this.sueldo = sueldo
        this.edad = edad
        this.cargo = cargo
    }
}

const empleado1 = new Empleado("Luis", "Carlos", 12000, 20, "Tutor")
const empleado2 = new Empleado("Ezequiel", "Tartaglia", 11000, 19, "Tutor")
const empleado3 = new Empleado("Matias", " Cantora", 12500, 22, "Tutor")
const empleado4 = new Empleado("Bruno", "Simone", 11500, 21, "Tutor")
const empleado5 = new Empleado("Andres", "Pujol", 13000, 24, "Tutor")
const empleado6 = new Empleado("Bruno", "Pedraza", 12500, 25, "Tutor")
const empleado7 = new Empleado("Francisco", "Pugh", 10000, 30, "Profesor")

const empleados = [empleado2, empleado4, empleado1, empleado3, empleado5, empleado6, empleado7]

/*
empleados.forEach((empleadoArray) => {
    empleadoArray.sueldo *= 1.50 // empleadoArray.sueldo = empleadoArray.sueldo * 1.5
    console.log(empleadoArray)
})

const indice = empleados.findIndex(empleado => empleado.nombre == "Martin" )
const empleadosFiltrados  = empleados.filter(empleado => empleado.sueldo > 12000 )

console.log(indice)
if(empleadosFiltrados.length == 0) {
    console.log("No existen elementos")
} else {
    console.log(empleadosFiltrados)
}

console.log(empleados.some(empleado => empleado.cargo == "Profesor"))
const sueldos = empleados.map(empleado => empleado.sueldo)
let acumulador = 0

sueldos.forEach(sueldo => {
    acumulador += sueldo //acumulador = acumulador + sueldo
})

console.log(sueldos)

const cadena = ['h', 'o', 'l', 'a', ' ', 'c','o','d','e','r','s']
console.log(cadena.reduce((prev,act) => prev + act, ''))
a   b   c
1   2   3*/
const empleadosOrdenados = empleados.sort((empl1, empl2) => {
    if (`${empl1.nombre} ${empl1.apellido}` < `${empl2.nombre} ${empl2.apellido}`) {
      return -1;
    }
    if (`${empl1.nombre} ${empl1.apellido}` > `${empl2.nombre} ${empl2.apellido}`) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  })

console.log(empleadosOrdenados)