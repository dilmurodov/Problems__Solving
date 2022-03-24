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
//     this.name = name
// }

// let rabbit = new Rabbit('Uzun quloq')

// console.log(rabbit); // Rabbit tipidagi ekzemplyar object yaratildi.

// console.log(rabbit.__proto__); // Always point to rabbit's own prototype objects => {}

// rabbit.__proto__.age = 19;

// console.log(rabbit.__proto__); // => {age: 19}

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

// Inheritance CLASSES in JS

// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}`);
//     }
//     stop(){
//         this.speed = 0;
//         alert(`${this.name} стоит.`)
//     }
// }

// let animal = new Animal('Uy qayvonim');

// class Rabbit {
//     constructor(name){
//         this.name = name
//     }
//     hide(){
//         alert(`${this.name} прячется!`)
//     }
// }

// let rabbit = new Rabbit("Uzun Quloq");

// Getter & Setter

// class Person {
//     constructor(name, age){
//         this.fullName = name;
//         this.age = age;
//     }

//     /**
//      * @param {string} name;
//      */

//     set fullName (name) {
//         if (!name.includes(' ')) alert(` ${name} is not Full Name `)
//         else this._fullName = name;
//     }

//     get fullName () {
//         return this._fullName;
//     }
// }

// let name = "tolib"

// let user = new Person("Tolib", 19)

// Practise:

// class Clock {

//   constructor({ template }) {
//     //...
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();



