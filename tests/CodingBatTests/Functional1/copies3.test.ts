import copies3 from "../../../src/typescript/CodingBat/Functional1/copies3";

test("empty parameter array", () => {
  expect(copies3([])).toEqual([]);
});

test("empty parameter array", () => {
  expect(copies3(["a", "bb", "ccc"])).toEqual(["aaa", "bbbbbb", "ccccccccc"]);
});
