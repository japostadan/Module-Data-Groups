const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
describe("Given an array remove duplicates", () => {
  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [], expected: [] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  ].forEach(({ input, expected }) =>
    it(`returns the same array value for the same [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );

  [
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
  ].forEach(({ input, expected }) =>
    it(`returns the correct with no duplicates [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});

describe("dedupe - invalid input", () => {
  [null, undefined, 123, "string", {}, true].forEach((input) =>
    it(`throws TypeError for ${input}`, () =>
      expect(() => dedupe(input)).toThrow(TypeError))
  );
});
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
