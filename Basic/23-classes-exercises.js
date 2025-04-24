/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Keyboard {

    constructor (type, size = "Medium"){
        this.type = type
        this.size = size
    }

    inUse () {
        console.log(`The ${this.size} ${this.type} keyboard is ON`)
    }

    notInUse () {
        console.log(`The ${this.size} ${this.type} keyboard is OFF`)
    }

    static isLed (param) {
        if (param === 0 ) {
            return "No lights keyboard"
        }
        else {
            return "Lights keyboard"
        }

    }
    
}

let keyboard1 = new Keyboard("Gaming", "Medium")
console.log(keyboard1)

// 2. Añade un método a la clase que utilice las propiedades

keyboard1.inUse()

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(keyboard1.type)
console.log(keyboard1.size)

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

console.log(Keyboard.isLed("0"))
console.log(Keyboard.isLed(0))

// 6. Crea una clase que haga uso de herencia

class OfficeKeyboard extends Keyboard{
    constructor(type, size) {
        super(size)
        this.type = type
    }
}

let officeKeyboard1 = new OfficeKeyboard("Office Keyboard")

console.log(officeKeyboard1)
officeKeyboard1.inUse()
officeKeyboard1.notInUse()

// 7. Crea una clase que haga uso de getters y setters

class Laptop {
    
    constructor(type, size, price) {
        this.type = type
        this.size = size
        this.price = price
    }

    getPrice () {
        return this.price
    }

    setPrice (param) {
        this.price = param
    }

}

let laptop1 = new Laptop("Gaming", 22, 9999)

console.log(laptop1.getPrice())
laptop1.setPrice(1)
console.log(laptop1.getPrice())

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class GamingLaptop extends Laptop {

    #type
    #size
    #price
    
    constructor(type, size, price) {
        super(type, size, price)
    }

    getPrice () {
        return this.#price
    }

    setPrice (param) {
        this.#price = param
    }

}

// 9. Utiliza los get y set y muestra sus valores

let gamingLaptop = new GamingLaptop("Gaming", 30, 9999999999999)

console.log(gamingLaptop.getPrice())
gamingLaptop.setPrice = 2000
console.log(gamingLaptop.getPrice())

// 10. Sobrescribe un método de una clase que utilice herencia 

class Animal {
    #name
    #age
    #size
    constructor(name, age, size) {
        this.#name = name
        this.#age = age
        this.#size = size
        
    }
    walk (){
        return `The ${this.#name} walks`
    }

    get name (){
        return this.#name
    }

    get age (){
        return this.#age
    }

    get size (){
        return this.#size
    }
}

let animal1 = new Animal("Cat", 3, "Big")

console.log(animal1.walk())

class Kangaroo extends Animal {
    constructor (name, age, size){
        super(name, age, size)
    }
    walk (){
        return `The ${this.name} Jumps` 
    }
}

let cangaroo1 = new Kangaroo("Kangaroo")

console.log(cangaroo1.walk())