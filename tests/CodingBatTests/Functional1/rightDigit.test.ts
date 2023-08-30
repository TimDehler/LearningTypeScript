import rightDigit from "../../../src/typescript/CodingBat/Functional1/rightDigit";

test("empty param array", () => {
  expect(rightDigit([])).toEqual([]);
});

test("non empty param array", () => {
  expect(rightDigit([1, 12, 123])).toEqual([1, 2, 3]);
});
