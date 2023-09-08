import {
  StringBuilderImpl,
  StringBuilder,
} from "../../../src/typescript/DesignPattern/Singleton/StringBuilder/StringBuilder";

let stringbuilder: StringBuilder;

beforeEach(() => {
  stringbuilder = StringBuilderImpl.getInstance();
});

afterEach(() => {
  stringbuilder.setBuildString("");
});

test("testing setBuildString method of Stringbuilder", () => {
  stringbuilder.setBuildString("Hallo");
  expect(stringbuilder.getBuildString()).toBe("Hallo");
});

test("testing addToString ", () => {
  stringbuilder.addToString("!");
  expect(stringbuilder.getBuildString()).toBe("!");
});

test("checking for same instance on singleton", () => {
  stringbuilder.setBuildString("This is instance 1");
  const instance: StringBuilder = StringBuilderImpl.getInstance();
  expect(stringbuilder.getBuildString()).toBe(instance.getBuildString());
});
