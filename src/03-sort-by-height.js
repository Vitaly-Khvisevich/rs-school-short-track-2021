/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = [];
  let arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arr2.push(i);
    else arr3.push(arr[i]);
  }
  arr3 = arr3.sort((a, b) => a - b);
  for (let j = 0; j < arr2.length; j++) {
    arr3.splice(arr2[j], 0, -1);
  }
  return (arr3);
}

module.exports = sortByHeight;
