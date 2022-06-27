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
//     // if(pizzaName===)
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

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// // Метод order оголошує три параметри
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// // повертає "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// // повертає "Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// // повертає "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
// // повертає "Error! There is no pizza with a name Vienna in the assortment."

// 5====================================================
// Функція calculateTotalPrice(orderedItems) приймає один параметр
// orderedItems - масив чисел, і розраховує загальну суму його елементів,
//   яка зберігається у змінній totalPrice і повертається як результат роботи
// функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона
//  використовувала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  // Change code above this line
  return totalPrice;
}

// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// Виклик функції з випадковими, але валідними аргументами, повертає
//  правильне значення
