import fix45 from "../src/typescript/fix45";
44;
test("empty array as param", () => {
  expect(fix45([])).toEqual([]);
});

test("no three or four present", () => {
  expect(fix45([1, 2])).toEqual([1, 2]);
});

test("one pair of three and four | four is after three", () => {
  expect(fix45([1, 4, 2, 5])).toEqual([1, 4, 5, 2]);
});

test("multiple pairs of three and four | fours are all past threes", () => {
  expect(fix45([1, 4, 2, 4, 2, 4, 2, 5, 5, 5])).toEqual([
    1, 4, 5, 4, 5, 4, 5, 2, 2, 2,
  ]);
});

test("multiple pairs of three and four | fours can be in front of three", () => {
  expect(fix45([1, 4, 1, 5, 5, 4, 1])).toEqual([1, 4, 5, 1, 1, 4, 5]);
});

test("has ordered pair", () => {
  expect(fix45([1, 4, 5, 1, 4, 2, 5])).toEqual([1, 4, 5, 1, 4, 5, 2]);
});
