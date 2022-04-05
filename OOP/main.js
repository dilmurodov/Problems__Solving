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

//      constructor(name){ // Это конструктор класса
//          this._name = name; // Это поля класса
//      }
//      get name (){ // Это геттер
//          return this._name;
//      }
//      set name(value){ // Это сеттер
//          this._name = value;
//      }
//      sayHi() { // Это метод класса
//          console.log(this.name)
//      }
// }

// let user = new User('Tolib');

// Inheritance CLASSES in JS

// class Animal {
//      constructor(name){
//          this.speed = 0;
//          this.name = name;
//      }
//      run(speed){
//          this.speed = speed;
//          alert(`${this.name} бежит со скоростью ${this.speed}`);
//      }
//      stop(){
//          this.speed = 0;
//          alert(`${this.name} стоит.`)
//      }
// }

// let animal = new Animal('Uy qayvonim');

// class Rabbit {
//      constructor(name){
//          this.name = name
//      }
//      hide(){
//          alert(`${this.name} прячется!`)
//      }
// }

// let  rabbit = new Rabbit("Uzun Quloq");

// Gett er & Setter

// class Person {
//      constructor(name, age){
//          this.fullName = name;
//          this.age = age;
//      }

//      /**
//       * @param {string} name;
//       */

//      set fullName (name) {
//          if (!name.includes(' ')) alert(` ${name} is not Full Name `)
//          else this._fullName = name;
//      }

//     get fullName () {
//         return this._fullName;
//     }
// }

// let name = "tolib"

// let user = new Person("Tolib", 19)

// Practise:

// class Clock {

//    constructor({ template }) {
//      //...
//      this.template = template;
//    }

//    render() {
//      let date = new Date();

//      let hours = date.getHours();
//      if (hours < 10) hours = "0" + hours;

//      let mins = date.getMinutes();
//      if (mins < 10) mins = "0" + mins;

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

// Static Mehods and Properties

/**
 * 1. static methods are not inherited
 * 2. In invoked by only Class or constructon function but not inctances
 * 3.
 */
// class ArrayT {
//   /**
//    * @param {any} number
//    */
//   constructor(number) {
//     this.number = number;
//   }

//   static comparator(a, b) {
//     // Static Method unga faqat ArrayT classidan murojaat qilishimiz mumkun.
//     return b.number - a.number; // decreasing sort
//   }
// }

// let arr = [new ArrayT(1), new ArrayT(2), new ArrayT(3), new ArrayT(4)];
// arr.sort(ArrayT.comparator);
// a rr.sort((a, b) => {
//      return b.number - a.number
// } );
// console.log(arr); // [ ArrayT { number: 4 },  ArrayT { number: 3 }, ArrayT { number: 2 }, ArrayT { number: 1 } ]

// Object create
/**
 * 1. Object create orqali biz Qolgan objectlarga prototypeni yukleymiz.
 */

// let PersonInfo = {
//   sayHello() {
//     console.log(`Hello, ${this.name} 👋`);
//   },
// };

// const john = Object.create(PersonInfo);
/**
 * 1. john bu object demak uning __proto__ si bu bu biz berayotgan PersonInfo objectiga teng buladi.
 * 2. __proto__ ham object uning ham uzining __proto__ si bor u built-in Objectning prototypini kursitadi. Object.prototypening __proto__ i null ni kursitadi.
 */

// console.log(john);
/**  {}
 * [[Prototype]]:  Object
 * sayHello: ƒ sayHello()
 * [[Prototype]]:  Object
 * constructor: ƒ Object()
 * hasOwnProperty: ƒ hasOwnProperty()
 * isPrototypeOf: ƒ isPrototypeOf()
 * propertyIsEnumerable: ƒ propertyIsEnumerable()
 * toLocaleString: ƒ toLocaleString()
 * toString: ƒ toString()
 * valueOf: ƒ valueOf()
 * __defineGetter__: ƒ __defineGetter__()
 * __defineSetter__: ƒ __defineSetter__()
 * __lookupGetter__: ƒ __lookupGetter__()
 * __lookupSetter__: ƒ __lookupSetter__()
 * __proto__: (...)  это означает null
 * get __proto__: ƒ __proto__()
 * set __proto__: ƒ __proto__()
 */

// console.log(john.__proto__.__proto__.__proto__); // null

// Inheritance function cunstructors

// let Person = function (firstName, age) {
//   // Parent Class
//   this.firstName = firstName;
//   this.age = age;
// };

// Person.prototype.sayHello = function () {
//   console.log(`Hello, I'm ${this.firstName}. I'm ${this.age} years old!`);
// };

// let Student = function (firstName, age, course) {
//   // Child Class
//   /**
//    * Здесь this присвоеться на Student function-constuction
//    * Если мы не вызывали бы через call method тогда Person это expression function и его this = undefined
//    * А мы хотим что this дольжен указать Student и поетому явно указываем this(Person) => this(Student)
//    */
//   Person.call(this, firstName, age); // расшираем Class Student с классом конструктора Person, this = Student
//   // is same thing with
//   /**
//    * this.firstName = firstName;
//    * this.age = age;
//    * this.course = course;
//    */
//    this.course = course;
// };

// // И если мы хотим расширет Class Student методами то нам нужно установить в него Person.prototype c Object.create

