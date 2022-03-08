const person = {
    "name": "Tolib",
    "age": 19,
};

console.log(person.name); //=> Tolib
delete person.name; // delete property
console.log(person.name) // undefined

person.sourname = "Dilmurodov"; // add new property
console.log("sourname" in person) //=> true

let sourname = "sourname"
console.log(person.sourname) // Dilmurodov

// let name = prompt("Enter your name: ");
person.name = name
console.log(person.name)

// Перебор Обекту

let user = {
    "name": "Tolib",
    "age": 19,
    "sourname": "Dilmurodov",
}

for(let key in user){
    console.log(`"${key}": "${user[key]}"`)
}

//===========================================

let person1 = {
    "name": "Tolib"
}

let person2 = {
    "age": 19,
}

person2.__proto__ = person1;

console.log([person2.name]) //=> Tolib
console.log("name" in person2) //=> true
console.log(person2.hasOwnProperty("name")) //=> false


// Перебор свойств объекта можно осуществить с помощью цикла: for (property in obj). Также для итерации по объекту можно использовать:
// Object.keys() - вернет массив ключей свойств объекта
// Object.values() - вернет массив значений свойств объекта
// Object.entries() - вернет массив массивов вида [ключ, значение]

let user1 = {
    "name": "Tolib",
    "age": 19,
    "sourname": "Dilmurodov"
}

let user2 = {
    "student": true,
    "engeener": true,
}

user2.__proto__ = user1

Object.keys(user1) // [name, age, sourname]
Object.values(user2) // [student, engeener]
console.log(Object.entries(user2))

for(let keys in user2){
    console.log(keys) // student, engeener, sourname, name, age 
}


