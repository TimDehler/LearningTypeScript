"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doubling = (nums) => {
    return nums.map((number) => number * 2);
};
console.log(doubling([1, 2, 3, 4]));
exports.default = doubling;
