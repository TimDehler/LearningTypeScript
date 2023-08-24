import maxSpanMain from "../src/typescript/maxSpan";

test("empty array as parameter", () => {
  expect(maxSpanMain([])).toBe(0);
});

test("array of length 1 as parameter", () => {
  expect(maxSpanMain([1])).toBe(1);
});

test("there is no second number to calc a span", () => {
  expect(maxSpanMain([1, 2, 3, 4, 5, 6])).toBe(1);
});

test("there is one number to create a span to", () => {
  expect(maxSpanMain([1, 2, 3, 4, 5, 6, 1])).toBe(7);
});

test("there are multiple numbers which can create a span", () => {
  expect(maxSpanMain([3, 4, 3, 2, 4, 2, 4])).toBe(6);
});

test("there are multiple numbers that can create a span and multiple of the same value", () => {
  expect(maxSpanMain([1, 4, 2, 1, 4, 1, 4])).toBe(6);
});
