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
// +++звичайна подача:
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(10, 11));
// console.log(checkStorage(10, 4));
// ++++ тернарний :
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(10, 11));
// console.log(checkStorage(10, 4));

// 27 SWITCH====================

// function getSubscriptionPrice(type) {
//   let price;
//   if (type === 'starter') {
//     price = 0;
//   } else if (type === 'professional') {
//     price = 20;
//   } else if (type === 'organization') {
//     price = 50;
//   }
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));

// ++++ в SWiTCH (тільки строга ===)
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));

//28 ===================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword());

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));

// 29========================
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;

//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;

//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;

//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost('Jamaica'));

// 30===========================
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength('Volodymyr Velch'));

// 31 ======================
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(lastElement);

// 33=============
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//     result = message.slice(message, maxLength) + '...';
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('ghjrfdsfsdfa', 5));

// 36=================
function checkForSpam(message) {
  let result;
  // Change code below this line
  const messagetoLowerCase = message.toLowerCase();
  result =
    messagetoLowerCase.includes('spam') || messagetoLowerCase.includes('sale');
  // Change code above this line
  return result;
}

console.log(checkForSpam('message '));
