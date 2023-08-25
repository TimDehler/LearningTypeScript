"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canBalance = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const total = nums.reduce((sum, num) => sum + num, 0);
        const { sumBeforeIndex, sumAfterIndex } = calculateFrontBackSumFromIndexTotal(nums, i, total);
        if (sumBeforeIndex === sumAfterIndex)
            return true;
    }
    return false;
};
const calculateFrontBackSumFromIndexTotal = (nums, index, total) => {
    let sumAfterIndex = 0;
    for (let i = index + 1; i < nums.length; i++)
        sumAfterIndex += nums[i];
    return {
        sumBeforeIndex: total - sumAfterIndex,
        sumAfterIndex: sumAfterIndex,
    };
};
exports.default = canBalance;
