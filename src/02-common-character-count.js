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
  const s1split = s1.split('');
  const s2split = s2.split('');
  let summ = 0;
  for (let i = 0; i < s1split.length; i++) {
    for (let j = 0; j < s2split.length; j++) {
      if (s1split[i] === s2split[j]) {
        summ++;
        s2split[j] = 0;
        break;
      }
    }
  }
  return (summ);
}

module.exports = getCommonCharacterCount;
