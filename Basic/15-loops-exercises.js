/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20 

let j = 1
let arrayNumeros = []
while (j <= 20) {
   arrayNumeros.push(j)
   j++
}
console.log(arrayNumeros)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0
for (let k = 0; k <= 100; k++) {
    suma += k
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let i = 1
let arrayPares = []
do {
    if (i % 2 == 0) {
        arrayPares.push(i)
    }
    i++
} while (i <= 50);
console.log(arrayPares)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let arrayNombres = ["diego", "ferney", "lili", "sofia"]
for (const valor of arrayNombres) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadenaTexto = "cadena de texto con vocales"
let arrayVocales = []
let arrayVocales2 = []

for (const valor2 of cadenaTexto) {
    if (valor2 === "a" || valor2 === "e" || valor2 === "i" || valor2 === "o" || valor2 === "u") {
        arrayVocales.push(valor2)
    }
}
console.log(arrayVocales)

for (const valor3 of cadenaTexto) {
    switch (valor3) {
        case "a":
            arrayVocales2.push(valor3)
            break;
        case "e":
            arrayVocales2.push(valor3)
            break;
        case "i":
            arrayVocales2.push(valor3)
            break;
        case "o":
            arrayVocales2.push(valor3)
            break;
        case "u":
            arrayVocales2.push(valor3)
            break;    

        default:
            break;
    }
}
console.log(arrayVocales2)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let productoNumeros = 1
for (let index = 0; index < arrayNumeros2.length; index++) {
    productoNumeros *= arrayNumeros2[index]
}
console.log(productoNumeros)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let tabla = 5
for (let i = 0; i <= 10; i++){
    console.log(`${tabla} * ${i} = ${i * tabla} \n`)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaDeTexto = "cadena de texto a invertir"
let cadenaInvertida = ""
for (let index = cadenaDeTexto.length - 1; index >= 0 ; index--) {
    cadenaInvertida += cadenaDeTexto[index]
}
console.log(cadenaInvertida)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let inicia = 0
let inicia2 = 1
let resultadoSecuencia = 0
let limite = 9
let secuenciaFibonacci = [inicia, inicia2]

while (secuenciaFibonacci.length <= limite) {
    resultadoSecuencia = inicia + inicia2
    inicia = inicia2
    inicia2 = resultadoSecuencia
    secuenciaFibonacci.push(resultadoSecuencia)
}
console.log(secuenciaFibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayDeNumeros = [45, 78, 12, 90, 34, 67, 23, 89, 56, 10, 92, 3, 77, 55, 81, 19, 42, 68, 74, 99, 1, 1, 2, 3, 5, 8, 13, 21, 34]
let arrayMayores = []
for (const element of arrayDeNumeros) {
    if (element > 10) {
        arrayMayores.push(element)
    }
}
console.log(arrayMayores)