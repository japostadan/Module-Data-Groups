const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
describe("Convert two dimentional array into an object", () => {
  it("should return empty object when empty array is passed", () => {
    const input = [];
    const current = createLookup(input);
    const expected = {};
    expect(current).toStrictEqual(expected);
  });
  it("should return empty object when empty array is passed", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const current = createLookup(input);
    const expected = {
      US: "USD",
      CA: "CAD",
    };
    expect(current).toStrictEqual(expected);
  });
});
