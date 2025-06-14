// console.log("Hello World");

// const b = 10;
// const a = b * 2;
// console.log(a);

//перевизначення значення
// let username = "Mango";
// username = "Poly";
// console.log(username);
//Якщо змінна оголошена як const, перевизначити її значення неможливо.

// console.log(Number("123.15"));
// console.log(String(12345));

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

//два спеціальні значення: null і undefined
// let value = null;
// console.log(value); // null
// let value2;
// console.log(value2); // undefined

//Оператор typeof
// const quantity = 17;
// console.log(typeof quantity); // виведе "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // виведе "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // виведе "boolean"

// let username;
// console.log(typeof username); // виведе "undefined"

// let status = null;
// console.log(typeof status); // виведе "object"

// //Оператор (+) використовується для складання двох чисел.
// const x1 = 8;
// const y1 = 5;
// console.log(x1 + y1); // 13

// //Оператор (-) використовується для віднімання одного числа від іншого.
// const x2 = 8;
// const y2 = 5;
// console.log(x2 - y2); // 3

// //Оператор (*) використовується для множення двох чисел.
// const x3 = 8;
// const y3 = 5;
// console.log(x3 * y3); // 40

// //Оператор (/) використовується для ділення одного числа на інше.
// const x4 = 8;
// const y4 = 5;
// console.log(x4 / y4); // 1.6

// //Оператор (%) повертає остачу від ділення одного числа на інше.
// const x5 = 8;
// const y5 = 5;
// console.log(x5 % y5); // 3

// //Оператор (**) використовується для піднесення числа до степеня.
// const x6 = 8;
// const y6 = 5;
// console.log(x6 ** y6); // 32768

//Комбіновані оператори
// let age = 25;
// age += 1;
// console.log(age); // 26

// Рядки
// Конкатенація рядків
// const message = "Mango " + "is" + " happy";
// console.log(message); // "Mango is happy"

// const age = 24;
// const message2 = "Poly is " + age + " years old!";
// console.log(message2);

// // Шаблонні рядки
// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);

// const productName = "Repair droid";
// // Якщо у змінній зберігається рядок
// console.log(productName.length); // 12

// // Якщо рядковий літерал
// console.log("Repair droid".length); // 12

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// // Індексація рядків
// const product = "Repair droid";
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'
// //Отримання останнього символу рядка
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'
// //без створення проміжної змінної ми можемо вставити вираз (product.length - 1)
// console.log(product[product.length - 1]); // 'd'

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopicLength, firstElement, lastElement);

// Незмінність рядків
// let product = "Droid";
// console.log(product); // "Droid"
// // Це не має жодного ефекту
// product[2] = "O";
// console.log(product); // "Droid"

// Натомість ми повинні створити новий рядок і присвоїти його змінній замість старого рядка.
// Розгляньмо приклад, де змінено написання о —> О в рядку “Droid”.
// let product = "Droid";
// console.log(product); // "Droid"
// product = "DrOid";
// console.log(product); // "DrOid"

// Оператори порівняння
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

// Оператори рівності
// Оператори несуворої рівності,нерівність:(==,!=)
// console.log(5 == 5); // true
// console.log(5 == 3); // false
// console.log(5 != 3); // true
// console.log(5 != 5); // false

// Оператори суворої рівності,нерівність:(===,!==)
// Добре, приведення типів не виконується
// console.log(5 === 5); // true
// console.log(5 === "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// Перетворення типів: числа
// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0

// Перетворення рядків у числа
// Метод Number.parseInt()
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN
// console.log(Number.parseInt("")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat()
// Метод Number.parseFloat() аналогічний Number.parseInt() з однієї відмінністю:
// перетворює рядок на число з плаваючою крапкою.
// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN

// Арифметичні функції
// Клас Math є вбудованим класом JavaScript.
// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1

// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2

// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2

// console.log(Math.max(20, 10, 50, 40)); // 50

// console.log(Math.min(20, 10, 50, 40)); // 10

// console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

// console.log(Math.PI);

// Це лише деякі методи класу Math.

