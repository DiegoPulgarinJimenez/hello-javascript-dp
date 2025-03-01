/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let cadena1 = "cifuM ".trim()
let cadena2 = "cifu D"

console.log(cadena1+cadena2)

// 2. Muestra la longitud de una cadena de texto

console.log((cadena1+cadena2).length)

// 3. Muestra el primer y último carácter de un string

console.log("Valor actual de cadena1:", cadena1);

console.log(cadena1[0], cadena1[cadena1.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadena1.toUpperCase())
console.log(cadena2.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas

let cadena3 = `cifu 
triple 
g`

console.log(cadena3)

// 6. Interpola el valor de una variable en un string

console.log(`definiciones de Cifu ${cadena1}, ${cadena2}, ${cadena3}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(cadena2.replace(" ", "-"))
console.log(cadena2.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena2.includes("Doble"))

// 9. Comprueba si dos strings son iguales

console.log(cadena1 === cadena2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena1.length == cadena2.length)