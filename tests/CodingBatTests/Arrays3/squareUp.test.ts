import squareUp from "../../../src/typescript/CodingBat/Arrays3/squareUp";

test("n is zero", () => {
  expect(squareUp(0)).toEqual([]);
});

test("n is one", () => {
  expect(squareUp(1)).toEqual([1]);
});

test("n is over 1", () => {
  expect(squareUp(3)).toEqual([0, 0, 1, 0, 2, 1, 3, 2, 1]);
});
