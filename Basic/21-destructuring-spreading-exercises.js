/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array1 = [1, 3, 6, 7, 9, "nombre"]
let [extraido1, extraido2] = array1
console.log(`Los valores extraidos son: ${extraido1} y ${extraido2}`)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [, , extraido3, extraido4, extraido5 = 60, extraido6, extraido7, nuevaAsignacion = 20] = array1
console.log(extraido3, extraido4, extraido5 = 60, extraido6, extraido7, nuevaAsignacion)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objetoCarro = {
    color: "Rojo", 
    marca: "Mazda", 
    traccion: "4X4",
    precio: 999999, 
    objetoMoto: {
        color: "Negro", 
        marca: "Yamaha", 
        traccion: "1X1",
        precio: 555,
    }
}
console.log(objetoCarro)

let {marca, traccion, color} = objetoCarro
console.log(`${marca}, ${traccion}, ${color}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {marca: marca1, traccion: traccion2} = objetoCarro
console.log(marca1, traccion2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {objetoMoto: {color: colorMoto, traccion: traccionMoto, marca: marcaMoto}} = objetoCarro
console.log(colorMoto, marcaMoto, traccionMoto)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array2 = ["uno", "dos", "tres", "cuatro", "cinco"]

let arrayPropagado = [...array1, ...array2, "Último Elemento"]
console.log(arrayPropagado)

// 7. Usa propagación para crear una copia de un array

let copiaPropagado = [...arrayPropagado]
console.log(copiaPropagado)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let animalesDosPatas = {
    razaDosPatas: "humano", 
    pesoDosPatas: 90,
    numeroOjosDosPatas: 2
}

let animalesMuchasPatas = {
    razaMuchasPatas: "aracnido", 
    pesoMuchasPatas: 0.1, 
    numeroOjosMuchasPatas: 8
}

let animalesVariados = {...animalesDosPatas, ...animalesMuchasPatas}
//console.log(typeof(animalesVariados))
console.log(animalesVariados)

// 9. Usa propagación para crear una copia de un objeto

let copiaAnimalesDP = {...animalesDosPatas}
console.log(copiaAnimalesDP)
 
// 10. Combina desestructuración y propagación

/* let {
    razaDosPatas: raza, 
    pesoDosPatas: peso, 
    numeroOjosDosPatas: numeroOjos,
    razaMuchasPatas: raza2, 
    pesoMuchasPatas: peso2, 
    numeroOjosMuchasPatas: nOjos
} = {...animalesDosPatas, ...animalesMuchasPatas}

console.log(raza, numeroOjos, peso, raza2, peso2, nOjos) */

let {
    animalesDosPatas: {razaDosPatas: raza, 
    pesoDosPatas: peso, 
    numeroOjosDosPatas: numeroOjos},

    razaMuchasPatas: raza2, 
    pesoMuchasPatas: peso2, 
    numeroOjosMuchasPatas: nOjos
} = {animalesDosPatas, ...animalesMuchasPatas}

console.log(raza, numeroOjos, peso, raza2, nOjos, peso2)