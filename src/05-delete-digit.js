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
  const digit = String(n);
  let fff = 0;
  for (let i = 0; i < digit.length; i++) {
    const x = Number(digit.slice(0, i) + digit.slice(i + 1));
    if (x > fff) fff = x;
  }
  return (fff);
}

module.exports = deleteDigit;
