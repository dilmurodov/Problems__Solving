///lesson-111 Enhanced Objects Literals

let month = ['jan', 'feb', 'jun', 'jul', 'aug']

let client = {
    names: ['Ali', 'Muslim', 'John']
}

let store = {
    //.... 
    // ES6 enhanced object literals
    client,
    // ES6 enhanced method
    sayHello() {
        //....
    },
    // computing properties
    [month[0]]: 'HTML/CSS',
    [month[0 + 1]]: 'JS',
    [month[4 - `${2}`]]: 'Node.js',
    //....
}

console.log(store)

///lesson-112 Optional Chaining

// проверяет левую част ?. выражения на равенство он null/undefined
openingHours = {
    dates: 'mon-sun',
    hour: 8,
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

console.log(restaurant.categories?.uzbek ?? '!!! Uzbek category is not exist'); // !!! Uzbek category is not exist

console.log(restaurant['categories']?.uzbek ?? 'Numbers is not defined');

console.log(restaurant?.orderPasta('cheese', 'meat', 'cucember')) // Here is your declicious pasta with cheese, meat and cucember

/// lesson-113 Object.values, Object.keys, Object.entries()

// Property NAME: Object.keys

// Property VALUES: Object.values

// Entire Object: Object.entries() => [key, value]

// lesson-115 Sets(встроенный функция) similar: sets of other languages



