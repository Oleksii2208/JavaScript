// console.log("Hello world");

// Розгалуження
//! Інструкція if
// Інструкція if дозволяє виконати певний блок коду тільки в тому випадку, якщо задана умова
// істинна(тобто приймає значення true).
// Якщо умова(condition) перетворюється до false, блок коду не виконається і продовжиться виконання
// програми, що іде після інструкції if.
// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

// function getPrice(subscription) {
//   let price = 0;

//   if (subscription === "pro") {
//     price = 100;
//   }

//   return price;
// }

// console.log(getPrice("free")); // 0
// console.log(getPrice("pro")); // 100

//! Інструкція if...else
// if (condition) {
//   // код, який виконується, якщо умова істинна
// } else {
//   // код, який виконується, якщо умова хибна
// }
// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }

// Створимо функцію яка отримує бал студента, та повертає рішення про результат.
// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }

// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

//! Блок else...if
// Конструкція else...if розширює конструкцію if...else і дозволяє перевірити та зреагувати на виконання
// або невиконання кількох умов.Це корисно, коли ми маємо більше однієї умови.
// if (condition_1) {
//   // код, який виконується, якщо умова (condition_1) істинна
// } else if (condition_2) {
//   // код, який виконується, якщо умова (condition_2) істинна
// } else if (condition_3) {
//   // код, який виконується, якщо умова (condition_3) істинна
// } else {
//   // код, який виконується, якщо всі умови хибні
// }
// Кожна умова послідовно перевіряється зверху вниз.
// Перевірка зупиняється, щойно програма знаходить першу умову, яка задовільняється.

// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// function totalGrade(grade) {
//   if (grade >= 90) {
//     return "Perfectly";
//   } else if (grade >= 80) {
//     return "Good";
//   } else if (grade >= 70) {
//     return "Satisfactorily";
//   } else {
//     return "Unsatisfactorily";
//   }
// }

// console.log(totalGrade(75));
// console.log(totalGrade(85));
// console.log(totalGrade(90));
// console.log(totalGrade(55));

//! Тернарний оператор
// Тернарний оператор — це коротша синтаксична заміна інструкції if...else.
// Тернарний оператор дозволяє виконувати певну частину коду залежно від умови.

//! <condition> ? <expression if condition is true> : <expression if condition is false>

// Він працює таким чином:
// обчислюється умова condition;
// якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
// якщо умова хибна (перетворюється до false), обчислюється вираз після :;
// значення обчисленого виразу повертається як результат роботи тернарного оператора.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // 'adult'

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); // 10

// function getBiggerNumber(a, b) {
//   return a > b ? a : b;
// }

// console.log(getBiggerNumber(5, 10)); // 10
// console.log(getBiggerNumber(20, 15)); // 20
// console.log(getBiggerNumber(7, 7)); // 7

//! Оператор switch
// Оператор switch дозволяє виконувати різні дії залежно від значення виразу.
// Використання switch є більш компактним і зручним способом для порівняння виразів з кількома варіантами,
// ніж інструкції if...else та else...if.
// Ось загальний синтаксис оператора switch:
// switch (expression) {
//   case value1:
//     // код, що виконується, якщо вираз (expression) дорівнює value1
//     break;
//   case value2:
//     // код, що виконується, якщо вираз (expression) дорівнює value2
//     break;
//   // ...
//   default:
//   // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
// }

// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }

//! Оператор break
// Після виконання коду в одному з випадків потрібно використовувати оператор break, щоб вийти з оператора switch.
// Якщо break не вказано, виконання коду продовжиться в наступному case і далі.
// Така поведінка називається "провалюванням"(fall - through).

// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }

