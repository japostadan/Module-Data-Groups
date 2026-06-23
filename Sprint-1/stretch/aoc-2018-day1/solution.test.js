const { calculateFreq } = require("./solution");

describe("valid data", () => {
  test("sums valid signed numbers", () => {
    const input = `
      -10
      +5
      +3
      -2
    `;
    expect(calculateFreq(input)).toBe(-4);
  });
  test("ignores empty lines", () => {
    const input = `
      +10

      -5
    `;
    expect(calculateFreq(input)).toBe(5);
  });
});
