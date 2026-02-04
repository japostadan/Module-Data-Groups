function createLookup(array) {
  const resultObject = {};
  for (const index in array) {
    const [key, value] = array[index];
    resultObject[key] = value;
  }
  return resultObject;
}

module.exports = createLookup;
