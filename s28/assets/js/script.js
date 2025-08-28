// Reto 1

// Definir
function numbersFrom1To10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

// Llamar
numbersFrom1To10();
numbersFrom1To10();

console.log("-------------------------")

// Definir
function addTwoNumbers(x, y) {
    console.log(`Primer parámetro: ${x}`);
    console.log(`Segundo parámetro: ${y}`);

    let result = x + y;

    console.log(`El resultado de ${x} + ${y} = ${result}`);
}

let num1 = 15;
let num2 = 7;
addTwoNumbers(num1,num2);

function greet(targetName) {
    let message =`Hola ${targetName}, espero tengas un buen día`;
    return message;
}

let name ="Fabiana";

let greetMessage = greet(name);

console.log(greetMessage);

console.log(greet(name));