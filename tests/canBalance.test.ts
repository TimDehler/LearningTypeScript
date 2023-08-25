import canBalance from "../src/typescript/canBalance";

// Rule: The Array cant be empty

test("canBalance", () => {
  expect(canBalance([1, 2, 2, 1])).toBeTruthy();
});

test("can not Balance", () => {
  expect(canBalance([1, 2, 2, 2])).toBeFalsy();
});

test("only one value", () => {
  expect(canBalance([1])).toBeFalsy();
});

test("only two values", () => {
  expect(canBalance([2, 2])).toBeTruthy();
});
