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
function countCats(matrix) {
var result = 0;
even = (element) => element === '^^'; 
for (let i=0; i<matrix.length; i++)
   result+= matrix[i].some(even);
return matrix.join(',').split(',').filter(item => item === '^^').length;
}

module.exports = {
  countCats
};
