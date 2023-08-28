import seriesUp from "../../../src/typescript/CodingBat/Arrays3/seriesUp";

test("n is zero", () => {
  expect(seriesUp(0)).toEqual([]);
});

test("n is 1", () => {
  expect(seriesUp(1)).toEqual([1]);
});

test("n is over 1", () => {
  expect(seriesUp(3)).toEqual([1, 1, 2, 1, 2, 3]);
});
