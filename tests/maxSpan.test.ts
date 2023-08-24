import maxSpanMain from "../src/typescript/maxSpan";

test("balbal1", () => {
  expect(maxSpanMain([1, 4, 2, 1, 4, 1, 4])).toBe(6);
});
