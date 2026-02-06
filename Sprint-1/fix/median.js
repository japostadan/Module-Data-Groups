// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const sortedNum = [];

  for (let i = 0; i < list.length; i++) {
    const listValue = list[i];
    if (typeof listValue === "number" && Number.isFinite(listValue)) {
      sortedNum.push(listValue);
    }
  }

  sortedNum.sort((a, b) => a - b);

  const len = sortedNum.length;
  const middleIndex = Math.floor(len / 2);

  if (len === 0) return null;
  if (len % 2 !== 0) {
    return sortedNum[middleIndex];
  }

  return (sortedNum[middleIndex - 1] + sortedNum[middleIndex]) / 2;
}

module.exports = calculateMedian;
