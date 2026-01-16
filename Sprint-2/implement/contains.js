function contains(obj, key) {
  if (typeof (obj !== "obj")) throw new TypeError("Invalid object parameter");

  for (prop in obj) {
    prop = key;
    if (obj.hasOwnProperty(prop)) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
