// console.log("Hello world");

//! Об’єкти
// Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга, продукт
// магазину — чого завгодно.Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення
// (значення).
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

//! Вкладені властивості
// Значенням властивості може бути інший об'єкт.
// Це використовується для зберігання вкладених і згрупованих даних.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

//! Доступ до властивостей через крапку
// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.
// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.
// Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості,
// до якої хочемо отримати доступ.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

//! Доступ до вкладених властивостей
// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// Значення властивості — це масив.
// Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості
// length: user.hobbies.length;

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

//! Доступ до властивостей через квадратні дужки
// Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”].
// Схоже на звернення до елемента масиву з відмінністю.Відмінність полягає в тому, що в квадратних дужках зазначається
// не індекс елемента, а рядок з ключем(ім’ям властивості).

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

//! Зміна значення властивостей
// Після того як об'єкт створений, значення його властивостей можна змінити.
// Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

//! Додавання властивостей
// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення
// вже існуючої властивості.
// Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

//! Короткі властивості
// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям,
// як і сама властивість.
// Синтаксис коротких властивостей(shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної
// як ім'я властивості, а її значення як значення властивості.

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з
// аналогічним ім'ям.

//! Обчислювальні властивості
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо,
// тому що воно зберігається як значення змінної або як результат виконання функції.
// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.
// Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"

//! Перебір об'єкта
//! Цикл for...in
// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами
// for або for...of.

// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.
// for (key in object) {
//   // інструкції
// }
// Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

//! Метод Object.keys()
// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей.
// Якщо в об'єкті немає властивостей, метод поверне порожній масив.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись
// до використання циклу for...in.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

//! Метод Object.values()
// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі), то метод Object.values(object)
// повертає масив значень його властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

//! Масив об’єктів

// Для опису групи сутностей використовується масив об'єктів.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];
// У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі
// об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
// Для перебору такого масиву використовується стандартний цикл for...of.
// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (див. тему Об’єкти.
// Доступ до властивостей через крапку), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові,
// відрізнятимуться тільки значення.

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

//! Пошук об'єкта за значенням властивості
// Стандартне завдання під час роботи з масивом об'єктів — це пошук об'єкта за значенням властивості.Наприклад,
// потрібно знайти книгу за її автором.Для цього необхідно:
// перебрати масив у циклі;
// додати умову, виконання якої означатиме успішний результат пошуку.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// У прикладі вище цикл for перебирає об'єкти в масиві, доки не знайде той, у якого порівняння значення властивості author
// і authorToSearchFor поверне true.Щойно об’єкт з необхідним автором знайдено, виконається тіло if, де ми вже можемо
// працювати зі знайденим об'єктом.

//! Колекція значень властивості
// Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів.
// Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.
// Для цього необхідно:
// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.
// Наприклад, отримаємо список назв усіх книг у колекції books.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 6.8,
//   },
// ];

// const titles = [];

// for (const book of books) {
//   titles.push(book.title);
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// Дізнаємося середній рейтинг усієї нашої колекції.Для цього треба скласти всі рейтинги й розділити отримане значення
// на кількість книг.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 6.8,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

//! Методи об'єкта
// Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. Якщо значення властивості — це функція,
// така властивість називається методом об'єкта.

// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна
// (див.перший приклад у розділі).
// Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.
// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».

// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
// bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"

//! Доступ до властивостей об'єкта
// Методи використовуються для роботи з властивостями об'єкта та їх змінних.
// Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.
// Ключове слово this — це контекст виконання функції.

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// Значенням this буде посилання на об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку — це
// посилання на об'єкт bookShelf.
// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку»
// до властивостей.

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

//! Зміна за посиланням
// У властивості books об'єкта bookShelf зберігається масив.
// Отже, ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив.

// const bookShelf = {
//   books: ["The Last Kingdom"],
// };

// bookShelf.books.push("The Mist");
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

// У прикладі нижче в ключовому слові this зберігається посилання на об'єкт, що викликав відповідний метод.
// Під час звернення до this.books усередині методу, ми посилаємось на масив, що зберігається у властивості books.
// Це означає, що його можна змінювати за посиланням, наприклад, використавши метод масиву push() для додавання нового елемента.
//
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