// метод числа toFixed() для округлення результату до певної кількості знаків після крапки.
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2)); //  ”5.00”
// console.log((8.762195).toFixed(4)); //  “8.7622”

//! Основи функцій
// Оголошення функції
// Оголошення функції має таку структуру:
// Ключове слово function
// Ім'я функції — це дієслово, що відповідає на питання "Що зробити?"
// Пара круглих дужок ()
// Тіло функції у фігурних дужках {}

// // Оголошення функції multiply
// function doStuff() {
//   // Тіло функції
//   console.log("Log inside multiply function");
// }

// // Виклики функції multiply
// doStuff(); // 'Log inside multiply function'
// doStuff(); // 'Log inside multiply function'
// doStuff(); // 'Log inside multiply function'

//! Параметри та аргументи

// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// // Передача аргументів
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"
// // Під час кожного виклику функції параметр може отримувати нове значення з аргументів.
// // Наприклад, параметр x спочатку отримав значення 2, потім 4, потім 17.

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//! Повернення значення
// Оператор return використовується для повернення значення з тіла функції назад у код,
// у місце її виклику.Коли інтерпретатор зустрічає оператор return, він негайно виходить
// із функції(припиняє її виконання) і повертає вказане після return значення в місце виклику функції.

// function multiply(x, y, z) {
//   const product = x * y * z;
//   // Повертаємо результат виразу множення
//   return product;
// }

// // Результат роботи функції можна зберегти у змінну
// const result = multiply(2, 3, 5);
// console.log(result); // 30

// Щоб уникнути оголошення зайвої змінної в тілі функції, можна відразу ж повертати результат виразу.
// Так, немає необхідності створювати окрему змінну для зберігання результату виразу.
// function multiply(x, y, z) {
//   return x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // 30

// Якщо в тілі функції відсутній оператор return або він не вказує на конкретне значення,
// функція поверне спеціальне значення undefined.
// function multiply(x, y, z) {
//   const product = x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // undefined

// При використанні оператора return всі інструкції, які йдуть на рядках після нього, в тілі функції не
// виконуються, оскільки виконання функції припиняється відразу після зустрічі оператора return.
// function multiply(x, y, z) {
//   console.log("The code before return is executed as usual");

//   return x * y * z;

//   console.log("This code is never executed because it is after return");
// }

// console.log(multiply(2, 3, 5)); // 30

// function makeMessage(username) {
//   console.log(`Hello ${username}`);
// }

// makeMessage("Jacob");
// console.log(makeMessage("Jacob"));

//! Порядок виконання коду
// Коли інтерпретатор зустрічає виклик функції, він зупиняє виконання поточного коду
// й починає виконувати код з тіла функції.
// console.log("A");

// function logStuff() {
//   console.log("B");
// }

// console.log("C");

// logStuff();

// console.log("D");

//! Область видимості функції
// Область видимості визначає, де і які змінні та функції можуть бути доступні у твоєму коді.
// Коли ти оголошуєш змінну або функцію, вона стає "видимою" тільки в певній частині коду.
// Це впливає на те, де і як ти можеш використовувати їх у своєму коді.
// Змінні або функції, оголошені поза будь - якими блоками коду — тобто в глобальній області видимості,
// будуть доступні в будь - якій частині коду.Вони є глобальними змінними.

// Глобальна змінна
// const value = "I'm a global variable";

// function foo() {
//   // Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// foo();
// // Можна звернутися до глобальної змінної
// console.log(value);
// // "I'm a global variable"

// Будь - яка конструкція, що використовує фігурні дужки { } (умови, цикли, функції тощо) створює нову локальну
// область видимості.Змінні, оголошені в локальній області видимості, можуть бути використані тільки всередині
// цього блоку коду.

// function foo() {
//   // Локальна змінна
//   const value = "I'm a local variable";
//   // Можна звернутися до локальної змінної
//   console.log(value); // "I'm a local variable"
// }

// foo();
// console.log(value); // ReferenceError: value is not defined
// // Помилка: локальну змінну не видно за межами функції;
