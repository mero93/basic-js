const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // Remove line below and write your code here
  if (!str) {
    return '';
  }

  let encoded = '';
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    let count = 1;
    let j = i + 1;
    while (j < str.length && str[j] === char) {
      count++;
      j++;
    }
    encoded += (count > 1 ? count : '') + char;
    i = j;
  }

  return encoded;
}

module.exports = {
  encodeLine,
};
