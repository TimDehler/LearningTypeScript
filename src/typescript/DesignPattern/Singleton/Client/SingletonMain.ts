import {
  StringBuilder,
  StringBuilderImpl,
} from "../StringBuilder/StringBuilder";

const s1: StringBuilder = StringBuilderImpl.getInstance();

s1.setBuildString("Hallo Tim");
console.log(s1.getBuildString());

s1.addToString("!");
console.log(s1.getBuildString());
