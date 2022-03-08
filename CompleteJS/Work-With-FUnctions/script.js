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