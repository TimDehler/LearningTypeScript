"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rightDigit = (nums) => {
    return nums.map((num) => num % 10);
};
//console.log(rightDigit([1, 12, 123]));
exports.default = rightDigit;
