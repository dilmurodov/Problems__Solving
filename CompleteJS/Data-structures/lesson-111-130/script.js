// ///lesson-111 Enhanced Objects Literals

// let month = ['jan', 'feb', 'jun', 'jul', 'aug']

// let client = {
//     names: ['Ali', 'Muslim', 'John']
// }

// let store = {
//     //.... 
//     // ES6 enhanced object literals
//     client,
//     // ES6 enhanced method
//     sayHello() {
//         //....
//     },
//     // computing properties
//     [month[0]]: 'HTML/CSS',
//     [month[0 + 1]]: 'JS',
//     [month[4 - `${2}`]]: 'Node.js',
//     //....
// }

// console.log(store)

// ///lesson-112 Optional Chaining

// // проверяет левую част ?. выражения на равенство он null/undefined
// openingHours = {
//     dates: 'mon-sun',
//     hour: 8,
// }
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // ES6 enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//         console.log(
//             `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//     },

//     orderPasta(ing1, ing2, ing3) {
//         console.log(
//             `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//         );
//     },

//     orderPizza(mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient);
//         console.log(otherIngredients);
//     },
// };

// console.log(restaurant.categories?.uzbek ?? '!!! Uzbek category is not exist'); // !!! Uzbek category is not exist

// console.log(restaurant['categories']?.uzbek ?? 'Numbers is not defined');

// console.log(restaurant?.orderPasta('cheese', 'meat', 'cucember')) // Here is your declicious pasta with cheese, meat and cucember

// /// lesson-113 Object.values, Object.keys, Object.entries()

// // Property NAME: Object.keys

// // Property VALUES: Object.values

// // Entire Object: Object.entries() => [key, value]

// // lesson-115 Maps(встроенный функция) similar: Maps of other languages :)

// /*
// *   Map как Object, но у него клуюч может любого типа
// *   new Map() // create new map Object
// *   MapName.get(key) // return values if it exist else undefined
// *   MapName.set(key, value) // created an element and return map
// *   Map.size это не функция поэтому не вызываем 
// *   ....
// */

// let map = new Map();
// map.set("1", 'str1')
// map.set(1, 'str2')
// map.set(true, 'str3')

// console.log(map.get("1"))
// console.log(map.get(1))
// console.log(map.get(true))
// console.log(map.size) /// 3

// console.log(map.clear())
// console.log(map) // Map(0){}

// // Цепочка вызовов

// map.set("1", "str1")
//     .set(1, "num1")
//     .set(true, "bool1");

// console.log(map)

// let myMap = new Map();


// ///* Maps alot more useful than Sets

// const rest = new Map();

// ///*Set importantance(Unique elements) and It has not index with that you can acces elemnt of set as nameSet[index] !WRONG

// let mySet = new Set();

// mySet.add('Tolib1')
// mySet.add('Tolib2')
// mySet.add('Tolib3')
// mySet.add('Tolib4')
// mySet.add('Tolib5')
// mySet.add('Tolib6')
// console.log(mySet.has('Bobur') || 'Bobur is not exit in mySet')

// for(let val of mySet){
//     console.log(val)
// }

// console.log(mySet)
// console.log([...mySet])

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//* 1.
const events = new Set([...gameEvents.values()])
console.log([...events])
//* 2 
gameEvents.delete(64)

console.log(gameEvents)

//* 3
let temp = 0;
for(let [key, value] of gameEvents.entries()){
    if(key - temp >= 9){
        console.log(key, value)
    }
    temp = key;
}

//* 4

[...gameEvents.keys()].forEach((item) => {
    let time = item < 45 ? 'FIRST' : 'SECOND';
    console.log(`[${time} HALF] ${item} ${gameEvents.get(item)}`) 
});

console.log([...gameEvents.entries()])
console.log([...gameEvents.keys()])
console.log([...gameEvents.values()])