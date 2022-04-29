const { NotImplementedError } = require('../extensions/index.js');

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
  let result = 0;
  let j = 0;
  if (s1.length === 0 || s2.length === 0) {
      return 0;
  }
  for (let i = 0; i < s1.length; i++) {
      if (s1.split('').sort().includes(s2.split('').sort()[i], j)) {
      result += 1;
      j++;
      }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
