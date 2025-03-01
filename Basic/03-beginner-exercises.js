/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// This is a single line comment

// 2. Escribe un comentario en varias líneas

    /* This is a 
    several lines comment */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let string1 = "String 1"
let number1 = 1
let booleano1 = false 
let bigInt1 = 565646546546546546546546565465465465464n
let bigInt2 = BigInt(56546546464654654654654665454654654654654654)
let null1 = null 
let undefined1
const constante1 = 54545454
let mySimbol1 = Symbol("Symbol 1")

// 4. Imprime por consola el valor de todas las variables

console.log(string1)
console.log(number1)
console.log(booleano1)
console.log(bigInt1)
console.log(bigInt2)
console.log(null1)
console.log(undefined1)
console.log(mySimbol1)
console.log(constante1)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof string1)
console.log(typeof number1)
console.log(typeof booleano1)
console.log(typeof bigInt1)
console.log(typeof bigInt2)
console.log(typeof null1)
console.log(typeof undefined1)
console.log(typeof constante1)
console.log(mySimbol1)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

string1 = "Cambio a String 2"
number1 = 2
booleano1 = true
bigInt1 = 656465465465465464654n
bigInt2 = BigInt(5454545454545)
// null1 = nullValue
undefined1 = undefined
// constante1 = 878787
mySimbol1 = Symbol("6546546")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

string1 = false
number1 = "55"
booleano1 = 89.5
bigInt1 = null
bigInt2 
null1 = 88989888585585552n
undefined1 = 5555
// constante1 = 777
mySimbol1 = true

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const number2 = 1
const string2 = "2"
const boolean2 = true
const bigint3 = 454445454554n
const null2 = null
const undefined2 = ""
const symbol2 = Symbol("Symbol ")

// 9. A continuación, modifica los valores de las constantes

// number2 = 3
// string2 = "52"
// boolean2 = false
// bigint3 = 8888n
// null2 = null
// undefined2 = "sdsd"
// symbol2 = Symbol("Symbol 23")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse