// console.log("Hello world");

//! Масиви;
// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів.
// Масиви можуть містити елементи різних типів даних, таких як числа, рядки, булеві значення тощо.
// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// Хоча в масивах зазвичай зберігаються однотипні дані, це не сувора вимога.Масиви також можуть містити елементи
// різних типів даних.
// const mixed = ['apple', 10, true]; // масив з елементами різних типів

//! Доступ до елементів
// Масив — це впорядкована колекція елементів, де кожен елемент має свій порядковий номер, який називається індексом.
// Індексація елементів масиву починається з нуля, тобто перший елемент має індекс 0, другий елемент — індекс 1 і так далі.
// Щоб отримати доступ до значення елемента масиву, ми використовуємо синтаксис квадратних дужок:
// arrayName[index];

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// const planets = ["Earth", "Mars", "Venus"];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// Спроба доступу до неіснуючого індексу поверне значення undefined.

//! Перевизначення значення елемента
// Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення.
// Цей процес називається "перевизначенням" значення елемента.

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// planets[0] = "Jupiter";
// planets[2] = "Neptune";
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

//! Довжина масиву
// Довжина масиву, тобто кількість його елементів, зберігається у властивості length.
// Це динамічна величина, яка автоматично змінюється під час додавання або видалення елементів.

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.length); // 3

// const planets = ["Earth", "Mars", "Venus"];

// if (planets.length >= 3) {
//   console.log("3 or more elements");
// } else {
//   console.log("3 or less elements");
// }

// function getOrderQuantity(order) {
//   if (order.length >= []) {
//     return order.length;
//   }
// }
// console.log(getOrderQuantity(["apple", "banana"]));

//! Індекс останнього елемента
// Щоб знайти значення останнього елемента масиву, нам потрібно знати його індекс.
// Індекс останнього елемента можна визначити за допомогою формули довжина_масиву - 1.
// Оскільки індексація елементів масиву починається з 0, а довжина масиву зберігає загальну кількість елементів,
// віднімаючи 1 від довжини масиву, ми отримуємо індекс останнього елемента.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

//! Присвоєння за посиланням і за значенням
// Фундаментальною відмінністю складних типів від примітивів є те, як вони зберігаються і копіюються.
// Примітиви: рядки, числа, буль, null і undefined, під час присвоювання копіюються цілком, за значенням (by value).
// Зі складними типами все не так.У змінній, якій, наприклад, присвоєно масив, зберігаються не самі значення елементів
// масиву, а адреса того місця в пам'яті, де цей масив розташовано. Іншими словами — посилання (покажчик) на нього.
// Отже, вони передаються за посиланням (by reference).
// Усі примітивні типи присвоюються за значенням, тобто створюється копія.
// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія

// Масиви(складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання
// (покажчик у пам'яті) на вже існуючий масив.

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.
// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// Те, що зберігається в b, також змінилося, тому що b, як і a, просто містить посилання на одне й те саме місце в пам'яті — масив.
//Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// console.log([] === []); // false
// У прикладах масиви містять однакові значення, але оператор === поверне false, тому що він перевіряє рівність посилань на
// масиви, а не самих елементів усередині масивів.Це можна порівняти з тим, що змінні arr1 та arr2 посилаються на різні
// кімнати, в яких різні папірці, але з однаковим вмістом

//! Приведення типів: масиви
// Масив → Рядок
// При перетворенні масиву в рядок усі елементи масиву об'єднуються в один рядок, розділений комами.
// const array = [1, true, "Poly"];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// Масив → Число
// При перетворенні масиву в число алгоритм складається з двох кроків:
// спочатку масив приводиться до рядка,
// а потім цей рядок приводиться до числового значення.
// Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.
// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// Масив → Логічне значення (буль)
// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if (emptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// if (nonEmptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result);

//! Методи масиву
//! Метод join()
// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// Результат роботи методу можна зберегти у змінну для подальшого використання.

// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }

// transformString("user_age"); // "user-age"
// transformString("price_per_droid"); // "price-per-droid"

//! Метод split()
// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter).
// Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.
// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

//! Метод slice()
// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється від індексу begin до, але не включаючи індекс end.

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// Результат роботи методу slice() можна зберегти у змінну для подальшого використання:
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]

// Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів
// (тобто стільки елементів з кінця, скільки вказано в параметрі begin):
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]
// Метод slice() корисний, коли необхідно отримати підмасив із вихідного масиву або створити його копію для
// подальшої роботи з ним.

//! Метод concat()
// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
// Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat().
// Метод concat() створює і повертає новий масив, що містить усі елементи об'єднаних масивів.

// Порядок аргументів методу визначає порядок розташування елементів у новому масиві.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

//! Метод indexOf()
// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві.
// Він повертає індекс елемента, якщо він знайдений, або - 1, якщо елемент не знайдений.Метод indexOf() виконує сувору
// рівність(===) при порівнянні елементів.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

//! Метод push()
// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.
// array.push(element1, element2, ..., elementN);
// де:
// array — це вихідний масив, до якого потрібно додати елементи;
// element1, element2, ..., elementN — елементи, які необхідно додати в кінець масиву.
// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// const tags = [];

// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

//! Метод pop()
// Видаляє по одному елементу з кінця масиву, йому нічого сказати не можна просто кажу array.pop(),
// стільки разів скільки елементів потрібно видалити з масиву.

//! Метод unShift()
// Працює так само тільки додає в початок масиву

//! Метод Shift()
// Видаляє з початку масива

// shift() та pop() повертають видалений елемент;

