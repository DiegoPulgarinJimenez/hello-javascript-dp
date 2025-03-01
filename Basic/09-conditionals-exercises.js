/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = 'Diego';

// if (myName === 'Diego') {
//     console.log(myName);
// }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = 'Diego';
let password = '1234'; 

if (user !== myName || password !== '1234') {
    console.log('Usuario o contraseña incorrectos');
} else {
    console.log(`Bienvenido, ${myName}.`);
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num1 = 34
if (num1 > 0) {
    console.log('El número es positivo');
} else if (num1 < 0) {
    console.log('El número es negativo');
} else {
    console.log('El número es cero');
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age1 = 16
let votingAge = 18

if(age1 > 0 && age1 < 18){
    console.log(`You are not able to vote yet. You will be able to vote in ${(votingAge-age1)} year`)
} else if(age1 >= votingAge) {
    console.log('You are able to vote, congratulations!')
} else {
    console.log('You may enter a number that is greater than 0')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let variableEdad = age1 >= votingAge ? 'You are an adult' : 'You are not an adult'
console.log(variableEdad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month1 = 11

if (month1 == 0 || month1 == 12 || month1 == 1 || month1 == 2){
    console.log('We are in winter')
} else if (month1 == 3 || month1 == 4 || month1 == 5){
    console.log('We are in spring')
} else if (month1 == 6 || month1 == 7 || month1 == 8){
    console.log('We are in summer')
} else if (month1 == 9 || month1 == 10 || month1 == 11){
    console.log('We are in fall')
} else {
    console.log('Enter a correct month')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month1 == 1){
    console.log('Enero tiene 31 días')
} else if (month1 == 2){
    console.log('Febrero tiene 28 días y 29 si es bisiesto')
} else if (month1 == 3){
    console.log('Marzo tiene 31 días')
} else if (month1 == 4){
    console.log('Abril tiene 30 días')
} else if (month1 == 5){
    console.log('Mayo tiene 31 días')
} else if (month1 == 6){
    console.log('Junio tiene 30 días')
} else if (month1 == 7){
    console.log('Julio tiene 31 días')
} else if (month1 == 8){
    console.log('Agosto tiene 31 días')
} else if (month1 == 9){
    console.log('Septiembre tiene 30 días')
} else if (month1 == 10){
    console.log('Octubre tiene 31 días')
} else if (month1 == 11){
    console.log('Noviembre tiene 30 días')
} else if (month1 == 12){
    console.log('Diciembre tiene 31 días')
} else {
    console.log('Enter a correct month')
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idiom = 'french'

switch (idiom) {
    case 'french':
        console.log('Bonjour')
        break;
    case 'spanish':
        console.log('Hola')
        break;
    case 'english':
        console.log('Hello')
        break
    default:
        console.log('The available languages are: French, English, Spanish')
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let month = 0
switch (month) {
    case 0:
        console.log('We are in winter')
        break;
    case 1:
        console.log('We are in winter')
        break;
    case 2:
        console.log('We are in spring')
        break;
    case 3:
        console.log('We are in spring')
        break;
    case 4:
        console.log('We are in spring')
        break;
    case 5:
        console.log('We are in summer')
        break;
    case 6:
        console.log('We are in summer')
        break;
    case 7:
        console.log('We are in summer')
        break;
    case 8:
        console.log('We are in fall')
        break;
    case 9:
        console.log('We are in fall')
        break;
    case 10:
        console.log('We are in fall')
        break;
    case 11:
        console.log('We are in winter')
        break;
    default:
        console.log('Enter a valid month')
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

month1 -= 1
switch (month1) {
    case 0:
        console.log('Enero tiene 31 días')
        break;
    case 1:
        console.log('Febrero tiene 28 días y 29 si es bisiesto')
        break;
    case 2:
        console.log('Marzo tiene 31 días')
        break;
    case 3:
        console.log('Abril tiene 30 días')
        break;
    case 4:
        console.log('mayo tiene 31 días')
        break;
    case 5:
        console.log('Junio tiene 30 días')
        break;
    case 6:
        console.log('Julio tiene 31 días')
        break;
    case 7:
        console.log('Agosto tiene 31 días')
        break;
    case 8:
        console.log('Septiembre tiene 30 días')
        break;
    case 9:
        console.log('Octubre tiene 31 días')
        break;
    case 10:
        console.log('Noviembre tiene 30 días')
        break;
    case 11:
        console.log('Diciembre tiene 31 días')
        break;
    default:
        console.log('Enter a valid month')
        break;
}