//! Пам’ятка під час використання розгалужень
// Інструкція if є універсальною.Інструкції if…else і else…if використовуються, коли потрібно прописати
// декілька умов.Отже, ці інструкції зазвичай довші, ніж інші способи розгалужень.
// Тернарний оператор краще використовувати для присвоєння або повернення значення з тіла функції.
// В умові тернарного оператора може бути все що завгодно: перевірка рівності / нерівності, на більше / менше,
// просто перевірка на будь чого.
// Оператор switch перевіряє тільки на сувору рівність.
// Використовуючи оператор switch, завжди:
// — пам’ятай про оператор break;
// — використовуй тільки 1 default, він завжди має бути останнім.

//! Блокова область видимості

// Область видимості визначає, чи будуть змінні та функції доступними в певних областях коду.
// Під час оголошення змінної або функції, вона стає "видимою" тільки в певній частині коду.
// Це впливає на те, де і як можна використовувати ці змінні та функції в коді.

// Змінні або функції, які оголошені поза будь - якими блоками коду — тобто в глобальній області
// видимості — будуть доступні в будь - якій частині коду.Вони є глобальними змінними.

// // Глобальна змінна
// const value = "I'm a global variable";

// if (true) {
// 	// Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// // Можна звернутися до глобальної змінної
// console.log(value); // "I'm a global variable"

// Будь - яка конструкція, що використовує фігурні дужки { } (умови, функції, цикли тощо) створює нову локальну
// блочну область видимості.Змінні, оголошені в цій області видимості, можуть бути використані тільки всередині
// цього блоку коду.Це локальні змінні.

// if (true) {
//   // Локальна змінна
// 	const value = "I'm a local variable";
//   console.log(value); // "I'm a local variable"
// }

// // Помилка: локальну змінну не видно за межами блоку
// console.log(value); // ReferenceError: value is not defined

// const globalVar = "Global";

// console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if (true) {
//   const aVar = "A";
//   console.log(globalVar); // Доступ до globalVariable з блоку A
//   console.log(aVar); // Доступ до aVar з блоку A
//   // Немає доступу до bVar і cVar

