/*console.log(1)
console.log(2)
console.log(3)

console.log(1000)
// INICIO       FIN     ACTUALIZACION
for(let i = 1; i < 1001; i++ ) { // i+=1 i = i +1
    console.log(i)
}


let acumulador = 0

for(let i = 0; i<10;i++) {
    
    let nota = parseInt(prompt("Ingrese una nota"))
   /*
    if(nota >10 || nota <1) {
        let respuesta = prompt("Numero no valido, desea ingresar mas numeros?").toLowerCase()
        if(respuesta == "no") {
            break
        }    
    }
    acumulador += nota //acumulador = acumulador + nota
}

console.log("El promedio de notas es " + (acumulador / 5))
console.log(`El promedio de notas es ${acumulador / 5}`)

for(let i = 0; i < 1001; i++) {
    if(i % 2 != 0) {
        continue
    }
    console.log(i)
}

let repetir = false
while(repetir) { //repetir == true
    let numero1 = parseFloat(prompt("Ingrese un numero"))
    let numero2 = parseFloat(prompt("Ingrese otro numero"))
    console.log(numero1 + numero2)
    let respuesta = prompt("Desea ingresar mas numeros?").toLowerCase()

    if(respuesta == "no") {
        //break
        repetir = false
    }
}*/

let numero1,numero2,operacion

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion matematica (+,-,*,/)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresa numeros validos")
    }

    if(operacion == "/" && numero2 === 0) {
        alert("No se puede dividir entre cero")
    }

} while((isNaN(numero1) || isNaN(numero2)) || (operacion == "/" && numero2 === 0)) //Repetir si es TRUE

switch(operacion) {
    case "+":
        alert(`El resultado es ${numero1 + numero2}`)
        break
    case "-":
        alert(`El resultado es ${numero1 - numero2}`)
        break
    case "/":
        alert(`El resultado es ${numero1 / numero2}`) 
        break  
    case "*":
        alert(`El resultado es ${numero1 * numero2}`)
        break
    default:
        alert("Operacion no valida")
}