//! Ітерація по масиву
// Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//! Метод includes()
// Метод масиву includes() використовується для перевірки наявності певного елемента в масиві.Він повертає логічне значення
// true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.
// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// Метод includes() можна поєднувати з розгалуженнями для перевірки умов.
// Наприклад, виконати різний код залежно від наявності значення в масиві.
// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }

//! Цикл for...of
// Цикл for...of — це зручний спосіб перебору масиву.Тіло циклу буде виконуватися на кожному елементі масиву.
// Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
// for (const element of array) {
//   // тіло циклу
// }
// Де:
// element — це змінна, в яку на кожній ітерації буде записуватися поточний елемент масиву.
// array — це вихідний масив, який ми хочемо перебрати.

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна.
// Якщо необхідно закінчити виконання циклу передчасно, використовується вже знайомий оператор break.

//! Функції (частина 2)
//! Псевдомасив arguments
// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments.
// Коли ти викликаєш функцію з аргументами, arguments автоматично створюється всередині цієї функції і
// заповнюється переданими значеннями аргументів.
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// Ця колекція схожа на масив, але насправді є псевдомасивом, тобто:
// у неї є деякі властивості масивів, наприклад length;
// у неї є можливість звернутися до елемента за індексом;
// у неї немає методів для роботи з масивом;
// її можна перебирати за допомогою циклів.

// Розгляньмо приклад використання arguments у функції, яка повертає результат множення будь-якої кількості аргументів.
// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// Якщо під час роботи з arguments потрібно використовувати методи масиву, тоді псевдомасив необхідно перетворити на масив,
// використовуючи метод Array.from(), який створить масив із псевдомасиву.
// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join("-");
// }
// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

//! Параметри за замовчуванням
// Функції можуть мати параметри зі значеннями за замовчуванням, тобто необов'язкові параметри.
// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

//! Функціональний вираз
// Функціональний вираз (function expression) — звичайне оголошення змінної, значенням якої буде функція.
// Це альтернативний спосіб оголошення функції.
// Синтаксис оголошення функції, який ти вже знаєш (function declaration):

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// Синтаксис функціонального виразу (function expression):

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };
// Різниця в тому, що функціональний вираз(function expression) не можна викликати до місця його створення,
// тільки після, тому що це буквально оголошення const змінної.

// // ❌ Помилка! Не працює виклик до оголошення
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// A оголошення функції (function declaration) можна викликати до місця її створення в коді.

// // ✅ Працює виклик перед оголошенням
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// Не важливо, який синтаксис використовувати, головне, щоб код у проєкті був однорідним.Тобто необхідно намагатися
// не змішувати оголошення функції(function declaration) з функціональними виразами(function expression), щоб писати
// більш стандартизований зрозумілий код.

//! Область видимості
// Область видимості (scope) — механізм, який визначає доступність змінних у коді, що виконується.
// Ланцюжок областей видимості(scope chain) — області видимості утворюють ієрархію, так що дочірні області
// мають доступ до змінних із батьківських областей, але не навпаки.
// Змінна видима для виконуваного коду, якщо вона є:
// в поточній області видимості
// або
// в ланцюжку областей видимості.
// Змінні, оголошені на найвищому рівні, тобто поза будь - якими конструкціями наприклад: if, for і функцій — перебувають
// у глобальній області видимості і доступні скрізь після їхнього оголошення.
// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// Змінні, оголошені всередині інструкційif, for, функцій та інших блоків коду, що огорнуті фігурними дужками { },
// перебувають у блоковій області видимості та доступні тільки всередині цього блоку коду або вкладених у нього.
// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// // ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

//! Стек викликів
// Під час виклику функції всередині її тіла можуть викликатися інші функції, а в них інші тощо.
//! JavaScript — однопотокова мова, тобто в одну одиницю часу може виконуватися тільки одна інструкція.
// Це означає, що вже викликані функції, які не закінчили своє виконання, повинні чекати виконання функцій, викликаних
// усередині себе, для того щоб продовжити свою роботу.
// function fnA() {
//   console.log("Log inside fnA function before calling fnB");
//   fnB();
//   console.log("Log inside fnA function after fnB call");
// }

// function fnB() {
//   console.log("Log inside fnB function");
// }

// console.log("Log before calling fnA");
// fnA();
// console.log("Log after calling fnA");

// // "Log before calling fnA"
// // "Log inside fnA function before calling fnB"
// // "Log inside fnB function"
// // "Log inside fnA function after fnB call"
// // "Log after calling fnA"

//! Стек — структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов — першим вийшов.
// Останнє, що додається на стек, буде видалено з нього першим, значить, можна додати або видалити елементи тільки з верхівки
// стека.Уяви стек як масив, у якого можна додати або видалити тільки елемент у кінці колекції.

// Стек викликів(call stack) — це структура даних, яка допомагає інтерпретатору відстежувати послідовність і стан викликів
// функцій у програмі.Він показує, яка функція зараз виконується і яка буде викликана наступною.

// Stack frame(кадр стека, запис стека) — структура, яка додається на стек при виклику функції.Зберігає службову інформацію,
// наприклад ім'я функції та номер рядка, у якому стався виклик.

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// Стек викликів не безмежний, йому відводиться кінцевий обсяг пам'яті.
// Іноді в консолі можна побачити помилку "Uncaught RangeError: Maximum call stack size exceeded" — переповнення
// стека(stack overflow).

// Це може статися при зациклюванні викликів функцій, тобто якщо йдуть нескінченні виклики функцій і результат не
// повертається, то стек збільшується.Наприклад, якщо функція викликає сама себе, що називається рекурсією.По досягненню
// межі кількості записів стека і виникне така помилка, і скрипт "падає".
