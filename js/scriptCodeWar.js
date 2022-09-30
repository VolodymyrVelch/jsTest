// Квадрат
// function squareSum(numbers) {
//   let square = 0;
//   for (const number of numbers) {
//     square += Math.pow(number, 2);
//   }
//   return square;
// }

// function squareSum(numbers) {
//   return numbers.reduce((val, number) => (val += Math.pow(number, 2)), 0);
// }
// const squareSum = numbers =>
//   numbers.reduce((val, number) => (val += Math.pow(number, 2)), 0);

// console.log(squareSum([1, 2])); //, 5);
// console.log(squareSum([0, 3, 4, 5])); //, 50);
// console.log(squareSum([])); //, 0);

// =====================================
// function removeChar(str) {
//   //You got this!
//   return str.slice(1, str.length - 1);
//   console.log(firstChar);
// }

// console.log(removeChar('eloquent')); //, 'loquen');
// console.log(removeChar('country')); //, 'ountr');
// console.log(removeChar('place')); //, 'lac');
// console.log(removeChar('ooopsss')); //, 'oopss');

// ============================
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   return distanceToPump / mpg <= fuelLeft ? true : false;
// };
// console.log(zeroFuel(50, 25, 2)); //, true);
// console.log(zeroFuel(100, 50, 1)); //, false);
// =============================
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// function getGrade(s1, s2, s3) {
//   // Code here
//   let score = (s1 + s2 + s3) / 3;
//   console.log(score);

//   if (score >= 90) {
//     return 'A';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score >= 60) {
//     return 'D';
//   }
//   return 'F';
// }

// console.log(getGrade(92, 93, 94)); //, 'A');
// console.log(getGrade(89, 89, 90)); //, 'B');
// console.log(getGrade(58, 62, 70)); //, 'D');
// console.log(getGrade(58, 59, 60)); //, 'F');

// =====================================

// function basicOp(operation, value1, value2) {
//   // Code
//   {
//     return eval(value1 + operation + value2);
//   }
// }

// console.log(basicOp('+', 4, 7)); //, 11);
// console.log(basicOp('-', 15, 18)); //, -3);
// console.log(basicOp('*', 5, 5)); //, 25);
// console.log(basicOp('/', 49, 7)); //, 7);

// ================================
// function abbrevName(name) {
//   // code away
//   return name
//     .split(' ')
//     .map(name => name[0])
//     .join('.');
//   console.log(word);
// }
// console.log(abbrevName('Sam Harris')); //, 'S.H');
// console.log(abbrevName('Patrick Feenan')); //, 'P.F');
// console.log(abbrevName('Evan Cole')); //, 'E.C');
// console.log(abbrevName('P Favuzzi')); //, 'P.F');

// ====================================
// function smash(words) {
//   return words.join(' ');
// }
// console.log(smash(['hello', 'world'])); //, "hello world");
// console.log(smash(['hello', 'amazing', 'world'])); //, "hello amazing world");
// console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence'])); //, "this is a really long sentence");

// ========================================
// function sum(numbers) {
//   return numbers.reduce((val, number) => (val += number), 0);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));
// // Output: 9.2;

// console.log(sum([]));
// // Output: 0;

// console.log(sum([-2.398]));
// // Output: -2.398;

// =====================
// function doubleInteger(i) {
//   // i will be an integer. Double it and return it.

//   return i * 2;
// }
// console.log(doubleInteger(2));

// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   }
//   return 'green';
//   //your code here!
// }
// console.log(updateLight('green'));

// ===================================

// const rps = (p1, p2) => {
//   if (
//     (p1 === 'rock' && p2 === 'scissors') ||
//     (p1 === 'scissors' && p2 === 'paper') ||
//     (p1 === 'paper' && p2 === 'rock')
//   ) {
//     return 'Player 1 won!';
//   } else if (
//     (p1 === 'scissors' && p2 === 'rock') ||
//     (p1 === 'paper' && p2 === 'scissors') ||
//     (p1 === 'rock' && p2 === 'paper')
//   ) {
//     return 'Player 2 won!';
//   }
//   return 'Draw!';
// };

// console.log(rps('scissors', 'paper'));
// console.log(rps('scissors', 'rock'));
// console.log(rps('paper', 'paper'));
// // "scissors", "paper" --> "Player 1 won!"
// // "scissors", "rock" --> "Player 2 won!"
// // "paper", "paper" --> "Draw!"

// ===========================================
// !!!!!!!!!!!!!!!!!!!!

// function doubleChar(str) {
//   // Your code here
//   return str
//     .split('')
//     .map(index => index + index)
//     .join('');
// }

// console.log(doubleChar('abcd')); //, 'aabbccdd');
// console.log(doubleChar('Adidas')); //, 'AAddiiddaass');
// console.log(doubleChar('1337')); //, '11333377');

// ===========================================
// REPLACE

// function correct(string) {
//   return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');
// }

// console.log(correct('L0ND0N')); //, 'LONDON');
// console.log(correct('DUBL1N')); //, 'DUBLIN');
// console.log(correct('51NGAP0RE')); //, 'SINGAPORE');
// console.log(correct('BUDAPE5T')); //, 'PARIS');

