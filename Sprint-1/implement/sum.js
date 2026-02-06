function sum(numbers) {
  if (!Array.isArray(numbers)) return 0;

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && !Number.isNaN(numbers[i])) {
      total += numbers[i];
    }
  }

  return total;
}

module.exports = sum;
