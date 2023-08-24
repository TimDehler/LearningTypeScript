"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fix34 = (nums) => {
    let outputArray = [...nums];
    for (let i = 0; i < outputArray.length; i++) {
        if (outputArray[i] === 3) {
            executeLogic(i, nums);
        }
    }
    return nums;
};
const executeLogic = (indexOf3, numsArray) => {
    numsArray = swtichNumbersByIndexes(indexOf3 + 1, searchFor4WithNoPre3(numsArray), numsArray);
};
const searchFor4WithNoPre3 = (numsArray) => {
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] === 4 && numsArray[i - 1] !== 3)
            return i;
    }
    return 0;
};
const findIndexOfNext4AfterParamIndex = (startingIndex, numsArray) => {
    for (let i = startingIndex; i < numsArray.length; i++) {
        if (numsArray[i] === 4)
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
console.log(fix34([1, 3, 1, 4, 4, 3, 1]));
//console.log(fix34([3, 2, 2, 4]));
//console.log(findIndexOfNext4AfterParamIndex(1, [0, 1, 0, 4, 4]));
exports.default = fix34;
