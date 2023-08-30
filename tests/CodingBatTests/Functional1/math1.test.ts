import math1 from "../../../src/typescript/CodingBat/Functional1/math1";

test("empty parameter array", () => {
  expect(math1([])).toEqual([]);
});

test("non empty parameter array", () => {
  expect(math1([1, 2, 3])).toEqual([20, 30, 40]);
});