// console.log(Student.prototype); // => Object.prototype => null

// Student.prototype = Object.create(Person.prototype);

// console.log(Student.prototype); // =>__proto__: Person.prototype => __proto__: Object.prototype => __proto__: null

// Student.prototype.aboutStudent = function () {
//   console.log(
//     `Hello, My name is ${this.firstName} and I'm ${this.age}. I study ${this.course} course`
//   );
// };

// let student = new Student("Tolib", 19, "Software Engeenering");
// student.aboutStudent(); // Hello, My name is Tolib and I'm 19. I study Software Engeenering course
// student.sayHello() // Vualya, its working (bacause we linked Person prototype to Student prototype with Object.create)

// Coding Challange (Inheritance betweeen function contstructions)

// function Car(make, speed){
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.increase = function () {
//   this.speed += 10;
//   console.log(`Car which is maked from ${this.make} is moveing ${this.speed} km/h 🚀`);
// }
// Car.prototype.slow = function () {
//   this.speed -= 5;
//   console.log(`Car which is maked from ${this.make} is moveing ${this.speed} km/h 🚀`)
// }

// function ElectroCar (speed, make, charge) {
//   Car.call(this, speed, make);
//   this.charge = charge;
// }
// ElectroCar.prototype = Object.create(Car.prototype); // Vorisiga Otasini Prototypeini tanishtirib quyishimiz kerak.

// ElectroCar.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// }

// let car = new ElectroCar('GM', 100, 83); // Создаем экземпляр Обекть

// console.log(car);

// Promise

// function loadScript(src) {
//   let script = document.getElementbyTagName('script')
//   script.src = src;
//   script.onload('Alert script already donwloaded!');
// }

// const getCoords = new Promise(function(resolve, reject) {
//   navigator.geolocation.getCurrentPosition(position => {
//     return resolve(position) // Agar position olinsa
//   }, error => {
//     return reject(error) // Agar position olinmasa
//   })
// })

// getLocation.then(res => console.log(res)).catch(error => console.log(error));

// const getLocation = function () {
//   let position = null;

// }

// Examples

// function delay(ms){
//   return new Promise(resolve => setTimeout(resolve, ms))

// }

// delay(3000).then(() => alert('выполнтлось через 3 секунды'));

/**
 * 1.resolve hech qandey argument olmadi chunki deley (f) dan hech qandey qiymat kutilmiyopti.
 * 2. bizda errorlar ni hanling qilib ular bilan ishlash shart bulmagani uchun reject degan argument bermiyommiz executerga.
 */

// const func = async function () {
//   let [data] = await (await fetch('https://restcountries.com/v2/name/uzbekistan')).json()
//   console.log(data)
// }
// func();

/**
 * new Thenable yani object yaratib uni birinchi then dan qaytaryapti. 
 * bizda yangi yaralgan objectning ham then methodi bor 
 * argumentiga sifatida built in function alerni berib yuboryapmiz.
//  */
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve) // function() { native code }
//     // будет успешно выполнено с аргументом this.num*2 через 1 секунду
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result); // (*)
//   })
//   .then(alert); // показывает 2 через 1000мс

/**
 * Prmoise yaratilgan payt hech qandey hatolik topilmadi. 
 * shuning uchun biz resolve orqali keyingi ishimizga javob qaytarib yubordik.
 * 1. img yaratiladi
 * 2. keyin alert(Закончили показ...) chiqadi
 * 3. setTimeout 3 second utib bulgandan sung rasmni uchiradi
 */

// fetch(`https://api.github.com/users/dilmurodov`)
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise((resolve) => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser); // (**) 
//         }, 8000);
//       })
//   )
//   .then((githubUser) => alert(`Закончили показ ${githubUser.name}`));
// срабатывает через 3 секунды

// let getPos = function () {
//   return new Promise(
//     (resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (e) => {
//           resolve(e)
//         },
//         (error) => {
//           reject(error)
//         }
//       )
//     }
//   )
// }

// function flagCountry () {
//   getPos().then(res => consolr.log(res), error => error)
//   let datd = await fetch('https://restcountries.com/v2/name/uzbekistan');
// }

// async function func(){
//     let data = fetch('...');
//     let jsonData = data.json();
// }

// Parallel Promising

// const getCountries = async function (c1, c2, c3){
//     try {
//         const [data1] = await getJson(`https://restcountries.com/v2/name/${c1}`)
//         const [data2] = await getJson(`https://restcountries.com/v2/name/${c2}`)
//         const [data3] = await getJson(`https://restcountries.com/v2/name/${c3}`)
        
//         console.log([data1.capital, data2.capital,data3.capital])
        
//     } catch (error) {
//         console.error(error)
//     }
// };

// const getCountries = async function (c1, c2, c3){
//     try {
//         const data = await Promise.all(
//             [
//                 getJson(`https://restcountries.com/v2/name/${c1}`),
//                 getJson(`https://restcountries.com/v2/name/${c2}`),
//                 getJson(`https://restcountries.com/v2/name/${c3}`)
//             ]
//         )
//         console.log(data);
//     } catch (error) {
//         console.error(error)
//     }
// };


// getCountries('canada', 'russian', 'uzbekistan')