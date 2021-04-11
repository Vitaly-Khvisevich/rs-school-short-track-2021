/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArray = names.map((arr) => arr.slice());
  const obj = {};
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] in obj) {
      obj[newArray[i]]++;
      newArray[i] = `${newArray[i]}(${obj[newArray[i]]})`;
      obj[newArray[i]] = 0;
    } else {
      obj[newArray[i]] = 0;
    }
  }
  return (newArray);
}

module.exports = renameFiles;
