// let x = 55;
// let y = Number(prompt('Будь ласка введіть число!'));

// if (x === y) {
//   console.log(alert('Відповідь вірна!'));
// } else {
//   console.log(
//     x > y
//       ? alert(`Загадане число більше вказаного "${y}" , спробуйте ще раз`)
//       : alert(`Загадане число менше вказаного : "${y}", спробуйте ще раз`),
//   );
// }

// _______________________________________________________

// 6 ================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// const aptTags = apartment.tags;

// console.log(aptTags);

// console.log();

// 7 =================================
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з
//  наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.room = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// console.log(apartment.location);

// const keys = Object.keys(apartment);
// console.table(keys);

// 10==================================
// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив
// keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// ---------------FOR IN------------------

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);

//   console.log(keys);
//   console.log(values);
// }

// +++++++++++++ Object.keys + for...of ++++++++

// const key = Object.keys(apartment);
// console.log(key);
// for (const element of key) {

//   keys.push(element);
//   values.push(apartment[element]);

//   console.log(keys);
//   console.log(values);
// }

// 11====================
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//     console.log(key);
//     console.log(apartment[key]);
//   }
// }

// 12===============================
// Напиши функцію countProps(object), яка рахує і повертає кількість
// власних властивостей об'єкта в параметрі object. Використовуй змінну
//  propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const item in object) {
//     if (object.hasOwnProperty(item)) {
//       let index = [];
//       index.push(item);
//       propCount += index.length;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3
// // Функція підраховує тільки власні властивості об'єкта

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }

//     // Якщо це невласна властивість - нічого не робимо
//   }

// 13=========================================
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//  Запиши у змінну keys масив ключів власних властивостей об'єкта
//   apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const valuesOf= Object.values(apartment);
//   for (const value of valuesOf){
//       values.push(value);
//       console.log(values);
//   }
//   for (const key of keys){

//   }

// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the
// city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// 14====================================

// Виконай рефакторинг функції countProps(object), використовуючи метод
// Object.keys() і, можливо, але не обов'язково, цикл for...of.
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const item = Object.keys(object);
//   propCount = item.length;

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3
// // Функція підраховує тільки власні властивості об'єкта

// 15============================================

// Запиши у змінну keys масив ключів власних властивостей
// об'єкта apartment, а у змінну values - масив всіх значень його
// властивостей.Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(values);

// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()
// ?????????????????????
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];
// console.log(book);
// // Щоб побачити ось таке:
// // const book = {
// //   title: 'The Last Kingdom',
// //   author: 'Bernard Cornwell',
// //   pageCount: 836,
// //   originalLanguage: 'en',
// //   translations: ['ua', 'ru'],
// // };

// ???????????????????????????
// 16============================
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я
// властивості - це ім'я співробітника, а значення властивості - це зарплата.
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({})); // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400
// // Функція враховує тільки власні властивості об'єкта

// 17=================================
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у
// масив hexColors значення властивостей hex, а в масив rgbColors - значення
// властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// /for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// // Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// // Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// 18=====================================
// Напиши функцію getProductPrice(productName), яка приймає один параметр
// productName - назва продукту.Функція шукає об'єкт продукту з таким
// ім'ям(властивість name) в масиві products і повертає його ціну(властивість
//    price).Якщо продукт з такою назвою не знайдений, функція повинна
//     повертати null.

// код

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice('Radar')); // повертає 1300.
// console.log(getProductPrice('Grip')); // повертає 1200.
// console.log(getProductPrice('Scanner')); // повертає 2700.
// console.log(getProductPrice('Droid')); // повертає 400.
// console.log(getProductPrice('Engine')); // повертає null.

// 19==========================
// Напиши функцію getAllPropValues(propName), яка приймає один параметр
// propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх
//  значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна
//  повернути порожній масив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   for (const product of products) {
//     if (product.hasOwnProperty([propName])) {
//       array.push(product[propName]);
//     }
//     // console.log(propName);
//   }
//   return array;
//   // Change code above this line
// }