//! Масив об’єктів
// Ти вже знаєш, що об'єкт дає змогу згрупувати характеристики сутності, наприклад, книги.
// Тому найчастіше будемо працювати з масивом об'єктів. Для цього зберігатимемо у властивості books не рядки, а об'єкти з
// назвою книги та рейтингом, а в майбутньому, можливо, й іншими характеристиками.

// Тепер метод getBooks повертатиме масив об'єктів. А метод addBook очікує в параметрі не рядок, а об'єкт книги і додає
// його в масив у властивості books.
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

// При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів.
// Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг книг.
// Оголосимо новий метод getAvarageRating в об'єкті.
// Оголосимо змінну totalRating для зберігання загального рейтингу.
// Переберемо масив книг за посиланням this.books у циклі for...of.
// На кожній ітерації додамо до загального рейтингу - рейтинг книги.
// Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг.
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

//! Зміна об'єкта в масиві

// Метод changeRating очікує на назву книги, якій необхідно змінити рейтинг, і нове значення рейтингу, яке потрібно
// підмінити в об'єкті. Процес зміни властивостей об’єкта в масиві починається з таких кроків:
// Перебір масиву об'єктів у циклі, наприклад for...of.
// Додавання перевірки збігу значення властивості об'єкта на поточній ітерації і заданого значення.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };

// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);
// При виконанні if ми можемо бути впевнені, що на даній ітерації в змінній book знаходиться посилання на необхідний нам
// об'єкт, оскільки об'єкти передаються за посиланнями.Тепер достатньо звернутися до властивості цього об'єкта і прирівняти
// йому нове значення.
// Після виклику методу changeRating властивість rating об'єкта з назвою, що збігається з bookName, буде оновлено на newRating.

//! Синтаксис spread і rest
// Ми вже знаємо, що викликати функцію можна з будь - якою кількістю аргументів незалежно від того, як її було визначено.
// Зайві аргументи не викличуть помилку.
// Ми вже вміємо розв'язувати такі завдання, використовуючи псевдомасив arguments, у який збираються всі передані аргументи.
// Починаючи зі стандарту ES6, з'явилася концепція залишкових параметрів (...rest). Це спеціальний синтаксис, який дозволяє
// зібрати групу незалежних елементів у масив.

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]

// Вільні параметри можуть бути позначені через три крапки .... Буквально це означає: "збери параметри, що залишилися,
// і поклади їх у масив". Ім'я параметра може бути довільним. Найчастіше його називають args або rest.

//! Збір частини аргументів
// Операція(...rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна.
// Для цього потрібно оголосити параметри до «збирання». Можна покласти перші кілька параметрів у змінні, а решту — зібрати
// в масив.

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// Операція rest збирає решту всіх аргументів, а тому повинна завжди бути останньою в підписі функції, інакше виникне
// помилка SyntaxError: Rest parameter must be last formal parameter.
// Це викличе помилку:
// function multiply(...args, first, second) {
// }

//! Входження параметрів
// Ти вже знаєш, як отримати масив зі списку аргументів.
// Інколи потрібно зробити протилежне — передати масив поелементно у функцію, яка викликається.

// const temps = [14, -4, 25, 8, 11];

// console.log(temps); // [14, -4, 25, 8, 11]

// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// Тут доцільно використати оператор розпилення ...spread.
// Він схожий на залишкові параметри — теж використовує ..., але робить абсолютно протилежне.
// Коли функціонал ...spread використовується при виклику функції, він перетворює масив на список аргументів.

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

//! Створення масиву
// Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
// Досі для цього використовувалися методи slice() і concat(), але операція розпилення дозволяє зробити те саме в коротшій
// формі.

// Розгляньмо приклад нижче, де створена копія масиву.

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// Уяви, що temps — це ящик яблук, і ми хочемо створити його точну копію.Беремо порожній ящик і пересипаємо в
// нього яблука з вихідного ящика temps — розподіляємо його в іншу колекцію.За такої умови ящик temps не зміниться,
// у ньому все ще будуть яблука, а в новому ящику — їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.
// Оригінальні ящики(масиви) не зміняться, а в новому будуть копії усіх їх яблук(елементів).
// Порядок розподілу важливий — він впливає на порядок елементів у новій колекції.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

//! Створення об'єкта
// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення.Імена властивостей об'єкта — унікальні, тому властивості об'єкта, що розпиляються,
// можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Під час розпилення можна додавати властивості в довільне місце.Головне пам'ятати про унікальність імені властивості
// і про те, що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
