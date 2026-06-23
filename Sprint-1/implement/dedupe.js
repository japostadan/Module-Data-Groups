function dedupe(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be array");
  }
  const resultArr = [];
  const seenBuffer = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!seenBuffer[item]) {
      resultArr.push(arr[i]);
      seenBuffer[item] = true;
    }
  }

  return resultArr;
}
module.exports = dedupe;
