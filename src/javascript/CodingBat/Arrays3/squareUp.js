"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squareUp = (n) => {
    let retArr = [];
    for (let i = 0; i < n; i++) {
        retArr = [...retArr, ...createNthPattern(i, n)];
    }
    return retArr;
};
const createNthPattern = (iter, numCount) => {
    let pattern = [];
    for (let i = 0; i < numCount; i++) {
        if (i > iter) {
            pattern.push(0);
        }
        else {
            pattern.push(i + 1);
        }
    }
    return reverseArray(pattern);
};
const reverseArray = (pattern) => {
    let reversedArray = [];
    for (let i = pattern.length - 1; i >= 0; i--)
        reversedArray.push(pattern[i]);
    return reversedArray;
};
//console.log(`Square up: ${squareUp(4)}`);
exports.default = squareUp;
