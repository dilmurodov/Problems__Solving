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

// если мы не хотим передать поля но создвать Custom type то используем Record<type1, type2, ...>

// Например:

// type Student = Record<string, number>

// Если мы хотим удалить какое то поля из нашего Custom type то 
// используем Omit< Название CutomType, 'Название ключ свойства'>
// Например: 

// type User = {
//     name: string,
//     sourname: string,
// }

// type NewUser = Omit<User, 'sourname'>

// const SayHello = ({name, sourname}: NewUser):string => { // Ощибка,свойства sourname удалён
//     return `Hello ${name}`;
// }

// Как можно сделать тип поли опцианальным? Используем Partial

// Например:

// type User = {
//     name: string,
//     sourname: string,
// }

// type NewUser = Partial<User>

// // Это равно на:

// type User = {
//     name?: string,
//     suourname?: string,
// }

// Интерфейсы:

// enum - перечислямый множество

enum MethodsEnum {
    GET = 'GET',
    POST = 'POST'
}

interface IApiRequest {
    method: MethodsEnum,
    url: string,
    formData?: boolean,
    readonly apiDomen: string // Польный адресс куда мы хотим отправит запрос
}

// Явно указываем тип IAPiRequest

// const request: IApiRequest = {
//     method: MethodsEnum,
//     url: '/user/get/',
//     apiDomen: 'http://google.com'
// }

// request.apiDomen = '' // Cannot assign to 'apiDomen' because it is a read-only property

// request.url = 'photos/get' // Всё работает :)

interface IUserAPiRequest<T, UserNameT> extends IApiRequest {
    userID: T;
    getApiDomen(): string;
    getUserID(): T;
    userName: UserNameT;
}

// const request: IUserAPiRequest = { // Ошибка 'userID' is missing in type but it is required 
//     method: MethodsEnum.GET,
//     url: '/user/get/',
//     apiDomen: 'http://google.com'
// }

class APiRequest implements IUserAPiRequest<number, string> {
    method: MethodsEnum;
    url: string;
    formData?: boolean;
    readonly apiDomen: string;
    userID: number;
    userName: string;

    getApiDomen(): string {
        return this.apiDomen
    }

    getUserID(): number {
        return this.userID
    }
}

