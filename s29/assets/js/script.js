let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

console.log(`El tamaño del array es ${numbers.length}`);
console.log(`Primer elemento del arreglo: ${numbers[0]}`);
console.log(`Último elemento del arreglo: ${numbers^[numbers.length - 1]}`)

// Reto 1
let fruits = ["manzana", "plátano", "mandarina", "granadilla", "arándanos"];

console.log(fruits);

console.log("-------------------")

// Reto 1
for (let i = 0; i<=26; i += 3){
    console.log(i);
}

console.log("NÚMEROS DEL 10 AL -10, de 2  en 2");

for (let i = 10.5; i >= -9.5; i-=2) {
    console.log(i);
}

console.log("-------------------");

let iterator = 15;

while (iterator <= 75) {
    console.log(iterator);
    iterator += 5;
}