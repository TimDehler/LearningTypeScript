import doubling from "../../../src/typescript/CodingBat/Functional1/doubling";

test("nums is empty", () => {
  expect(doubling([])).toEqual([]);
});

test("nums has one value", () => {
  expect(doubling([1])).toEqual([2]);
});

test("nums has multiple values", () => {
  expect(doubling([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test("nums holds negative number", () => {
  expect(doubling([-1])).toEqual([-2]);
});