//   if (true) {
//     const bVar = "B";
//     console.log(globalVar); // Доступ до globalVariable з блоку B
//     console.log(aVar); // Доступ до aVar з блоку B
//     console.log(bVar); // Доступ до bVar з блоку B
//     // Немає доступу до cVar
//   }
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if (true) {
//   const cVar = "C";
//   console.log(globalVariable); // Доступ до globalVar з блоку C
//   console.log(cVar); // Доступ до cVar з блоку C
//   // Немає доступу до aVar і bVar
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

//! Логічні оператори
// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. undefined
// 6. false

//! Логічне «І»
// Логічні оператори використовуються для перевірки умов з кількома виразами, наприклад, в інструкції if.
// Оператор "І"(&&) наводить усі операнди до логічного типу(true або false) і повертає значення одного з них.
// Дозволяє перевірити, чи виконані всі умови у виразі.
// Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього
// істинного(тільки правого) операнда, або першого хибного(лівого чи правого), на якому він запнувся.

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"

// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"

// console.log(3 && true); // true
// console.log(true && 3); // 3

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""

// На практиці логічні операції застосовуються для перевірки множинних умов.

// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

// Оператор && може бути не тільки самостійною умовою, а й частиною більш складних умов, наприклад, в умові інструкції if

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log("Mobile screen");
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("Tablet screen");
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Desktop screen");
// } else {
//   console.log("Godzilla screen");
// }

// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// console.log(getScreenType(700)); // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320)); // "Mobile screen"

//! Логічне «АБО»
// Оператор "АБО" (||) перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них.
// Дозволяє перевіряти, чи є хоча б один із операндів "істинним”.
// Обчислення оператора відбувається зліва направо.
// Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.
// console.log(true || false); // true
// console.log(false || true); // true

// console.log(5 || false); // 5
// console.log(false || 5); // 5

// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"

// Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.
// console.log(0 || false); // false
// console.log(false || 0); // 0

// console.log(null || ""); // ""
// console.log("" || null); // null

// Оператор "АБО" замикається на вірному операнді і повертає значення операнда, на якому запнувся, або значення крайнього
// правого операнда.Якщо лівий операнд був перетворений на true, правий операнд не обчислюється.

// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40

//! Логічне «НІ»
// Усі оператори, які ми розглядали раніше, були бінарними. Бінарні оператори містять два операнди: лівий і правий.
// Логічне «НІ» (!) — це унарний оператор — він виконує операцію над одним операндом праворуч.
// Логічне «НІ» приводить операнд до логічного значення(true або false) і потім заперечує(інвертує) його, тобто заміняє на
// протилежне: true —> false, а false —> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

// На практиці логічне заперечення використовується для перевірки від зворотного.Наприклад, можна дозволити написати
// повідомлення в чаті, лише якщо користувач не заблокований.
// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;

//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }

// console.log(canUserChat(true, false)); // "Can type in chat!"
// console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true)); // "Blocked from typing in chat!"

//! Методи рядків
// Виклик методу дуже схожий на доступ до властивості, але наприкінці додаються круглі дужки, як при виклику функції:
// objectName.method();

//! Метод slice()
// Метод slice() використовується для створення копії частини або всього рядка без зміни оригінального рядка.
// Він дозволяє витягувати підрядок з вихідного рядка, вказуючи початковий та кінцевий індекси.

// str.slice(startIndex, endIndex);
// де:
// str — вихідний рядок, з якого робитиметься копія.
// startIndex — індекс, з якого починається копіювання елементів рядка.
// endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка.
// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
// // Параметр endIndex є необов'язковим.
// // Якщо endIndex не вказаний, витягуються всі елементи до кінця рядка.
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'
// // Якщо викликати метод slice() без аргументів, він створює точну копію рядка і повертає її.
// console.log(fullName.slice()); // 'Jacob Mercer'
// // Результат виклику методу slice() можна зберігати в змінній для подальшого використання.
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"

//! Методи toLowerCase() і toUpperCase()
// Методи рядків toLowerCase() та toUpperCase() використовуються для зміни регістру символів у рядку.
// Обидва методи не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі.
// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"

// const brandName = "samsung";
// const userInput = "saMsUng";
// const lowercaseInput = userInput.toLowerCase();

// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true

//! Метод includes()
// Метод рядків includes() використовується для перевірки наявності підрядка у рядку.Він повертає логічне значення true,
// якщо підрядок знайдено, і false, якщо підрядок відсутній.
// str.includes(substring);
// де:
// str — вихідний рядок, у якому ми шукаємо підрядок;
// substring — підрядок, який ми хочемо знайти у вихідному рядку.

// const username = "Jacob Mercer";

// console.log(username.includes("Jacob")); // true
// console.log(username.includes("John")); // false
// console.log(username.includes("Mercer")); // true
// console.log(username.includes("Doe")); // false
// --------------------------------------------------
// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

//! Методи startsWith() і endsWith()
// Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно.Вони повертають булеве
// значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню.

// const str = "Hello, world!";

// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false (метод чутливий до регістру)
// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

//! Метод indexOf()
// Метод indexOf() використовується для пошуку першого входження підрядка в рядок. Він повертає:
// індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або
// -1, якщо підрядок не виявлено
// str.indexOf(substr);
// str — вихідний рядок, у якому потрібно виконати пошук;
// substr — рядок, який потрібно знайти у вихідному рядку.

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("hello");
// console.log(index); // -1

//! Метод trim()
// Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.
// Це дозволяє "очистити" рядок від зайвих пробілів, наприклад під час обробки введення тексту користувачем в елементи форми,
// видаливши зайві пробіли, які могли бути додані випадково.
// str.trim();

// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "

//! Цикли
// Цикл — керуюча конструкція, призначена для організації багаторазового виконання набору інструкцій.
// Тіло циклу — послідовність інструкцій, призначена для багаторазового виконання.
// Ітерація — одиничне виконання тіла циклу.
// Умова виходу — вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл завершиться.
//! Цикл while
// Конструкція while створює цикл, який виконує блок коду в тілі циклу, поки умова для виходу оцінюється як true.
// while (condition) {
//   statement; // код, тіло циклу
// }

// Умова обчислюється перед кожною ітерацією циклу.
// Якщо умова оцінюється як true, виконується код у тілі циклу (одна ітерація)
// Якщо умова оцінюється як false, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу
// Цикл while — це цикл з передумовою, тобто він виконується доки істинна певна умова, зазначена перед його початком.
// Цю умову перевіряють до виконання тіла циклу, тому тіло може бути не виконано жодного разу, якщо умова від самого
// початку хибна.
// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
// Цикл while часто використовується, коли точна кількість ітерацій заздалегідь не відома.

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter; // створюємо локальну змінну

//   while (counter < maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }

// countClients(18, 25);

//! Цикл do…while
// Цикли while і do...while працюють схожим чином, але мають одну ключову відмінність.Під час використання циклу do...while код
// у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.
// do {
//   statement; // код, який буде виконуватися
// } while (condition);
// Блок коду всередині do виконується в перший раз незалежно від виконання умови.
// Потім, після кожної ітерації, перевіряється умова.Якщо умова оцінюється як true, цикл продовжує виконуватися; якщо — як false,
// цикл завершується.

// let count = 0;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);
// Цикл do...while корисний, коли потрібно, щоб код у блоці виконався хоча б один раз, незалежно від умови.

//! Цикл for
// Цикл for також дозволяє виконувати код, що повторюється, багато разів.На відміну від циклів while і do…while, цикл for має
// змінну - лічильник.Змінна - лічильник оголошується за допомогою ключового слова let(оголошення через const видасть помилку).
// Синтаксис циклу for:
// for (Ініціалізація; Умова; Пост-вираз) {
//   // Тіло циклу
// }
// Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією(повторенням) циклу.Якщо умова перетворюється на ** true **, то
// виконується тіло циклу.Якщо умова перетворюється на false, то цикл завершується.
// Пост - вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови.Використовується для оновлення
// значення змінної - лічильника.
// Тіло циклу — це блок коду, який буде виконуватися на кожній ітерації циклу, якщо умова перетворюється на true.

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// Напишемо фукнцію яка підсумовує всі числа від 0 до заданого числа і повертає результат:
// function sumUpTo(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0

//! Інкремент і декремент
// Інкремент(++) і декремент(--) — це операції, які відповідно збільшують або зменшують значення числової змінної на одиницю і
// одразу ж зберігають оновлене значення у цій змінній.Існують два види інкременту та декременту: префіксний і постфіксний.
// Префіксний інкремент (++value) спочатку збільшує значення змінної, а потім використовує нове значення у виразі.
// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6

// Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення значення.
// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

// Префіксний декремент (--value) спочатку зменшує значення змінної, а потім використовує нове значення у виразі.
// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4

// Постфіксний декремент (value--) спочатку використовує поточне значення змінної у виразі, а потім виконує зменшення значення.
// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

// Ці операції корисні, коли тобі потрібно змінювати значення змінних одразу на одиницю, що може бути важливо, наприклад, при
// створенні лічильників у циклах, замість комбінованих операторів += і -=.

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

//! Оператор break
// Оператор break використовується в циклі для переривання його виконання.Коли оператор break зустрічається всередині циклу,
// виконання циклу негайно припиняється, і керування передається до наступної інструкції після циклу.

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");

//! Оператор break і функції
// Коли оператор break зустрічається всередині циклу, виконання циклу негайно припиняється, і керування передається на наступну
// інструкцію за циклом, навіть якщо цикл знаходиться всередині функції.Тобто оператор break не припиняє виконання функції,
// а тільки перериває цикл.

// function findNumber(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 6);
// console.log("Log after exiting function");

// Для того щоб переривати виконання одразу циклу і функції і повернути результат у зовнішній код, є оператор return.

// function findNumber(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(
//         `Found the number $ {target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);
