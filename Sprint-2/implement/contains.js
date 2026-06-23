function contains(obj, key) {
  if (typeof obj !== "object" || obj === null) {
    throw new TypeError("Invalid object parameter");
  }

  return key in obj;
}

module.exports = contains;
