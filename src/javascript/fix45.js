"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fix45 = (nums) => {
    let referenceArray = [...nums];
    for (let i = 0; i < referenceArray.length; i++) {
        if (referenceArray[i] === 4) {
            executeLogic(i, nums);
        }
    }
    return nums;
};
const executeLogic = (indexOf4, numsArray) => {
    numsArray = swtichNumbersByIndexes(indexOf4 + 1, searchFor5WithNoPre4(numsArray), numsArray);
};
const searchFor5WithNoPre4 = (numsArray) => {
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] === 5 && numsArray[i - 1] !== 4)
            return i;
    }
    return 0;
};
const swtichNumbersByIndexes = (index1, index2, numsArray) => {
    const value1 = numsArray[index1];
    numsArray[index1] = numsArray[index2];
    numsArray[index2] = value1;
    return numsArray;
};
console.log(fix45([1, 4, 1, 5, 5, 4, 1]));
exports.default = fix45;
