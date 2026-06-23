const invert = require("./invert.js");

describe("invert function", () => {
  it("should invert a single key-value pair", () => {
    const input = { a: 1 };
    const current = invert(input);
    const expected = { 1: "a" };
    expect(current).toStrictEqual(expected);
  });

  it("should invert multiple key-value pairs", () => {
    const input = { a: 1, b: 2 };
    const current = invert(input);
    const expected = { 1: "a", 2: "b" };
    expect(current).toStrictEqual(expected);
  });

  it("should handle numeric string values", () => {
    const input = { x: "10", y: "20" };
    const current = invert(input);
    const expected = { 10: "x", 20: "y" };
    expect(current).toStrictEqual(expected);
  });

  it("should handle empty object", () => {
    const input = {};
    const current = invert(input);
    const expected = {};
    expect(current).toStrictEqual(expected);
  });
});
