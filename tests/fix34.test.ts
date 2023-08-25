import fix34 from "../src/typescript/fix34";

/**
 *  The array contains the same number of 3's and 4's,
 *  every 3 has a number after it that is not a 3,
 *  and a 3 appears in the array before any 4.
 */

test("empty array as param", () => {
  expect(fix34([])).toEqual([]);
});

test("no three or four present", () => {
  expect(fix34([1, 2])).toEqual([1, 2]);
});

test("one pair of three and four | four is after three", () => {
  expect(fix34([1, 3, 2, 4])).toEqual([1, 3, 4, 2]);
});

test("multiple pairs of three and four | fours are all past threes", () => {
  expect(fix34([1, 3, 2, 3, 2, 3, 2, 4, 4, 4])).toEqual([
    1, 3, 4, 3, 4, 3, 4, 2, 2, 2,
  ]);
});

test("multiple pairs of three and four | fours can be in front of three", () => {
  expect(fix34([1, 3, 1, 4, 4, 3, 1])).toEqual([1, 3, 4, 1, 1, 3, 4]);
});

test("has ordered pair", () => {
  expect(fix34([1, 3, 4, 1, 3, 2, 4])).toEqual([1, 3, 4, 1, 3, 4, 2]);
});
