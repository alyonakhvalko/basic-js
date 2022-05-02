const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {

let digits = String(n).split("");
  let max = 0;
  for (let i = 0; i < String(n).length; i++) {
    let numbers = String(n).split("");
    digits.splice(i, 1);
    if (Number(digits.join("")) > max) {
      max = Number(digits.join(""));
      digits = numbers;
    }
      digits = numbers;
  }
    return max;




//удаляет наименьшее число в массиве, но не возвращает наибольшее из набора
  /*let arr = n.toString().split('').map(i => +i);
  arr = arr.slice(); //копировать arr
  arr.splice( arr.indexOf(Math.min.apply(null, arr)),1)
  return +arr.join('');*/
}



module.exports = {
  deleteDigit
};
