import no9 from "../../../src/typescript/CodingBat/Functional2/no9";

test("empty param", () => {
  expect(no9([])).toEqual([]);
});

test("no ending on 9 in param array", () => {
  expect(no9([1, 2, 3])).toEqual([1, 2, 3]);
});

test("only ending in 0 in param array", () => {
  expect(no9([-1, -2, -3])).toEqual([-1, -2, -3]);
});

test("default case", () => {
  expect(no9([1, 2, -3, 3, 19])).toEqual([1, 2, -3, 3]);
});
