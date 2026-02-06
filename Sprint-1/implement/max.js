function findMax(arr) {
  let element = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (element < arr[i]) element = arr[i];
  }
  return element;
}

module.exports = findMax;
