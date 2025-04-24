/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

function div(n1, n2) {
    try {
        return n1/n3
    } catch (error) {
        if (error instanceof ReferenceError){
            console.log("ReferenceError:", error.message)
        }
    }
}

console.log(div(6, 0))

// 2. Captura una excepción utilizando try-catch y finally

function add(n1, n2) {
    try {
        return n1+n4
    } catch (error) {
        if (error instanceof ReferenceError){
            console.log("ReferenceError:", error.message)
        }
    } finally {
        return "Have a good day!"
    }
}

console.log(add(6, 45))

function verifyDivByZero(n1, n2) {
    let result
    try {
        if (n2 === 0) {
            throw new TypeError("Unable to divide by Zero")            
        } 
        result = n1/n2        
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("TypeError", error.message)
            return "Routine terminated successfully"
        }
    } finally {
        if (result === undefined) {
            return "Program Finished Successfully..."
        }
        return `${result} \nProgram Finished Successfully...`
    }
}

console.log(verifyDivByZero(8, 9999))

// 3. Lanza una excepción genérica

function sub(n3, n5) {
    try {
        return n3-n7
    } catch (error) {
        return "There was an error"
    }
}

console.log(sub(9, 56))

// 4. Crea una excepción personalizada

class StrException extends Error {
    constructor(message, str) {
        super(message)
        this.name = "StrException"
        this.str = str
    }

    printStr (){
        //console.log(`Invalid value received: ${this.str}`)
        console.log("Invalid value received:", this.str)
        //return `Invalid value received: ${this.str}`
    }
}

// 5. Lanza una excepción personalizada

function receiveStr(str) {
    let result, errorMessage
    try {
        if (typeof(str) !== ("string")) {
            throw new StrException(`Not a String: ${str}`, str);
        }
        result = str    
    } catch (error) {
        if (error instanceof StrException) {
            //console.log(error.printStr())
            error.printStr()
            console.log(error.toString())
            //console.log(error)
            //errorMessage = `${error.message}`
            errorMessage = error.message
        }
    } finally {
        if (result === undefined) {
            return `${errorMessage} \nProgram Finished Sucesfully... -->\n`
        }
        return `${result} \nProgram Finished Sucesfully... -->\n` 
    }    
}

//console.log(receiveStr("This is a verified string"))
console.log(receiveStr(8))

// 6. Lanza varias excepciones según una lógica definida

function typeCalc(value) {
    try {
        if (Number.isInteger(value)) {
            throw new TypeError("The value is an integer")            
        }
    } catch (error) {
        console.log(`The value [${value}], entered is an integer`, error.message)
    }

    try {
        if (value === undefined) {
            throw new ReferenceError("The value is undefined")            
        }
    } catch (error) {
        console.log(`The value [${value}], entered is undefined`, error.message)
    }

    try {
        if (typeof(value) === "string") {
            throw new TypeError("The value is a String");
        }
    } catch (error) {
        console.log(`The value [${value}], entered is a string`, error.message)
    } finally {
       return "Routine Finished --> \n"
    }
}

console.log(typeCalc("89"))
console.log(typeCalc())
console.log(typeCalc(8998))

// 7. Captura varias excepciones en un mismo try-catch

function miniCalc(operation, n1, n2) {

    let resultado

    function add(n1, n2) {
        return n1 + n2
    }

    function div(n1, n2) {
        return n1 / n2
    }
    
    try {
        if (operation === "add") {
            if (typeof(n1) === "string" || typeof(n2) === "string") {
                throw new TypeError("The value is not a number")
            }
            resultado = add(n1, n2)
        } else if (operation === "div"){
            if (n2 === 0) {
                throw new TypeError("Unable to divide by Zero")                
            }
            resultado = div(n1, n2)
        } else {
            console.log("Invalid operation")
            return "exit with value 1 --> \n"
        }
    } catch (error) {
        if (error instanceof TypeError && operation === "add") {
            console.log("Only able to add up numeric values |", error.message)
        }
        else if(error instanceof TypeError && operation === "div"){
            console.log("Dividing by Zero is not defined |", error.message)
        }
    }

    return `Operation result: ${resultado}`
}

console.log(miniCalc("3", 43, 54))
console.log(miniCalc("add", 4546, "222"))
console.log(miniCalc("div", 12, 0))

console.log("------------------------------------------------------------------\n")

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10