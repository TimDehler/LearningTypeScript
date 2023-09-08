"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noX = (strings) => {
    return strings.map((string) => {
        while (string.includes("x"))
            string = string.replace("x", "");
        return string;
    });
};
console.log(noX(["a", "axax", "xaxaxax"]));
exports.default = noX;
