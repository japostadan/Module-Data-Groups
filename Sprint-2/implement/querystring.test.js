// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});
describe("querryString function", () => {
  it("should return empty when empty object is passed", () => {
    const input = "";
    const current = parseQueryString(input);
    const expected = {};
    expect(current).toStrictEqual(expected);
  });
  it("should return object color:blue when colour=blue is passed", () => {
    const input = "color=blue";
    const current = parseQueryString(input);
    const expected = { color: "blue" };
    expect(current).toStrictEqual(expected);
  });
  it("for multiple key and value is passed", () => {
    const input = "color=blue&sort=newest";
    const current = parseQueryString(input);
    const expected = { color: "blue", sort: "newest" };
    expect(current).toStrictEqual(expected);
  });
  it("for multiple key and and epmty querry", () => {
    const input = "&color=green&color=blue&&&sort=newest";
    const current = parseQueryString(input);
    const expected = { color: "green", color: "blue", sort: "newest" };
    expect(current).toStrictEqual(expected);
  });
});
