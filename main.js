// console.log("Hello world");

// let age = 20;
// let name = "Denis";
// let isStudent = true;

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("Is student: ", isStudent);

// let value = 10;
// console.log(value);
// value = "Теперь это строка";
// console.log(value);
// value = true;
// console.log(value);

// // String (Строка)
// let userName = "Алексей";
// // шаблонная строка
// console.log(`Привет, ${userName}!`);

// // Number (Число)

// // дробное число
// let price = 99.99;
// // отрицательное число
// let temperature = -15;
// // Infinity
// let infinity = 1 / 0;
// // NaN (Not a Number)
// let notANumber = 0 / 0;
// // 0.3000000000000004 (особенность JS)
// console.log(0.1 + 0.2);

// // BigInt (Большие целые числа)
// let bigNumber = 9007199254740991n; // добавляем "n" в конце
// let huge = BigInt("123456789012345678901234567890");

// // Boolean (Логический тип)
// let isAlive = true;
// let isWorking = false;
// let isAdult = age >= 18; // результат сравнения

// // Undefined (Не определено)
// let x; // переменная объявлена, но не присвоено значение
// let y = undefined; // явное присваивание

// // Null (Пустое значение)
// let userData = null;

// // Symbol (Символ)
// let id = Symbol("id"); // создает уникальный идентификатор

// // Object (Объект)
// let person = {
//   name: "Станислав",
//   age: 30,
//   isStudent: false,
//   sayHello: function () {
//     console.log("Привет!");
//   },
// };

// console.log(person.name);

// // Array (Массив)
// let fruits = ["яблоко", "банан", "апельсин"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = ["тест", 42, true, null];

// // Function (Функция)
// function sum(a, b) {
//   return a + b;
// }

// let multiply = function (x, y) {
//   return x * y;
// };

// console.log(sum(5, 3));

// // Date (Дата)
// let now = new Date();
// let birthday = new Date("1995-12-17");

// // 6.6. Арифметические операции
// let a = 10;
// let b = 3;

// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.3333...

// // Особенность JavaScript:
// console.log(10 + "5"); // "105" (конкатенация строки и числа)
// console.log("10" - 5); // 5 (строка преобразуется в число)

// const numbersArray = [1, 2, 3];
// // Можно изменять элементы:
// numbersArray[0] = 10;
// console.log(numbersArray); // [10, 2, 3]
// // Нельзя переназначить:
// numbersArray = [5, 6, 7]; // Ошибка!

// // Объекты:
// const person = { name: "Denis", age: 18 };
// // Можно изменять свойства:
// person.age = 50;
// person.city = "Volgograd";
// console.log(person); // { name: "Denis", age: 50, city: "Volgograd" }
// // Нельзя переназначить:
// person = { name: "Stas" }; // Ошибка!

// console.log(typeof "текст"); // "string"
// console.log(typeof 42); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" !!!
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"


// let numberX = null;
// console.log(numberX === null); // true

// let newPrice = 100;
// console.log(newPrice, typeof newPrice);
// newPrice = "1"
// console.log(newPrice, typeof newPrice);

// 8.2. Пример Кода
// Явное преобразование типов:

// // В строку
// let num = 42;
// let str = String(num); // "42"
// let str2 = num.toString(); // "42"
// let str3 = "" + num; // "42"

// // В число
// let strNum = "123";
// let int = Number(strNum); // 123
// let int2 = parseInt("42.5"); // 42
// let float = parseFloat("3.14"); // 3.14
// let int3 = +"99"; // 99 (унарный плюс)

// // В булево значение
// let bool1 = Boolean(1); // true
// let bool2 = !1; // false (логическое НЕ)
// let bool3 = Boolean(0); // false
// let bool4 = Boolean(""); // false

// // Неявное преобразование (coercion):
// console.log("5" + 3); // "53" (конкатенация)
// console.log("5" - 3); // 2 (преобразование в число)
// console.log("5" * "2"); // 10
// console.log(true + 1); // 2 (true преобразуется в 1)
// console.log(false + 1); // 1 (false преобразуется в 0)
// console.log(null + 1); // 1 (null преобразуется в 0)
// console.log(undefined + 1); // NaN

// // Сравнение с преобразованием типов (нестрогое равенство ==)
// console.log(5 == "5"); // true (нестрогое, с преобразованием)
// console.log(0 == false); // true
// console.log(null == undefined); // true
// console.log(null === undefined); // false (строгое равенство)

// // ⚠️ Объекты сравниваются по ссылке, а не по содержимому:

// let obj1 = { name: "John" };
// let obj2 = { name: "John" };

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// // Почему? Это разные объекты в памяти!

// let obj3 = obj1; // obj3 ссылается на тот же объект
// console.log(obj1 === obj3); // true

// // То же с массивами:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2); // false (разные массивы)