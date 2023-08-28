import linearIn from "../../../src/typescript/CodingBat/Arrays3/linearIn";

test("no doubles, should return true", () => {
  expect(linearIn([1, 2, 4, 6], [2, 4])).toBeTruthy();
});

test("no doubles, should return false", () => {
  expect(linearIn([1, 2, 4, 6], [3, 5])).toBeFalsy();
});

test("empty outer Array", () => {
  expect(linearIn([], [2, 4])).toBeFalsy();
});

test("empty inner Array", () => {
  expect(linearIn([1, 2, 4, 6], [])).toBeTruthy();
});

test("negative and doubled numbers", () => {
  expect(linearIn([-1, 3, 3, 3], [-1, 3])).toBeTruthy();
});
