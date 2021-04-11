/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArray = matrix.map((arr) => arr.slice());
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      if (newArray[i][j] === true) {
        if (j - 1 >= 0) {
          if (newArray[i][j - 1] === false) newArray[i][j - 1] = 1;
          else if (Number.isInteger(newArray[i][j - 1])) newArray[i][j - 1]++;
        }
        if (i + 1 < newArray.length && j - 1 >= 0) {
          if (newArray[i + 1][j - 1] === false) newArray[i + 1][j - 1] = 1;
          else if (Number.isInteger(newArray[i + 1][j - 1])) newArray[i + 1][j - 1]++;
        }
        if (i + 1 < newArray.length) {
          if (newArray[i + 1][j] === false) newArray[i + 1][j] = 1;
          else if (Number.isInteger(newArray[i + 1][j])) newArray[i + 1][j]++;
        }
        if (i + 1 < newArray.length && j + 1 < newArray[i].length) {
          if (newArray[i + 1][j + 1] === false) newArray[i + 1][j + 1] = 1;
          else if (Number.isInteger(newArray[i + 1][j - 1])) newArray[i + 1][j + 1]++;
        }
        if (j + 1 < newArray[i].length) {
          if (newArray[i][j + 1] === false) newArray[i][j + 1] = 1;
          else if (Number.isInteger(newArray[i + 1][j - 1])) newArray[i][j + 1]++;
        }
        if (i - 1 >= 0 && j + 1 < newArray[i].length) {
          if (newArray[i - 1][j + 1] === false) newArray[i - 1][j + 1] = 1;
          else if (Number.isInteger(newArray[i + 1][j - 1])) newArray[i - 1][j + 1]++;
        }
        if (i - 1 >= 0) {
          if (newArray[i - 1][j] === false) newArray[i - 1][j] = 1;
          else if (Number.isInteger(newArray[i + 1][j - 1])) newArray[i - 1][j]++;
        }
        if (i - 1 >= 0 && j - 1 >= 0) {
          if (newArray[i - 1][j - 1] === false) newArray[i - 1][j - 1] = 1;
          else if (Number.isInteger(newArray[i - 1][j - 1])) newArray[i - 1][j - 1]++;
        }
      }
    }
  }
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      if (newArray[i][j] === true) newArray[i][j] = 1;
      else if (newArray[i][j] === false) newArray[i][j] = 0;
    }
  }
  return (newArray);
}

module.exports = minesweeper;
