// Task-1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(number => number ** 2);
console.log(newNumbers);

const newNumbers2 = (arr, pow) => numbers.map(number => Math.pow(number, pow));

console.log(newNumbers2(numbers, 2));

// Task-2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const newData = arr => arr.flatMap(object => object.values);

console.log(newData(data));

// Task-3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const checkAge = (arr, age) => arr.some(person => person.age < age);
console.log(checkAge(people, 20));

// Task-4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers2 = [2, 4, 6, 8, 10];

const checkNumbers = arr => arr.every(number => number % 2 === 0);
console.log(checkNumbers(numbers2));

// Task-5
// Знайдіть перше непарне число

const numbers3 = [2, 1, 6, 8, 9, 10, 12];

const firstOddNum = arr => arr.find(number => number % 2 !== 0);

console.log(firstOddNum(numbers3));

// Task-6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const sortedNumbers = arr => arr.toSorted((num1, num2) => num1 - num2);

console.log(sortedNumbers(numbersArray));

// Task-7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortedArray = arr => arr.toSorted();

console.log(sortedArray(stringArray));

// Task-8

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// Task-9

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const filterUsers = (arr, age) => arr.filter(user => user.age > age);

console.log(filterUsers(users, 20));

// Task-10

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers4 = [1, 2, 3, 4, 5];

const countNumber = arr => arr.reduce((acc, number) => (acc += number), 0);
console.log(countNumber(numbers4));

// Task-10-Add

//Підрахунок кількості повторень
//Дано масив:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// //Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// //Очікуваний результат:
// //{
//  // apple: 3,
//  // banana: 2,
//  // orange: 1
// //}

const countEveryFruitsAmount = arr =>
  arr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    console.log(acc[fruit]);
    console.log(acc);
    return acc;
  }, {});

console.log(countEveryFruitsAmount(fruits));

// Task-11

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining). //
// Вимоги до класу Calculator // - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій. // Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка // Приклад використання:

// class Calculator {
//   constructor() {}
//   number(value) {
//     this.result = value;
//     return this;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Task-12

// Напиши клас Client, який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#login;
  }

  set email(newEmail) {
    this.#login = newEmail;
  }
}

const client = new Client();
client.login = 'Admin';
client.email = 'pokrovka@gmail.com';
console.log(client.login);
console.log(client.email);

// Task- 13

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
