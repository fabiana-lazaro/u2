// Reto 1
let person = {
    name: "Fabiana Lázaro",
    age: 14,
    cellphone: "949485778",
    hobbies: ["nadar", "tocar piano", "estudiar inglés", "esuchar música"]
};

console.log(person);

// Reto 2
console.log(person.name);
console.log(person.age);
console.log(person.cellphone);
console.log(person.hobbies);

// Reto 3
person.age = 15;
console.log(person.age);

person.city = "Lima";
console.log(person)

console.log("--------------------------");

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
        ]
    }

// Reto 4
console.log(heroes.members[1].powers[1]);
console.log(heroes.members[2].name);
console.log(heroes.members[2].powers[2]);