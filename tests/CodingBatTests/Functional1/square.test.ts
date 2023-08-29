import square from "../../../src/typescript/CodingBat/Functional1/square";

test("nums is empty", () => {
  expect(square([])).toEqual([]);
});

test("nums has one value", () => {
  expect(square([1])).toEqual([1]);
});

test("nums has multiple values", () => {
  expect(square([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});

test("nums holds negative number", () => {
  expect(square([-1])).toEqual([1]);
});
