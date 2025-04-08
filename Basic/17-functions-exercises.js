/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

let num1 = 34;
let num3 = 43;

function suma(num, num2) {
  return num + num2;
}

console.log(suma(num1, num3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let arrayNumeros = [3, 5, 6, 9, 8, 5, 45, 78, 12, 2, 3, 1, 0];

function devuelveMayor(recibeArray) {
  let mayor = 0;
  for (const element of recibeArray) {
    if (element > mayor) {
      mayor = element;
    }
  }
  return mayor;
}

console.log(devuelveMayor(arrayNumeros));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let stringCompleto = "esto es un string que contiene vocales a devolver";

function devuelveVocales(string) {
  let arrrayVocales = [];
  for (const element of string) {
    /* if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            arrrayVocales.push(element)
        } */
    /* if (["a", "e", "i", "o", "u"].includes(element)) {
        arrrayVocales.push(element)
       } */
    if (/[aeiou]/i.test(element)) {
      // Expresión regular
      arrrayVocales.push(element);
    }
  }
  return `el string "${string}" contiene ${arrrayVocales.length} vocales`;
}

console.log(devuelveVocales(stringCompleto));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayDeStrings = ["string1", "string2", "string3", "string4"];

function stringsToMayus(arrayStrings) {
  let arrayMayus = [];
  for (const valor of arrayStrings) {
    arrayMayus.push(valor.toUpperCase());
  }
  return arrayMayus;
}

console.log(stringsToMayus(arrayDeStrings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let numero = 9973;

function verificarPrimo(numeroIngresado) {
  let contador = 0;

  if (
    numeroIngresado < 2 ||
    (numeroIngresado > 2 && numeroIngresado % 2 === 0)
  ) {
    return { esPrimo: false, iteraciones: contador };
  }

  for (let index = 3; index <= Math.sqrt(numeroIngresado); index += 2) {
    contador++;
    if (numeroIngresado % index === 0) {
      // Si el número es divisible por algún número impar, no es primo.
      return { esPrimo: false, iteraciones: contador };
    }
  }
  return { esPrimo: true, iteraciones: contador } // Retornamos un objeto con dos propiedades
}

console.log(verificarPrimo(numero).esPrimo);
console.log(verificarPrimo(numero).iteraciones);
console.log(verificarPrimo(numero));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 4, 6, 7, 0, 90, 4, 6, 8, 12, 23, 12, 14, 90, 1, 9, 0]
let array2 = [3, 6, 8, 9, 0, 4, 5, 6, 7, 7, 90, 3, 4, 5, 1, 4]

function verificarComun(param1, param2) {

  let arrayComunes = []
  let arraySinRepetir = []

  for (let i = 0; i < param1.length; i++) {
    for (let k = 0; k < param2.length; k++) {
      if (param1[i] === param2 [k]) {
        arrayComunes.push(param1[i])
      }     
    }   
  }

  let comunesSinRepetir = new Set(arrayComunes)
  arraySinRepetir = Array.from(comunesSinRepetir)
  return arraySinRepetir
}

console.log(array1.length)
console.log(array2.length)
console.log(verificarComun(array1, array2))

/* function verificarComun(param1, param2) { // Mejorado 
  let arrayComunes = [];

  param1.forEach(elemento => {
      if (param2.includes(elemento) && !arrayComunes.includes(elemento)) {
          arrayComunes.push(elemento);
      }
  });

  return arrayComunes;
} */

console.log(verificarComun(array1, array2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arrayNumerosRandom = [4, 5, 8, 3, 10]

function sumaPares(params) {
  let sumaPares = 0
  params.forEach(element => {
    if (element % 2 === 0) {
      sumaPares += element
    }
  })
  return sumaPares
}

console.log(sumaPares(arrayNumerosRandom))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrayNumerosRandom2 = [4, 5, 8, 3, 10, 34]

function arrayAlCuadrado(params) {
  let arrayCuadrado = []
  params.forEach(element => {
    // arrayCuadrado.push(element**2)
    arrayCuadrado.push(Math.pow(element, 2))
  })
  return arrayCuadrado
}

console.log(arrayAlCuadrado(arrayNumerosRandom2))
 
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let cadenaTexto = "cadena de texto con palabras invertidas"

function invertirPalabras(params) {
  let palabrasInvertidas = []
  let k = 0

  for (let i = 0; i <= params.length; i++) {
    if (params[i] === " " || i === params.length) {
      palabrasInvertidas.push(params.slice(k, i))
      k = i + 1
    }
  }
  
  return palabrasInvertidas.reverse().join(" ")
}

console.log(invertirPalabras(cadenaTexto))

// 10. Crea una función que calcule el factorial de un número dado

let numeroDado = Math.floor(Math.random() * 10)

function calculoFactorial(params) {
  let factorial = 1
  for (let k = 1; k <= params; k++) { // Si sale cero, no entra al for y directamente retorna 1. 
    factorial = k * factorial
  } 
  return factorial
}
console.log(numeroDado)
console.log(calculoFactorial(numeroDado))

// Función anónima

const funAnonima = function (params) {
  console.log(`Esto es una ${params}.`);
}

funAnonima("función anónima asignada a una constante")
