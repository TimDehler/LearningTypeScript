"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = require("../StringBuilder/StringBuilder");
const s1 = StringBuilder_1.StringBuilderImpl.getInstance();
s1.setBuildString("Hallo Tim");
console.log(s1.getBuildString());
s1.addToString("!");
console.log(s1.getBuildString());
