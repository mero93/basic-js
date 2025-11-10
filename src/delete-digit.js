const { NotImplementedError } = require('../lib');

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
  // Remove line below and write your code here
  const digitArray = n.toString().split('');
  let max = 0;
  for (let i = 0; i < digitArray.length; i++) {
    const newNumber = digitArray.filter((d) => d !== digitArray[i]).join('');

    if (Number(newNumber) > max) {
      max = Number(newNumber);
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
