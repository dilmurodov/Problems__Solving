/// Default Parametr of Functions


// const flightList = [];

// const createFlight = function (flightNum, numPassengers = 1, price = 800 * numPassengers) {

//   const flight = {
//     flightNum,
//     numPassengers,
//     price
//   }

//   console.log(flight)
//   flightList.push(flight)
// }
// // createFlight('FH124')
// // createFligth('FH124', 1, 2)
// // createFlight('FH1452', 100)
// createFlight('FH124', undefined, 100)

/// How Passing Arguments Works: Value and Reference Type


// const flight = 'FH124';
// const person = {
//     name: 'Tolib',
//     passport: 123123123,
// }

// const checkIn = function (FlightNum, Passenger) {
//   FlightNum = 'FH245';
//   Passenger.name = 'Mr. ' + Passenger.name;

//   if(Passenger.passport === 123123123){
//     console.log('CheckIN')
//   } else console.log('Wrong Passenger')
// }

// checkIn(flight, person);
// console.log(person) // { name: 'Mr. Tolib', passport: 123123123 } becouse it object is Reference Type
// console.log(flight) // 'FH124' flight is string Primitive Type

/// First-Class vs Higher Order Functions

// Higher Order Functions

// const even = (num) => { return num % 2 === 0; }

// function not(f) {
//     return function (...args) {
//         console.log(this)
//         let result = f.apply(args);
//         return !result;
//     }
// }

// let odd = not(even);

// [1, 3, 3, 4].every(odd)

//  Closure 

// function cacheDecoration(func) {
//     let cacheList = new Map();
//     return function (x) {
//         if (cacheList.has(x)) {
//             console.log(`${x}'s cache already exist!`)
//             return cacheList.get(x)
//         }

//         let result = func(x);

//         cacheList.set(x, result);

//         return result;
//     };
// }

// function cache(x) {
//     console.log('Кештрование успешно выпольнено!')
//     return x;
// }

// let makeCache = cacheDecoration(cache);
// makeCache(2); // 'Кештрование успешно выпольнено!' => 2
// makeCache(2); // "2's cache already exist!" => 2
// makeCache(3); // 'Кештрование успешно выпольнено!' => 3

// Call/Apply

// Call - явно указывает this и если необходимо принимает параметр => func.call(this, arg)
// Apply - он похоже на Call он принимат параметр как массив => func.apply(this, [args1, args2, ...])

// let worker = {
//     someMethod() {
//       return 1;
//     },
//     makeCache(x){
//       console.log('Кеширование успешно выпольнено!')
//       return x * this.someMethod(); // (*)
//     }
//   };

//   function cacheDecoration (func){
//     let cacheList = new Map();
//     return function (x) { // Function Expression
//       if (cacheList.has(x)){
//         console.log(`${x}'s cache already exist!`)
//         return cacheList.get(x)
//       }

//       let result = func.call(this, x); // (**) // Внутри Function expression, Function this = undefined

//       cacheList.set(x, result);

//       return result;
//     };
//   }

//   worker.makeCache(1) // Оригинальное метод работает
//   worker.makeCache = cacheDecoration(worker.makeCache);
//   worker.makeCache(1);
//   worker.makeCache(2);

// Apply()

// let worker = {
//   someMethod() {
//     return 1;
//   },
//   makeCache(x, y) {
//     console.log(`Кеширование успешно выпольнено! на ${x} и ${y}`)
//     return x + y; // (*)
//   }
// };

// function cacheDecoration(func, hash) {
//   let cacheList = new Map();
//   return function () {
//     let key = hash(arguments) // (*) что бы вызват как единое ключ  
//     if (cacheList.has(key)) {
//       console.log(`${key}'s cache already exist!`)
//       return cacheList.get(key);
//     }

//     // let result = func.call(this, ...arguments); // (**) 
//     let result = func.apply(this, arguments);

//     cacheList.set(key, result);

//     return result;
//   };
// }

