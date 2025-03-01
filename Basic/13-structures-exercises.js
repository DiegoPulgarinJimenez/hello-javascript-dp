/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = ["vaca", "pollo", "gato", "sapo", "perro"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.push("leon")
myArray.splice(0, 0, "paloma")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("libro5")
mySet.add("libro6")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "enero"],
    [2, "febrero"]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

let month = 6
myMap.set(5, "mayo")
let exist = myMap.has(month)
console.log(exist)

if (!exist) {
    console.log(`The month ${month} does not exist`)
} else {
    console.log(myMap.get(month))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let summerMonths = ["junio", "julio", "agosto", "septiembre"]
myMap.set("meses de verano", summerMonths)
console.log(myMap)
console.log(myMap.get("meses de verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayParaSet = []
arrayParaSet.push("array convertido a set y almacenado en un map")
console.log(arrayParaSet)
let nuevoSet = new Set(arrayParaSet)
console.log(nuevoSet)
myMap.set("transformado", nuevoSet)
console.log(myMap)
console.log(myMap.get("transformado"))