// console.log(getAllPropValues('name')); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); //повертає [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); // повертає []

// 20===================================
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр
// productName - назва товару.Функція повинна повернути загальну вартість
//   (ціна * кількість) товару з таким ім'ям з масиву products.

// КОД
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let price = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       price = product.price * product.quantity;
//     }
//   }
//   return price;

//   // Change code above this line
// }

// console.log(calculateTotalPrice('Blaster')); // повертає 0
// console.log(calculateTotalPrice('Radar')); // повертає 5200
// console.log(calculateTotalPrice('Droid')); //) повертає 2800
// console.log(calculateTotalPrice('Grip')); // повертає 10800
// console.log(calculateTotalPrice('Scanner')); // повертає 8100

// 21=========================================
// Надійшов триденний прогноз максимальних температур і ми рахуємо середню
//  температуру за три дні(meanTemperature).Заміни оголошення змінних
// yesterday, today і tomorrow однією операцією деструктуризації властивостей
//  об'єкта highTemperatures.

// КОД

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Деструктеризація
// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(yesterday, today, tomorrow);

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// 22=========================================

// У прогнозі максимальних температур також може бути необов'язкова
// властивість icon - іконка погоди.Заміни оголошення змінних yesterday,
//     today, tomorrow і icon однією операцією деструктуризації властивостей
//     об'єкта highTemperatures. Задай значення за замовчуванням для icon -
//     рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

// 25==========================================

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними
// температурами, а також необов'язковими іконками. Заміни оголошення всіх
//  змінних однією операцією деструктуризації властивостей об'єкта forecast.
//  Задай значення за замовчуванням для іконок, змінних todayIcon і
// tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// console.log(highTomorrow);

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   console.log(todayLow);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// );

// 29=======================================
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// 30======================================
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з
// наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи
//  напряму параметр data.У новому об'єкті повинна бути властивість completed,
//   значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві,
//     category і priority, можуть бути відсутніми.Тоді, в новому об'єкті
// завдання, у властивостях category і priority повинні бути значення за
// замовчуванням, що зберігаються в однойменних локальних змінних.
// function makeTask(data) {
//   const category = 'General';
//   const priority = 'Normal';
//   const completed = false;
//   Change code below this line
//   const TaskList = {
//     category: 'General',
//     priority: 'Normal',
//     completed: false,
//   };
//   //   const { category, priority, text, completed } = TaskList;
//   const newList = { ...TaskList, ...data };
//   return newList;
//   // Change code above this line
// }
// console.log(makeTask({}));
// // повертає { category: "General", priority: "Normal", completed: false }
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   }),
// );
// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: 'Buy bread' }));
// // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// 31==============================
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб
//  вона приймала будь - яку кількість аргументів, рахувала і повертала їх
// суму.

// Change code below this line
// function add(...args) {
//   // Change code above this line
//   let summ = 0;
//   for (const arg of args) {
//     summ += arg;
//   }

//   return summ;
// }

// // Функція add використовує параметр args
// // Для збирання аргументів у змінну args, у підписі функції
// // використовується синтаксис ... (оператор rest)

// console.log(add(15, 27)); // повертає 42
// console.log(add(12, 4, 11, 48)); // повертає 75
// console.log(add(32, 6, 13, 19, 8)); // повертає 78
// console.log(add(74, 11, 62, 46, 12, 36)); // повертає 241

// 32====================================
// Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло
//  функції addOverNum() таким чином, щоб вона рахувала суму тільки тих
// аргументів, які більші за задане число.Це число повинно бути першим
//  параметром функції.
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   //   for (let i = 0; i < args.length; i++) {
//   //     let argOf = args[i];
//   //     if (args[0] < argOf) {
//   //       total += argOf;
//   //     }
//   //   }
//   // ---------------------------------------
//   for (let arg of args) {
//     if (args[0] < arg) {
//       total += arg;
//     }
//   }
//   return total;

//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); // повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // повертає 218

// 33 ====================================
