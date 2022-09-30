// const Car = function ({ brend, model, price } = {}) {
//   this.brend = brend;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.priceChange = function (newPrice) {
//   this.price = newPrice;
// };
// const myCar1 = new Car({
//   brend: 'Geely',
//   model: 'CK2',
//   price: 2000,
// });
// const myCar2 = new Car({
//   brend: 'Nissan',
//   model: 'Juke',
//   price: 15000,
// });

// myCar1.priceChange(2500);
// console.log(myCar1);
// console.log(myCar2);

class Car {
  constructor({ brend, model, price }) {
    this.brend = brend;
    this.model = model;
    this.price = price;
  }

  priceChange(newPrice) {
    this.price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const myCar1 = new Car({
  brend: 'Geely',
  model: 'CK2',
  price: 2000,
});

// myCar1.setModel('CK3');
console.log(myCar1.model);

myCar1.model = 'ck3';
