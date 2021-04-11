/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newarr = {};
  const maindom = '.ru.com.by.org';
  if (domains.length === 0) return ({});
  for (let i = 0; i < domains.length; i++) {
    const temp = domains[i].split('.');
    for (let j = 0; j < temp.length; j++) {
      if (`.${temp[j]}` in newarr) newarr[`.${temp[j]}`]++;
      else newarr[`.${temp[j]}`] = 1;
    }
  }
  let actualkey = 0;
  let valume = 0;
  const mainarr = {};
  let gatherstr = '';
  Object.entries(newarr).forEach((e) => {
    if (maindom.indexOf(e[0]) !== -1) [actualkey, valume] = e;
  });
  delete newarr[actualkey];
  mainarr[actualkey] = valume;
  gatherstr += actualkey;
  Object.entries(newarr).forEach((e) => {
    if (e[1] === valume) [actualkey, valume] = e;
  });
  delete newarr[actualkey];
  gatherstr += actualkey;
  mainarr[gatherstr] = valume;
  let br = Object.keys(newarr);
  while (br.length !== 0) {
    if (valume <= 0) break;
    const actualkeyold = actualkey;
    let x = actualkey;
    let y = valume;
    const valumetemp = valume;
    Object.entries(newarr).forEach((e) => {
      if (e[1] === valumetemp) [x, y] = e;
    });
    actualkey = x;
    valume = y;
    if (valume === 1) {
      delete newarr[actualkey];
      const tempstr = `${gatherstr}${actualkey}`;
      mainarr[tempstr] = valume;
    } else if (actualkeyold !== actualkey) {
      delete newarr[actualkey];
      gatherstr += actualkey;
      mainarr[gatherstr] = valume;
    } else valume--;
    br = Object.keys(newarr);
  }
  return (mainarr);
}

module.exports = getDNSStats;
