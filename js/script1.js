// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// // // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`результат ${x * y * z}`);
// }
// // // 2. Передача аргументів
// multiply(2, 2, 3);
// multiply(2, 5, 3);

// function add(a, b, c) {
//   // Change code below this line

//   return a - b + c;

//   // Change code above this line
// }

// // add(2, 5, 8); // 15

// console.log(add(10, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ====================================

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice(3, 3));
// console.log(calculateTotalPrice(5, 3));

// ============================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// =======================
// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && end >= number; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(12, 17, 5));
// console.log('Число  входить в діапазон:', isNumberInRange(12, 17, 15));
// =====================
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 15, 16));
//24/36 ======================
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(6000));
//25  тернарний оператор ==========================
