const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

describe("tally function", () => {
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  it("should return empty object when empty array is passed", () => {
    const input = [];
    const current = tally(input);
    const expected = {};
    expect(current).toStrictEqual(expected);
  });

  it("should return count 1 when array has one item", () => {
    const input = ["a"];
    const current = tally(input);
    const expected = { a: 1 };
    expect(current).toStrictEqual(expected);
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  it("should return correct count for duplicate items", () => {
    const input = ["a", "a", "a"];
    const current = tally(input);
    const expected = { a: 3 };
    expect(current).toStrictEqual(expected);
  });

  // Given a function called tally
  // When passed an array of items
  // Then it should return an object containing the count for each unique item

  it("should return correct counts for multiple unique items", () => {
    const input = ["a", "a", "b", "c"];
    const current = tally(input);
    const expected = { a: 2, b: 1, c: 1 };
    expect(current).toStrictEqual(expected);
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  it("should throw error when invalid input is passed", () => {
    const input = "abc";
    expect(() => tally(input)).toThrow();
  });
});
