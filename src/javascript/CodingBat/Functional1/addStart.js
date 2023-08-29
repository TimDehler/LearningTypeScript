"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addStar = (strings) => {
    return strings.map((string) => (string += "*"));
};
console.log(addStar(["a", "bb", "ccc"]));
exports.default = addStar;
