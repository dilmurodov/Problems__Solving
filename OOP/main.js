// let user = {
//     name: "Tolib",
//     surname: 'Dilmurodov',

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };

// let admin = {
//     __proto__: user, // унаследуем от обекта user, тепер User prototype обекта admin 
//     isAdmin: true,
// }

// admin.fullName = 'Elemurodov Sobirjon'

// console.log(admin.fullName)

// ---------- F.prototype ----------

// Как мы помним, новые объекты могут быть созданы с помощью функции-конструктора new F().

// Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

// let animal = {
//     eats: true
// }

// function Rabbit(name){
//     this.name = name;
// }

// // Rabbit ni animalga bolasi sifatida ulab quyish 
// // (Endi Animal Rabbitnig Prototypei hisoblanadi,)

// Rabbit.prototype = animal; 

// console.log(Rabbit.eats);

// let rabbit = new Rabbit(); // = rabbit.__proto__ = Rabbit

// console.log(rabbit); // => true


// Classes in Js (ES6+ 2015)

// 1. Classes basic

// class User {

//     arr = []; // Это свойства класса

//     constructor(name){ // Это конструктор класса
//         this._name = name; // Это поля класса 
//     }
//     get name (){ // Это геттер
//         return this._name;
//     }
//     set name(value){ // Это сеттер
//         this._name = value;
//     }
//     sayHi() { // Это метод класса
//         console.log(this.name)
//     }
// }

// let user = new User('Tolib');

