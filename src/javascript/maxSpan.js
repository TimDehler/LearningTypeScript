"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testArr = [1, 4, 2, 1, 4, 1, 4];
const maxSpanMain = (arr) => {
    let spans = [];
    while (arr.length > 0) {
        let actual = arr.shift();
        let toSave = 0;
        let savedSpan = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === actual) {
                savedSpan = i + 1;
                toSave = savedSpan;
            }
            savedSpan++;
        }
        spans.push(toSave + 1);
    }
    return Math.max(...spans);
};
console.log(maxSpanMain(testArr));
exports.default = maxSpanMain;
