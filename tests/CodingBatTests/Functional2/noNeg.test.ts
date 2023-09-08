import noNeg from "../../../src/typescript/CodingBat/Functional2/noNeg";

test("empty param", () => {
  expect(noNeg([])).toEqual([]);
});

test("no negatives in param array", () => {
  expect(noNeg([1, 2, 3])).toEqual([1, 2, 3]);
});

test("only negatives in param array", () => {
  expect(noNeg([-1, -2, -3])).toEqual([]);
});

test("default case", () => {
  expect(noNeg([1, 2, -3, 3, -19])).toEqual([1, 2, 3]);
});
