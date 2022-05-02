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

//удаляет наименьшее число в массиве, но не возвращает наибольшее из набора
function deleteDigit(n) {
  let arr = n.toString().split('').map(i => +i);
  arr = arr.slice(); //копировать arr
  arr.splice( arr.indexOf(Math.min.apply(null, arr)),1)
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
