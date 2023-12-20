const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrayOfDigits = Array.from(String(n), Number)
  let sumOfNumbers = arrayOfDigits.reduce((acc, number) => acc + number)
  while (Math.floor(sumOfNumbers / 10) >=1 )
  {arrayOfDigits = Array.from(String(sumOfNumbers), Number)
  sumOfNumbers = arrayOfDigits.reduce((acc1, number1) => acc1 + number1);};
  return sumOfNumbers;
}

module.exports = {
  getSumOfDigits
};
