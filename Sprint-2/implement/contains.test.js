const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
// test.todo("contains on empty object returns false");
describe("Check if object contains property", () => {
  it("should return false if object is empty", () => {
    const current = contains({}, "");
    const expected = false;
    expect(current).toBe(expected);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  it("should return true if object contain property", () => {
    const current = contains({ a: 1, b: 2 }, "a");
    const expected = true;
    expect(current).toBe(expected);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  it("should return false if object does not contain property", () => {
    const current = contains({ a: 1, b: 2 }, "c");
    const expected = false;
    expect(current).toBe(expected);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  it("should throw error for invalid object", () => {
    expect(() => contains("", "c")).toThrow("Invalid object parameter");
  });
});
