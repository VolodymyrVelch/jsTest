// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає
// повідомлення про результат операції.Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits >= totalPrice) {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   } else {
//     message = 'Insufficient funds!';
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(1200, 4, 8000));
// console.log(makeTransaction(1200, 4, 4000));

// 2=====================
// Функція checkPassword отримує пароль користувача у
// параметр password, перевіряє його на збіг з паролем
//адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про
//результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн
// «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';

//   // Change code above this line
// }
// console.log(checkPassword('password'));
// console.log(checkPassword('jqueryismyjam'));

// 3=================
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// 4==================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// console.log('firstElement', fruits[0]);
// console.log('secondElement', fruits[1]);
// const lastElementIndex = fruits.length - 1;
// console.log('lastElement', fruits[lastElementIndex]);

// 9 ======================
// Напиши функцію getExtremeElements(array), яка приймає один параметр
//array - масив елементів довільної довжини.Функція повинна повертати
// масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line

//   const resultArray = [array[0], array[array.length - 1]];
//   return resultArray;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); // повертає [1, 5]
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); // повертає ["Earth", "Venus"]
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); // повертає ["apple", "banana"]

// !!!!!!!!!!!!!!!!!!

// 10=========================
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage('Mango', '')); //['M', 'a', 'n', 'g', 'o'];

// 12===================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '),
// );
// //повертає "Mango hurries to the train"
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
// //повертає "Mango"
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));
// // повертає "top_picks_for_you"

// 13=============
// function slugify(title) {
//   // Change code below this line
//   let titleLow = title.toLowerCase().split(' ').join('-');
//   // let slugTitle = slug(title);
//   // let slugTitle = title;

//   return titleLow;
//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers')); // повертає "arrays-for-begginers"
// console.log(slugify('English for developer')); // повертає "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // повертає "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // повертає "how-to-become-a-junior-developer-in-two-weeks"

// 16.========================
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення
//  нового масиву з усіма елементами двох вихідних firstArray і secondArray.
//  Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція
//  повинна повернути копію масиву довжиною maxLength елементів.
//  В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const combainArray = firstArray.concat(secondArray);
//   const arrayConc = combainArray.slice(0, maxLength);

//   return arrayConc;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// //повертає["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// //повертає["Mango", "Poly", "Houston", "Ajax"]

// for ========================
// for (let i = 0; i <= 20; i += 1) {
//   console.log(i);
// }
// 18 ---------------------------------
// Напиши функцію calculateTotal(number), яка приймає ціле число
//   (параметр number) і повертає суму всіх цілих чисел від одиниці
//   і до цього числа.Наприклад, якщо number дорівнює 3, то сума -
//   це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(3)); // повертає 6
// console.log(calculateTotal(7)); // повертає 28
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300

// 19=========================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20=========================
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр
// order - масив чисел, і обчислює загальну суму його елементів.Загальна
// сума елементів повинна зберігатися у змінній total, яка повертається
// як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const number of order) {
//     total += number;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// 21========================
// Напиши функцію findLongestWordstring), яка приймає довільний рядок,
//   що складається тільки зі слів, розділених пробілом(параметр string),
//     і повертає найдовше слово в цьому рядку.
// function findLongestWord(string) {
//   // Change code below this line
//   let arrayDiv = string.split(' ');
//   let result = arrayDiv[0];

//   for (const word of arrayDiv) {
//     if (word.length > result.length) {
//       result = word;
//     }
//   }
//   console.log(result);
//   // Change code above this line
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // повертає jumped
// console.log(findLongestWord('Google do a roll')); // повертає Google
// console.log(findLongestWord('May the force be with you')); // повертає force

// 22=======================
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив
// усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [min, max];
//   // Change code below this line
//   for (let i = 1 + min; i < max; i += 1) {
//     numbers.push(i);
//     numbers.sort();
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3)); // повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // повертає [29, 30, 31, 32, 33, 34]

// 23=====================================
// Напиши функцію filterArray(numbers, value), яка приймає масив
// чисел(параметр numbers) і повертає новий масив, в якому будуть
// тільки ті елементи масиву numbers, які більші за значення параметра
// value(число).
// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// console.log(filterArray());
// // з випадковим масивом і числом повертає правильний масив
// //В циклі for використовувався метод push

// 24===========================
// Функція checkFruit(fruit) приймає рядок з назвою фрукта(параметр fruit),
//   і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('plum')); // повертає true
// console.log(checkFruit('mandarin')); // повертає false
// console.log(checkFruit('pear')); // повертає true
// console.log(checkFruit('Pear')); // повертає false
// console.log(checkFruit('apple')); //повертає true
// // У функції використовувався метод includes

// 25====================================
// Спільними елементами масивів називають ті елементи, які присутні у всіх
// масивах.
//   Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа
// 3 і 5, оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8
// присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви
//  довільної довжини в параметри array1 і array2, і повертає новий масив,
//   що складається з тих елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// // В циклі for використовувалися методи includes і push
