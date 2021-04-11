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
function getSumOfDigits(n) {
  let s = 0;
  const m = (String(n)).split('');
  function getsumm(t) {
    const digit = (String(t)).split('');
    let gs = 0;
    for (let j = 0; j < digit.length; j++) {
      gs += Number(digit[j]);
    }
    return (gs);
  }

  for (let i = 0; i < m.length; i++) {
    s += Number(m[i]);
  }
  while ((String(s)).length >= 2) {
    s = getsumm(s);
  }

  return (s);
}

module.exports = getSumOfDigits;
