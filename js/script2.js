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
// console.log(checkStorage(5, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 4==================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// console.log('firstElement', fruits[0]);
// console.log('secondElement', fruits[1]);
// const lastElementIndex = fruits.length - 1;
// console.log('lastElement', fruits[lastElementIndex]);

// 9 ======================
