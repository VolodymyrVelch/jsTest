// const names = ['Bobby', 'Peter', 'Chris'];

// const ul = document.createElement('ul');
// const list = names.map(name => `<li class="item">${name}</li>`);

// ul.insertAdjacentHTML('beforeend', list.join(''));
// document.querySelector('body').appendChild(ul);

// function areYouPlayingBanjo(name) {
//   // Implement me
//   console.log(name[0]);
//   let first = name
//     .split('')
//     .find((n, i) => [0])
//     .toLowerCase();
//   if (first === 'r') {
//     return `'${name} plays banjo'`;
//   }
//   return `${name} does not play banjo'`;
// }

// console.log(areYouPlayingBanjo('Adam')); //, 'Paul does not play banjo');
// console.log(areYouPlayingBanjo('Paul')); //, 'Paul does not play banjo');
// console.log(areYouPlayingBanjo('Ringo')); //, 'Ringo plays banjo');
// console.log(areYouPlayingBanjo('bravo')); //, 'bravo does not play banjo');

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   console.log(classPoints.length);
//   return (
//     classPoints.reduce((acc, point) => acc + point, 0) / classPoints.length <
//     yourPoints
//   );
// }
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); //, true);
// ---------------------------------

// function removeEveryOther(arr) {
//   return arr.filter((el, i) => i % 2 === 0);
//   //your code here
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// //, ['Hello','Hello Again',]);
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //,[1, 3, 5, 7, 9],);
// console.log(removeEveryOther([[1, 2]])); //, [[1, 2]]);
// console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }])); //, [['Goodbye'],]);

// --------------------------------
// function getMiddle(s) {
//   //Code goes here!
//   const arrSeparate = s.split('');
//   console.log(arrSeparate);
//   if (arrSeparate.length % 2 === 1) {
//     return arrSeparate[0];
//   } else {
//     return (
//       arrSeparate[arrSeparate.length / 2 - 1] +
//       arrSeparate[arrSeparate.length / 2]
//     );
//   }
// }

// console.log(getMiddle('')); //,"es");
// console.log(getMiddle('testing')); //,"t");
// console.log(getMiddle('middle')); //,"dd");
// console.log(getMiddle('A')); //,"A");

// -----------------------------------
const date = new Date('March 16, 2030 14:25:00');

// date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"
console.log(date.toTimeString());
