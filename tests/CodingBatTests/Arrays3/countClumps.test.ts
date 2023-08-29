import countClumps from "../../../src/typescript/CodingBat/Arrays3/countClumps";

test("nums is empty", () => {
  expect(countClumps([])).toBe(0);
});

test("nums is one", () => {
  expect(countClumps([1])).toBe(0);
});

test("nums is larger than one, one clump", () => {
  expect(countClumps([1, 1, 1, 1])).toBe(1);
});

test("nums is larger than one multiple clumps", () => {
  expect(countClumps([1, 2, 2, 3, 4, 4])).toBe(2);
});

test("nums is larger than one multiple clumps of same value", () => {
  expect(countClumps([1, 1, 2, 1, 1, 4])).toBe(2);
});
