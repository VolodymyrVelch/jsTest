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

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

// for (const color of colors) {
//   if (color.hex) {
//     hexColors.push(color.hex);
//   }
//   if (color.rgb) {
//     rgbColors.push(color.rgb);
//   }
//   // if (color.key === 'hex') {
//   //   push.hexColors(Object.values(key));
//   // }
//   console.log(rgbColors);
// }
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
