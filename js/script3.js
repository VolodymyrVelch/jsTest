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

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const item in object) {
    if (object.hasOwnProperty(item)) {
      let index = [];
      index.push(item);
      propCount += index.length;
    }
  }
  // Change code above this line
  return propCount;
}

console.log(countProps({})); // повертає 0
console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3
// Функція підраховує тільки власні властивості об'єкта
