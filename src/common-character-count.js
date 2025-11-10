const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // Remove line below and write your code here
  const s1Map = new Map();
  const s2Map = new Map();
  let commonChars = 0;

  for (const char of s1) {
    if (s1Map.has(char)) {
      s1Map.set(char, s1Map.get(char) + 1);
    } else {
      s1Map.set(char, 1);
    }
  }

  for (const char of s2) {
    if (s2Map.has(char)) {
      s2Map.set(char, s2Map.get(char) + 1);
    } else {
      s2Map.set(char, 1);
    }
  }

  for (const [key, value] of s1Map) {
    if (s2Map.has(key)) {
      commonChars += Math.min(value, s2Map.get(key));
    }
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount,
};
