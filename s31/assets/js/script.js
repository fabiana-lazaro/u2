let num1 = parseInt(prompt("Ingresa un número"));
let num2 = parseFloat(prompt("Ingresa otro número"));

console.log(`${num1} + ${num2} = ${num1 + num2}`);

console.log("----------------------------");

// Reto

let number = parseInt(prompt("Ingresa un número entero"));

if (number % 2 === 0) {
  console.log(`${number} es par.`);
} else {
  console.log(`${number} es impar.`);
}

console.log(`${num} es ${num % 2 === 0 ? "par" : "impar"}.`);
