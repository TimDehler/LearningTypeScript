import addStar from "../../../src/typescript/CodingBat/Functional1/addStar";

test("empty parameter array", () => {
  expect(addStar([])).toEqual([]);
});

test("value in parameter array", () => {
  expect(addStar(["a"])).toEqual(["a*"]);
});
