// // Колбек-функція------------------------------------

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// Інлайн функція ------------------------------------

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest('Полі', function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });
// ----------------------
// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// =>=========================
// const User = name => {
//   this.name = name;
// };
// console.log(User('Mango'));

// 2===============================
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим
//параметром
//   (параметр callback) колбек - функцію і повертала її виклик.Функція
//    deliverPizza або makePizza буде передаватися як колбек і
//    очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// // Оголошена функція deliverPizza
// // Оголошена функція makePizza
// // Оголошена функція makeMessage
// // Функція makeMessage приймає два параметри, названі відповідно до завдання,
// //   pizzaName і callback
// console.log(makeMessage('Royal Grand', makePizza));
// // повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza));
// // повертає рядок "Delivering Ultracheese pizza."

// 3=====================================
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши
// другим аргументом інлайн колбек - функцію eatPizza(pizzaName), яка логує
// рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана
//  функція eatPizza з єдиним параметром pizzaName

// 4===================================================
// Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг
//  методу order таким чином, щоб він приймав другим і третім параметром
//  два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//   метод order повинен повертати результат виклику колбека onError, передаючи
//   йому аргументом рядок "There is no pizza with a name <имя пиццы> in the
// assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//   метод order повинен повертати результат виклику колбека onSuccess, передаючи
//    йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів.
// Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     for (let pizza of this.pizzas) {
//       if (pizzaName === pizza) {
//         return makePizza(pizzaName);
//       }
//     }
//     return onOrderError(pizzaName);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// // // Метод order оголошує три параметри
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// // // повертає "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// // // повертає "Your order is accepted. Cooking pizza Four meats."
// // console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// // // повертає "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
// // // повертає "Error! There is no pizza with a name Vienna in the assortment."

// 5====================================================
// Функція calculateTotalPrice(orderedItems) приймає один параметр
// orderedItems - масив чисел, і розраховує загальну суму його елементів,
//   яка зберігається у змінній totalPrice і повертається як результат роботи
// функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона
//  використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// ---------------------------for-----------------------------------------
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

// ------------------------forEach-----------------------------------------
//   orderedItems.forEach(function (orderedItem, index) {
//     totalPrice += orderedItem;
//   });

// ---------------------------------------------------------------
//   // Change code above this line
//   return totalPrice;
// }

// // Оголошена функція calculateTotalPrice(orderedItems)
// // Для перебирання масиву orderedItems використаний метод forEach

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// // Виклик функції з випадковими, але валідними аргументами, повертає
// //  правильне значення

// 6================================
// Функція filterArray(numbers, value) приймає масив чисел numbers і
// повертає новий масив, в якому будуть тільки ті елементи оригінального
// масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона
//  використовувала метод forEach.

// function filterArray(numbers, value) {
//
// V

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };
// // Change code above this line
// // }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

// 7=============================================
// Функція getCommonElements(firstArray, secondArray) приймає два масиви
// довільної довжини в параметри firstArray і secondArray, і повертає новий
//  масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона
//  використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }
//   firstArray.forEach(function (firsrArrIndex) {
//     if (secondArray.includes(firsrArrIndex)) {
//       commonElements.push(firsrArrIndex);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []

// 10 =============================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// РІШЕННЯ

// const calculateTotalPrice= (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) =>{
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// 11========================================

// // Заміни оголошення функції filterArray() і колбек для методу forEach()
// // на стрілочні функції.
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

// 13========================================

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює
//  кожен елемент, значення якого - це парне число, додаючи до нього значення
//  параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не
// змінювала масив чисел numbers, а створювала, наповнювала і повертала
//  новий масив з оновленими значеннями.
// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newNumbers = [];
//   // ---------------------------------------------------
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] % 2 === 0) {
//   //       newNumbers.push(numbers[i] + value);
//   //     } else {
//   //       newNumbers.push(numbers[i]);
//   //     }
//   //   }
//   // --------------------------forEach---------------------
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     } else {
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;
//   // Change code above this line
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // повертає новий масив [144, 13, 81, 192, 136, 154]

// 19======================================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

// 20========================================
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів
// книг(властивість genres) з масиву books, а у змінній uniqueGenres - масив
// унікальних жанрів, без повторень.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(item => item.genres);
// const uniqueGenres = allGenres.filter(
//   (item, index) => allGenres.indexOf(item) === index,
// );
// console.table(allGenres);
// console.table(uniqueGenres);
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()
// 21======================
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість rating)
//  більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям
//     (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8

// 22=================================
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]


// //   Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала
// //    масив користувачів, у яких колір очей (властивість eyeColor) збігається зі
// //     значенням параметра color.
// const color = "brown";
// // Change code below this line
// const getUsersWithEyeColor = function (users, color)  {
   
//     return  users.filter(eye => eye.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, color));
// // Change code above this line


// // Оголошена змінна getUsersWithEyeColor
// // Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// // Для перебирання параметра users використовується метод filter()
// // Якщо значення параметра color - це "blue", функція повертає масив об'єктів 
// // користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// // Якщо значення параметра color - це "green", функція повертає масив об'єктів 
// // користувачів з іменами Ross Vazquez і Elma Head
// // Якщо значення параметра color - це "brown", функція повертає масив об'єктів
// //  користувачів з іменами Blackburn Dotson і Sheree Anthony
// // Якщо значення параметра color - це будь-який інший рядок, функція повертає
// //  порожній масив
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 23===================================
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона
//  повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок 
//  від minAge до maxAge.
// const users =[
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ];

// // Change code below this line
// const getUsersWithAge = function(users, minAge, maxAge) {
//    return users.filter(user =>  maxAge > user.age && user.age > minAge);
// };
// console.log(getUsersWithAge(users, 20, 30));

// Change code above this line

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge,
//      maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція
//  повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція
//  повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція
//  повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // 24===================================
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ];


// // Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала
// //  масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів
// //   користувача зберігається у властивості friends.

//   // Change code below this line
// const getUsersWithFriend = function (users, friendName) {
//    return users.filter(user => user.friends.includes(friendName));
// };
// // Change code above this line
// console.log(getUsersWithFriend(users, "Briana Decker"))

// // Оголошена змінна getUsersWithFriend
// // Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users,friendName)
// // Для перебирання параметра users використовується метод filter()
// // Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає
// //  масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// // Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає
// //  масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// // Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає
// //  порожній масив
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// 25================================
const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ];
  
//   Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів
//    всіх користувачів (властивість friends). У декількох користувачів можуть бути
//     однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// Change code below this line
const getFriends = function(users) {
    const {friends} = users;
    console.log(friends)
   return users.filter(user => user.friends.name )
};
// Change code above this line
console.log(getFriends(users.friends));

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив 
// ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення