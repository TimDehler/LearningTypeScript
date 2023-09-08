import canBalance from "../../../src/typescript/CodingBat/Arrays3/canBalance";

// Rule: The Array cant be empty

// should be truthy testing script
test("canBalance", () => {
  expect(canBalance([1, 2, 2, 1])).toBeFalsy();
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
