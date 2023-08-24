"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxSpanMain = (arr) => {
    return arr.length ? executeLogic(arr) : 0;
};
const executeLogic = (arr) => {
    let spans = [];
    while (arr.length > 0) {
        const actual = arr.shift();
        spans.push(calculateSpanForActual(actual, arr) + 1);
    }
    return Math.max(...spans);
};
const calculateSpanForActual = (actual, arr) => {
    let maxSpanForActual = 0;
    let savedSpan = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === actual) {
            savedSpan = i + 1;
            if (maxSpanForActual < savedSpan)
                maxSpanForActual = savedSpan;
        }
        savedSpan++;
    }
    return maxSpanForActual;
};
//console.log(maxSpanMain([1, 4, 2, 1, 4, 1, 4]));
exports.default = maxSpanMain;
