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
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice(3, 3));
console.log(calculateTotalPrice(5, 3));
