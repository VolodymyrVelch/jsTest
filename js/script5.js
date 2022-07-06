//
// 3=================================
// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// //  Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта
// // historyService, щоб методи почали працювати правильно.

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// // Оголошена змінна historyService
// // Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// console.log(historyService.getOrdersLog());
// // повертає рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails());
// // повертає масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
// // повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));
// // повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// // Метод getOrdersLog об'єкта historyService використовує this
// // Метод getEmails об'єкта historyService використовує this

// 4=================================
// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта
//  у змінній сhild.
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// // Оголошена змінна parent
// // Значення змінної parent - це об'єкт
// console.log(parent.hasOwnProperty('surname')); // повертає true
// console.log(parent.hasOwnProperty('heritage')); // повертає true
// // Оголошена змінна child
// // Значення змінної child - це об'єкт
// console.log(child.hasOwnProperty('name')); // повертає true
// // Звернення до child.name повертає "Jason"
// console.log(child.hasOwnProperty('age')); // повертає true
// // Звернення до child.age повертає 27
// console.log(child.hasOwnProperty('surname')); // повертає false
// // Звернення до child.surname повертає "Moore"
// console.log(child.hasOwnProperty('heritage')); // повертає false
// // Звернення до child.heritage повертає "Irish"
// console.log(parent.isPrototypeOf(child)); // повертає true
// // Використовується метод Object.create()
//

// 7 ===============================
// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand,
//  model і price, значеннями яких повинні бути передані аргументи під час
//  його виклику з оператором new.
// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// // Оголошений клас Car
// // Клас Car має метод constructor
// const audi = new Car('Audi', 'Q3', 36000);
// console.log(audi);
// // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }

// 8=======================================
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр
//   - об'єкт з властивостями brand,
//  model і price.Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// // Оголошений клас Car
// // Клас Car має метод constructor
// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi); // { brand: "Audi", model: "Q3", price: 36000 }
// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(bmw); // { brand: "BMW", model: "X5", price: 58900 }
// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(nissan); // { brand: "Nissan", model: "Murano", price: 31700 }

// 9======================================
// Додай класу Car два методи.

//   getPrice() - повертає значення властивості price з об'єкта,
//  який буде його викликати.
//   changePrice(newPrice) - оновлює значення властивості price в об'єкта,
// який буде його викликати на newPrice.
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   getModel() {
//     return this.model;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }

// // В класі Car оголошений метод getPrice
// // Метод getPrice повертає значення властивості price екземпляра класу,
// //   який його викликає
// // В класі Car оголошений метод changePrice
// // Метод changePrice змінює значення властивості price екземпляра класу,
// //   який його викликає
// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(audi);

// console.log(audi.getPrice());

// console.log(audi.changePrice(35000));
// console.log(audi);
// console.log(audi.getModel());

// 10==================================
// Напиши клас Storage, який буде створювати об'єкти для управління складом
// товарів.Клас очікує тільки один аргумент - початковий масив товарів, який
// записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта,
//  який викликає цей метод.
//   addItem(newItem) - приймає новий товар newItem і додає його в масив товарів
//  у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з
//  масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у
// тій послідовності, в якій твій код перевірятимуть тести.Будь ласка,
//   нічого там не змінюй.
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(removeItem) {
//     const remov = this.items.includes(removeItem);
//     this.items.splice(remov, 1);
//   }
// }
// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає

// 11=================================
// Напиши клас StringBuilder, який приймає один параметр initialValue -
//   довільний рядок, який записується у властивість value об'єкта, що
// створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення
//  властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str(рядок) і додає його на початок
//  значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в
//  кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у
// тій послідовності, в якій твій код перевірятимуть тести.Будь ласка,
//   ічого там не змінюй.

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// // Оголошений клас StringBuilder
// // В класі StringBuilder оголошений метод getValue
// // Метод getValue повертає значення властивості value екземпляра класу,
// //  який його викликає
// // // В класі StringBuilder оголошений метод padEnd
// // // Метод padEnd змінює властивість value екземпляра класу, який його
// // викликає
// // // В класі StringBuilder оголошений метод padStart
// // // Метод padStart змінює властивість value екземпляра класу, який його
// // викликає
// // // В класі StringBuilder оголошений метод padBoth
// // // Метод padBoth змінює властивість value екземпляра класу, який його
// // викликає
// // // В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// // // Об'єкт builder містить властивість value
// // // Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// // // Другий виклик builder.getValue(), після виклику builder.padStart("^"),
// //  повертає рядок ^.
// // // Третій виклик builder.getValue(), після виклику builder.padEnd("^"),
// // повертає рядок ^.^
// //   // Четвертий виклик builder.getValue(), після виклику builder.padBoth("="),
// //   повертає рядок =^.^=

// 12============================
// Виконай рефакторинг класу Car таким чином, щоб властивість brand була
// приватною, і додай два методи для публічного інтерфейсу, для читання і
//  зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
//   changeBrand(newBrand) - змінює значення приватної властивості brand на
// newBrand.
class Car {
  // Change code below this line
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  // Change code above this line
}

// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi.brand); // { model: "Q3", price: 36000 }
const bmw = new Car({ brand: 'bmw', model: 'X5', price: 58900 });
console.log(bmw); // { model: "X5", price: 58900 }
const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
console.log(nissan.changeBrand('Honda')); // змінює значення приватної властивості brand на "Honda"
console.log(nissan); // { model: "Murano", price: 31700 }
console.log(nissan.getBrand());
