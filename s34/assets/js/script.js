let fruits = ["apple", "orange", "papaya"];
console.log(fruits);

console.log("PUSH");
fruits.push("grape");

console.log(fruits);

console.log("POP");
let lastItem = fruits.pop();

console.log(fruits);

console.log("UNSHIFT");
fruits.unshift("banana");

console.log(fruits);

console.log("SHIFT");
let lastItem2 = fruits.shift();
console.log(fruits);

console.log(lastItem2);

console.log("INCLUDES");
console.log(fruits.includes("passion fruit"));
console.log(fruits.includes("apple"));

console.log("INDEXOF");
console.log(fruits.indexOf("papaya"));
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("blueberry"));

console.log("JOIN");
let fruitsString = fruits.join();
console.log(fruitsString);

console.log(fruits.join(" "));
console.log(fruits.join("12345678910"));
console.log(fruits.join(";"));

let randomArray = ["hola", 15, 55.5, false, "chau"];
console.log(randomArray.join("."));

console.log("------------------");

fruits = ["apple", "orange", "papaya", "passion fruit", "grape", "banana"];

console.log("ARREGLO ORIGINAL");
console.log(fruits);

console.log("SLICE");
let slicedFruits = fruits.slice(2);
console.log(slicedFruits);

console.log(fruits.slice(2, 5));

console.log("SPLICE");
fruits.splice(1, 3, "watermelon", "cherry");
console.log(fruits);

console.log("----------------------");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);

console.log("FILTER");
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);

let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

console.log("-------------------");

console.log("OBJETO MATH");

console.log("Math.round()");
console.log(Math.round(14.2));
console.log(Math.round(14.9));

console.log("Math.ceil()");
console.log(Math.ceil(14.1));

console.log("Math.floor()");
console.log(Math.floor(14.9));