// function min(numbers) {
//   return numbers.filter((number, index) => number > Math.min(...numbers));
// }
// !!!!!!!!!!!!!!
// Math.min  - без деструкторизації Math.min.apply(this, array)

// console.log(min([3, 4, 6, 2, 1, 5]));

// ========================================
// var number = function (busStops) {
//   // Good Luck!
//   const peopleIn = busStops.reduce(
//     (val, busStop) => (val += busStop[0]),
//     0,
//   );
//   const peopleOut = busStops.reduce(
//     (val, busStop) => (val += busStop[1]),
//     0,
//   );
//   const restPeople = peopleIn - peopleOut;
//   return restPeople;
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ]),
// ); //,5);
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ]),
// ); //,17);
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ]),
// ); //,21);
// console.log(number([[0, 0]])); //,0);
// ========================================

// function solution(str) {
//   return str.split('').reverse().join('');
// }
// console.log(solution('world')); //, 'dlrow');
// console.log(solution('hello')); //, 'olleh');
// console.log(solution('')); //, '');
// console.log(solution('h')); //, 'h')

// =======================================
// var number = function (array) {
//   //your awesome code here
//   // const newArray = [];
//   return array.map((n, index) => `${index + 1}: ${n}`);

//   // return newArray;
// };

// console.log(number([])); //, [], 'Empty array should return empty array');
// console.log(number(['a', 'b', 'c']));
// //['1: a', '2: b', '3: c'],

// ====================================

// const areaOrPerimeter = function (l, w) {
//   // Return your answer
//   return l === w ? l * w : (l + w) * 2;
// };

// console.log(areaOrPerimeter(4, 4)); // 16;
// console.log(areaOrPerimeter(6, 10)); //  32

// ==================================
// !!!!! reverse  separate words

// function reverseWords(str) {
//   return str
//     .split(' ')
//     .map(word => word.split('').reverse().join(''))
//     .join(' ');
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //,
// // 'ehT kciuq nworb xof spmuj revo eht yzal .god',

// console.log(reverseWords('apple')); //, 'elppa');
// console.log(reverseWords('a b c d')); //, 'a b c d');
// console.log(reverseWords('double  spaced  words')); //,
// // 'elbuod  decaps  sdrow',

// ==========================================
// function cockroachSpeed(s) {
//   //Good Luck!
//   return Math.floor((s * 100000) / 3600);
// }
// console.log(cockroachSpeed(1.08)); // , 30);
// console.log(cockroachSpeed(1.09)); // , 30);
// console.log(cockroachSpeed(0)); // , 0);
// ============================

// function firstNonConsecutive(arr) {
//   // return arr.find((num, index) => num % (index + 1) === 1);
//   // const array = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//   }
//   //   if (arr[i] % (i + 1) === 1) {
//   //     return arr[i];
//   //   } else if (arr[i] / arr[i] !== 0) {
//   //     return 0;
//   //   }
//   // }
//   // return null;
// }

// console.log(firstNonConsecutive([-9, -8, -7, -6, -5, -4, 'p', -2, -1])); //6

// =========================================
// const mult = (p1, p2) => p1 * p2;

// console.log(mult(3, 2));
// ==================================

// function strCount(str, letter) {
//   //code here
//   return str.split('').filter(i => i === letter).length;
// }

// // .toLowerCase();
// console.log(strCount('Hello', 'o')); //, 1;
// console.log(strCount('', 'z')); //, 0;
// console.log(strCount('Hello', 'l')); //, 2;

// ======================================
// const findNeedle = haystack =>
//   `found the needle at position ${haystack.indexOf('needle')}`;
// //   .find(n, index)=>{
// //     if (n === 'needle') { `found the needle at position ${index}` }
// // }
// // return needLe;

// console.log(
//   findNeedle([
//     '3',
//     '123124234',
//     undefined,
//     'needle',
//     'world',
//     'hay',
//     2,
//     '3',
//     true,
//     false,
//   ]),
// );

// ========================================
// function rentalCarCost(d) {
//   // Your solution here
//   let price = 40;
//   // if (d >= 7) {
//   //   return d * price - 50;
//   // }
//   // return d * price - 20;
//   return d >= 7 ? d * price - 50 : d >= 3 ? d * price - 20 : d * price;
// }

// console.log(rentalCarCost(1)); //, 40);
// console.log(rentalCarCost(2)); //, 80);
// console.log(rentalCarCost(3)); //, 100);
// console.log(rentalCarCost(4)); //, 140);
// console.log(rentalCarCost(5)); //, 180);
// console.log(rentalCarCost(6)); //, 220);
// console.log(rentalCarCost(7)); //, 230);
// console.log(rentalCarCost(8)); //, 270);
// console.log(rentalCarCost(9)); //, 310);
// console.log(rentalCarCost(10)); //, 350);
// =====================================
// function even_or_odd(number) {
//   return number % 2 === 0 ? 'odd' : 'even';
// }
// console.log(even_or_odd(-8));
// // ==================
