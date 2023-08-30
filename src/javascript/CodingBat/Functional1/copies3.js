"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copies3 = (strings) => {
    return strings.map((string) => string + string + string);
};
//console.log(copies3(["a", "bb", "ccc"]));
exports.default = copies3;
