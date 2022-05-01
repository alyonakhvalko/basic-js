const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) { /*Для перебора многомерного массива необходимо 
использовать вложенный цикл. 
Первый цикл (i) будет использоваться для доступа к элементам внешнего массива, 
а второй (j) – для доступа к элементам вложенных массивов.*/
  let result = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == "^^") {
        result++;
      }
    }
  }
  return result;
};

module.exports = {
  countCats
};


