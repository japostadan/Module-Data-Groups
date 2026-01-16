// f) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }
// Explanation: Because invertedObj.key sets a property literally called "key", not the variable key.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// Explanation: The loop overwrites the property "key" each iteration, so only the last value remains.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }
// Explanation: We want the keys and values swapped so each value becomes a key, and each key becomes a value.

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs.
// Example: Object.entries({ a: 1, b: 2 }) → [["a", 1], ["b", 2]]
// It is needed to iterate over both keys and values simultaneously using for...of and destructuring.

// e) Explain why the current return value is different from the target output
// The current code uses invertedObj.key = value, which sets a property literally named "key".
// The variable key is not used, so the actual object keys are wrong and overwritten each iteration.
// The correct approach is to use computed property syntax: invertedObj[value] = key;
