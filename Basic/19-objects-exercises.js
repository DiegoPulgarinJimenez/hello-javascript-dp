/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let table = {
    weight: 45, 
    size: "Large", 
    color: "White",
    voltear: function () {
        console.log("La mesa ha sido volteada")
    },
    tumbar (){
        console.log("La mesa ha sido tumbada") // Manera más actual
    }
}
console.log(typeof(table))

// 2. Accede y muestra su valor

console.log(table.color)

// 3. Agrega una nueva propiedad

table.used = true
console.log(table)

// 4. Elimina una de las 3 primeras propiedades

delete table.color
console.log(table)

// 5. Agrega una función e invócala

function rotar() {
    return "La mesa ha sido rotada"
}

table.rotar = rotar

table.rotar()
table.tumbar()
table.voltear()

// 6. Itera las propiedades del objeto

for (const key in table) {
    console.log(key + " : " + table[key])
}

// 7. Crea un objeto anidado

const casa = {
    locacion : "Copacabana", 
    precio : 908788, 
    cuartos : {
        tamaño : "Grande", 
        color: "White", 
        vender () {
            let estado = true
            console.log(`La casa ha sido vendida?: ${estado}`)
        }
    }, 
    propietario : "Ninguno", 
    color : "White"
}

casa.cuartos.cantidad = 3

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(casa.cuartos)
casa.cuartos.vender()
console.log(casa.cuartos.cantidad)

// 9. Comprueba si los dos objetos creados son iguales

console.log(table === casa)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(casa.color === casa.cuartos.color)
console.log(table.color === casa.color)
console.log(table.color === casa.cuartos.color)
console.log(table.rotar())