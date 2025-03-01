/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 5 
let producto = 5 
let resta = 5 
let division = 5

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let resultadoSuma = 5
resultadoSuma += suma
let resultadoResta = 5
resultadoResta -= resta
let resultadoProducto = 5
resultadoProducto *= producto
let resultadoDivision = 5
resultadoDivision /= 5

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(3==3)
console.log(3===3)
console.log(3<=3)
console.log(3>=3)
console.log(3>2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(3!=3)
console.log(3==="3")
console.log(3<3)
console.log(3>23)
console.log(3<=2)

// 5. Utiliza el operador lógico and

let nombre1 = "nombre0"
let nombre2 = "nombre2"
let nombre0 = "nombre0"
if (nombre1 && nombre2 !== nombre0) {
    console.log("los nombres son diferentes")
}

// 6. Utiliza el operador lógico or

if (nombre1.length || nombre2.length == nombre0.length) {
    console.log(`los nombres ${nombre0}, ${nombre1} y ${nombre0} tienen  todos ${nombre0.length} caracteres`)
}

// 7. Combina ambos operadores lógicos
let varia = true 
if (nombre1 && nombre2 === nombre0 || varia) {
    console.log(`el valor de varia es: ${varia}, y nombre1 o nombre2 es iguale a ${nombre0}`)
}

// 8. Añade alguna negación

if (!(nombre1 === nombre0)) {
    console.log("Se imprime si la condicíon es falsa")
} else {
    console.log("Se imprime si la condición es verdadera")
}

// 9. Utiliza el operador ternario

let varTernario = 10
const consTernario = 23

varTernario < 23 
? console.log(`${varTernario} si es menor que ${consTernario}`)
: console.log(`${varTernario} no es menor que 23`) 

// 10. Combina operadores aritméticos, de comparáción y lógicas

let a = 35
let b = 34
let d = 34
let c = d - b
if (a % 2 == 0 || c == 1) {
    console.log("al menos una de las condiciones se ha cumplido")
} else {
    console.log(c)
    console.log("ninguna de las condiciones se cumplió")
}