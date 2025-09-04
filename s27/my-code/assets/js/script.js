console.log("Hi world")

// Asigno a la variable

let nombre = "Mia";

console.log("ANTES DE LA CONDICIONAL");

// Condición

if (nombre.length < 5) {
    console.log("El nombre es corto");
}

if (nombre.length > 8) {
    console.log("El nombre es largo");
}

console.log("AHORA ESTOY AFUERA DEL BLOQUE CONDICIONAL")

console.log("--------------------------------")

// Completamos con else if
if (nombre.length < 5) {
    console.log("Que nombre tan largo tienes!");
} else {
    console.log("Tu nombre no es tan largo.")
}

console.log("--------------------------------")

// Reto 2

//Defino la variable "edad"
let edad = 15;

if (edad >= 18) {
    console.log("Eres mayor de edad!");
} else {
    console.log("Eres menor de edad");
}

console.log("--------------------------------") 

// Reto 3

let number1 = 15;
let number2 = 7;

if (number1 > number2) {
    console.log(`El número ${number1} es mayor que ${number2}`);  
} else {
    console.log(`El número ${number2} es mayor que ${number}`); 
}

console.log("--------------------------------") 

let num1 = 7;
let num2 = 7;

console.log(`Primer número -> ${num1}`);
console.log(`Segundo número -> ${num2}`);

if (num1 > num2) {
    console.log("El primero número es el mayor.")
} else if (num2 > num1) {
    console.log("El segundo número es el mayor.")
} else {
    console.log("Ambos números son iguales.")
}

edad = 21;
let estaEnUSA = true;

if (edad >= 18) {
    if (estaEnUSA) {
        if (edad >= 21) {
            console.log("Eres mayor de edad!")
        }
    } else {
        console.log("Eres menor de edad.")
    }

} else {

}


// Reto con switch
let numberDay = 5;

switch (numberDay) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Valor no válido.")
}