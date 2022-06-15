'use strict';

// const messege = 'JS';
// console.log(messege);

// const userName = 'voffka';
// const x = 10;
// const y = 6;

// console.log(x + y);

// console.log(x * y);

// alert('qwqe');

// Приведеня до степеня:
// let base = prompt('Введи число');
// base = Number(base);
// console.log('Число', base);

// let power = prompt('Введи степінь');
// power = Number(power);
// console.log('Cтепінь', power);

// let result = base ** power;
// console.log('Результат', result);

const numbers = [67, 54, 9, 200, 4, 32, 148, 11, 68];
let biggestNum = numbers[0];

for (const number of numbers) {
  if (biggestNum < number) {
    biggestNum = number;
  }
}
console.log(biggestNum);
