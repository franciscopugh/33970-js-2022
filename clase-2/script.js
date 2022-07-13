/*let desayuno = "Te" //Asignando

if(desayuno == "Cafe") { //Si desayuno es igual a 
    console.log("Desayuno cafe con leche")
    desayuno = "Mate cocido"
} else {
    console.log("No desayuno cafe con leche")
}

console.log(desayuno)

let numero = parseInt(prompt("Ingrese un numero"))


// 13 / 2 = 6 Resto = 0

console.log(numero)

//5 10 12.5 arhajksd = NaN
if(isNaN(numero)) { //Devuelve Verdadero si numero es NaN
    console.log("Numero no valido")
} else {
    if(numero % 2 == 0) {
        console.log("Numero es par")
    } else {
        console.log("Numero es impar")
    }
}


let desayuno = prompt("Ingrese su desayuno").toLowerCase() //.toUpperCase() para mayusculas

let esCafe = (desayuno == "cafe")//CAFE Cafe CaFe CAFe cAfE
let esTe = (desayuno == "te")
let esChoc = (desayuno == "chocolatada")

if(esCafe) {  
    console.log("Desayuno cafe con leche")
} else if(esTe) {
    console.log("Desayuno te con leche")
} else if(esChoc)  {
    console.log("Desayuno chocolatada con leche")
} else {
    console.log("Desayuno mate mirando la pared")
}



let numero1 = 50

if(numero1 >= 50) { // >= no es =>
    console.log("V")
} else {
    console.log("F")
}




let numero1 = 5
let numero2 = "5"

    5 == 5 //V
    "5" == "5" //V
    "5" == 5 //V por que tienen el mismo valor
    "5" === 5 //F por que tienen el mismo valor pero distinto tipo (String y Number)



if(numero1 === numero2) {
    console.log("V")
} else {
    console.log("F")
}
//numero1 == numero2 (V)
//numero1 === numero2 (F)
if(numero1 !== numero2) {
    console.log("V")
} else {
    console.log("F")
}

let numero1 = 12
let numero2 = 22

if(numero1 === 10 || numero2 === 20) {
    console.log("V")
} else {
    console.log("F")
}


    numero1     ||       numero2 
    V            V           V
    V            V           F
    F            V           V
    F            F           F
*/
/*
if(numero1 === 10 && numero2 === 20) {
    console.log("V")
} else {
    console.log("F")
}


    numero1        &&       numero2
        V           V            V
        V           F            F
        F           F            V
        F           F            F



let saludar = "Hola"



    !   saludar
    F      V
    V      F



if(!(saludar == "Hola")) {
    console.log("Te estoy saludando")
} else {
    console.log("Te estoy despidiendo")
}

let numero = 5
if(!(isNaN(numero))) { //Verdadero pero paso a Falso
    if(numero % 2 == 0) {
        console.log("Numero es par")
    } else {
        console.log("Numero es impar")
    }
} else {
    console.log("Numero no valido")
    
}

1-5 "Desaprobado"
6-7 "Aprobado con nota de Bien"
8-9 "Aprobado con nota de Muy Bien"
10 "Aprobado con nota de Excelente"*/

let nota = parseInt(prompt("Ingrese una nota"))

if(nota >= 1 && nota <= 5) { // 5
    console.log("Alumno/a desaprobado/a")
} else if(nota === 6 || nota  === 7) { //nota>=6 && nota<=7
    console.log("Alumno/a aprobado/a con nota de Bien")
} else if(nota === 8 || nota  === 9) { //nota>=6 && nota<=7
    console.log("Alumno/a aprobado/a con nota de Muy Bien")
}  else if(nota === 10) {
    console.log("Alumno/a aprobado/a con nota de Excelente")
} else {
    console.log("Nota no valida")
}

if(nota >= 1 && nota <=10) {
    if(nota <=5) {
        console.log("Alumno/a desaprobado/a")
    } else if(nota <=7) {
        console.log("Alumno/a aprobado/a con nota de Bien")
    } else if(nota <=9) {
        console.log("Alumno/a aprobado/a con nota de Muy Bien")
    } else {
        console.log("Alumno/a aprobado/a con nota de Excelente")
    }
} else {
    console.log("Nota no valida")
}
