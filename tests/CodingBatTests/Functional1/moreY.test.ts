import moreY from "../../../src/typescript/CodingBat/Functional1/moreY";

test("empty parameter array", () => {
  expect(moreY([])).toEqual([]);
});

test("not empty parameter array", () => {
  expect(moreY(["a", "bb", "ccc"])).toEqual(["yay", "ybby", "ycccy"]);
});
