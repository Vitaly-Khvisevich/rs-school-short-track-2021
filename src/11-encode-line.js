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
  const newstr = str;
  let obj = {};
  let strans = '';
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[i] in obj) obj[newstr[i]]++;
    else {
      let temp = '';
      Object.entries(obj).forEach((e) => { temp += `${e[1] <= 1 ? '' : e[1]}${e[0]}`; });
      strans += `${temp}`;
      obj = {};
      obj[newstr[i]] = 1;
    }
  }
  Object.entries(obj).forEach((e) => { strans += `${e[1] <= 1 ? '' : e[1]}${e[0]}`; });
  return (strans);
}

module.exports = encodeLine;
