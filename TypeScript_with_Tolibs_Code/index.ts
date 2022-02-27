// let nameTemp: any; 
// nameTemp = "Tolib"

// let ageTemp: unknown;
// ageTemp = 18
// ageTemp = "Tolib";

// const foo = (name: string, age: number): string => {
//     return `Hi my name is ${name}. I'm ${age}.`
// }

// foo(2, 2) // => Ощибка параметр name не такого типа

// foo("Tolib", 20) // Работает!

// type Name = "string"

// const sayHello = (name: Name): string => `Hello, ${name}`
// const sayHello = (name: Name|number): string => `Hello, ${name}` // Обединение типов

//=====================================================

// type Person = {
//     name: string;
//     age: number;
// };

// const sayHello = ({name, age}: Person) => `Hello, ${name}. i'm ${age}`;

// sayHello({name: "Tolib", age: 19});

//=====================================================

// Обединение типов
// Типы можно пересекать (оператор &), тем самым 
// создавая тип, содержащий все поля объединяемых типов.
// Типы можно объединять (оператор |), тем самым
// создавая новый тип, означающий один из объединяемых типов.

type Person = {
    name: string;
    age: number;
};

type Programmer = {
    language: 'js' | 'ts';
}

const sayHello = ({name, language}: Person & Programmer) => `Hello, ${name}. I love  ${language}`;

sayHello({name: "Tolib", age: 19, language: 'ts'});

// можно использовать опцианального типа
// Например:
// type Programmer = {
//     language?: 'ts' | 'js';
// }
// и если мы хотим возврашат любымий язык и она не передаль 
// в качестве аргумента то он будет как undefined



