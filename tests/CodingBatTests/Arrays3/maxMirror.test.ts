import maxMirror from "../../../src/typescript/CodingBat/Arrays3/maxMirror";

test("nums is length zero", () => {
  expect(maxMirror([])).toBe(0);
});

test("nums is length 1", () => {
  expect(maxMirror([1])).toBe(1);
});

test("nums length is greater than 1", () => {
  expect(maxMirror([1, 2, 1, 4])).toBe(3);
});

test("testcase with huge array with multiple sequenzes", () => {
  expect(maxMirror([1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25])).toBe(
    4
  );
});

test("multiple same numbers", () => {
  expect(maxMirror([1, 1, 1])).toBe(3);
});
