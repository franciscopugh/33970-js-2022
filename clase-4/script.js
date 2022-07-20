/*function saludar() {
    console.log("Hola, te estoy saludando")
}

saludar()
saludar()
saludar()
saludar()

function sumar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}

let num1, num2
do {
    num1 = parseFloat(prompt("Ingrese un numero"))
    num2 = parseFloat(prompt("Ingrese un numero"))
} while(isNaN(num1) || isNaN(num2))

let resultado = sumar(num1, num2)
console.log(resultado)

const IVA = 1.21

function calcularIVA(precio = 0) {
    let IVA = 1.30
    return precio * IVA
}

console.log(IVA)
console.log(calcularIVA(100))
console.log(IVA)

function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

const sumar =  function(num1, num2) {return num1 + num2}

const restar = function(num1, num2) {return num1 - num2}

const multiplicar = function (num1, num2) {return num1 * num2}

const dividir = function (num1, num2) {return num1 / num2}

*/

const sumar = (num1, num2) => num1 + num2

const restar = (num1, num2) => num1 - num2

const multiplicar = (num1, num2) => num1 * num2

const dividir = (num1, num2) => num1 / num2

function mostrarValores(operacion, num1, num2) {
    switch(operacion) {
        case "+":
            console.log(sumar(num1, num2))
            break
        case "-":
            console.log(restar(num1, num2))
            break
        case "/":
            console.log(dividir(num1, num2))
            break
        case "*":
            console.log(multiplicar(num1, num2))
            break
        default:
            console.log("Operacion no valida")
    }
}

let respuesta
do {
    let num1, num2, operacion
    do {
        num1 = parseFloat(prompt("Ingrese un numero"))
        num2 = parseFloat(prompt("Ingrese un numero"))
        operacion = prompt("Ingrese una operacion (+,-,*,/)")
    
        if(isNaN(num1) || isNaN(num2)) {
            console.log("El numero ingresado no es valido")
        }
    
        if(num2 === 0 && operacion == "/") {
            console.log("No se puede dividir entre cero")
        }
    
    } while((isNaN(num1) || isNaN(num2)) || (num2 === 0 && operacion == "/"))
    
    mostrarValores(operacion, num1 ,num2)

    do {
        respuesta = prompt("¿Desea ingresar otra operacion?").toLowerCase()
    } while(respuesta != "si" && respuesta != "no")
   
}while(respuesta != "no")