// const hash = (args) => {
//   return `${args[0]},${args[1]}`;
// }

// const hash = function () {
//   console.log(arguments)
//   return [].join.call(arguments);
// }

// worker.makeCache = cacheDecoration(worker.makeCache, hash);
// let func = worker.makeCache;
// func(1, 2);
// func(2, 5);

// Задача - 1

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

// function work(a, b){
//   // console.log(this)
//   console.log(a + b);
// }

// const spy = function(func){

//   function wrapper (...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments); // this => work
//   }
//   wrapper.calls = []; // create function property - Array
//   return wrapper;
// }

// work = spy(work);

// work(1, 2);
// work(2, 3);

// for(let args of work.calls){
//   console.log('call: ' + args.join(','));
// }

// Задача - 2
// Задерживающий декоратор
// важность: 5
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:


// function f(x) {
//   console.log(x);
// }

// function delay (f, ms) {
//   return function () {
//     setTimeout(() => {
//       f.call(this, ...arguments);
//     }, ms);
//   };
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// let f = debounce(console.log, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 700); // выполняется
// setTimeout( () => f(5), 1100); // проигнорирован (прошло только 400 мс от последнего вызова)

// function debounce(f, ms) {
//   let isCooldown = false;

//   // function wrapper(){
//   if (isCooldown) return;
//   f.apply(this, arguments);
//   isCooldown = true;
//   setTimeout(() => isCooldown = false, ms);
// }
// return wrapper;

//   return function () {
//     if(isCooldown) return;
//     f.call(this, ...arguments);
//     isCooldown = true;
//     setTimeout(() => isCooldown = false, ms);
//   }
// }
// lesson - 1

// function sum(a){
//   return function (b){
//     return a + b;
//   }
// }
// console.log(sum(2)(3));


// function sum(a, b){
//   return a + b;
// }

// console.log(sum(1, (function(a, b) {
//   return a + b;})(1, 2)));

// function count(){
//   let counter = 0;
//   return function(){
//     return counter++;
//   }
// }

// let c = count();
// console.log(c());
// console.log(c());
// console.log(c());

// Functions Accepting Callback functions

// let word = prompt('Gapni kiriting:');

// function kattaHarf(str){
//   return str.toUpperCase();
// }

// function kichikHarf(str){
//   return str.toLowerCase();
// }

// function birinchiHarf(str){
//   str = str.toLowerCase();
//   let arr = str.split(' ');
//   arr.forEach((item, index) => {
//     arr[index] = item[0].toUpperCase() + item.slice(1);
//   });

//   return arr.join(' ');
// }

// function camelCase(str){
//   str = str.toLowerCase();
//   let arr = str.split(' ');
//   arr.forEach((item, index) => {
//     arr[index] = item[0].toUpperCase() + item.slice(1);
//   });

//   return arr.join('')[0].toLowerCase() + arr.join('').slice(1);

// }

// function transfrom (word, f){
//   return f(word);
// }
// console.log(transfrom(word, kattaHarf));
// console.log(transfrom(word, kichikHarf));
// console.log(transfrom(word, birinchiHarf));
// console.log(transfrom(word, camelCase));

// Functions Returning Functions

// function sum(f){
//   return function(a){
//     return function(b){
//       return f(a, b);
//     }
//   }
// }
// let f = function (a, b){
//   return a+b;
// }
// let createSumm = sum(f);

// // let add = createSumm(1);

// // console.log(add(2));

// console.log(createSumm(1)(2))

// bind => function which his this is binded

'use strict'

// function compose(f, g){
//   return function( ...args){
//     return f.call(this, g.call(compose, ...args));
//   };
// }

// const sum = function (x, y) {return x+y};

// const square = x => x*x;

// let res = compose(square, sum)(2, 3);

// console.log(res)


const person = {
  count: 0,
  counter(){
    this.count++;
    console.log(this.count);
  }
}

let click = person.counter;
click.call(person);