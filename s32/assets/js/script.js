class Person {
  #cellphone;

  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }

  sayHello() {
    console.log("Hola desde el método.");
  }

  introduce() {
    console.log(
      `Hola buenas noches, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años`
    );
  }

  showCellphone() {
    return this.#cellphone;
  }
}

let person1 = new Person(
  "Fabiana",
  "Lázaro",
  14,
  1.65,
  56,
  ["nadar", "bailar", "tocar piano", "hacer ejercicio"],
  "938848475"
);

console.log(person1);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);
console.log(person1.hobbies);

person1.sayHello();
person1.introduce();

console.log(person1.showCellphone());

class Chef extends Person {
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    super(firstName, lastName, age, height, weight, hobbies, cellphone);
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  introduce() {
    console.log(
      `Hola me llamo ${this.lastName} y soy chef en el restaurante ${this.restaurant}...`
    );
  }

  cook() {
    console.log(
      `El chef ${this.lastName} está cocinando ${this.favoriteFood}...`
    );
  }
}

let chef1 = new Chef(
  "Patricio",
  "Romero",
  64,
  1.75,
  96,
  ["nadar", "bailar", "tocar piano", "hacer ejercicio"],
  "938848475",
  "Flor de Canela",
  "Arroz con Pollo"
);

console.log(chef1.firstName);
console.log(chef1.favoriteFood);
chef1.sayHello();
chef1.cook();

chef1.introduce();
person1.introduce();
