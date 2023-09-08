"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noNeg = (nums) => {
    return nums.filter((value) => value > 0);
};
console.log(noNeg([1, 2, -3, 3, -19]));
exports.default = noNeg;
