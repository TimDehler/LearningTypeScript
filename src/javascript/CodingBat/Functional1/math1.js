"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math1 = (nums) => {
    return nums.map((num) => (1 + num) * 10);
};
console.log(math1([1, 2, 3]));
exports.default = math1;
