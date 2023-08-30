"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxMirror = (nums) => {
    let maxLengthSequenz = 0;
    createSequenzes(nums).forEach((sequenz) => {
        if (searchForReoccurringSequenz(nums, sequenz)) {
            if (sequenz.length > maxLengthSequenz)
                maxLengthSequenz = sequenz.length;
        }
    });
    return maxLengthSequenz;
};
const mariosSequenzes = (nums) => {
    return [
        ...createSubSequenz([...nums]),
        ...createSubSequenz([...nums.reverse()]),
    ];
};
const createSubSequenz = (nums) => {
    let sequenzes = [];
    while (nums.length !== 0) {
        sequenzes.push([...nums]);
        nums.shift();
    }
    return sequenzes;
};
const createSequenzes = (nums) => {
    let sequenzes = [];
    let done = false;
    let startIndex = 0;
    let endIndex = 1;
    while (!done) {
        let temp = nums.slice(startIndex, endIndex);
        sequenzes.push(temp);
        endIndex += 1;
        if (endIndex === nums.length + 1) {
            startIndex += 1;
            endIndex = startIndex + 1;
        }
        if (startIndex === nums.length) {
            done = true;
        }
    }
    //sequenzes.forEach((sequenz) => console.log(sequenz));
    return sequenzes;
};
const searchForReoccurringSequenz = (nums, sequenzToSearchFor) => {
    return nums.join(",").includes(sequenzToSearchFor.reverse().join(","));
};
//console.log(maxMirror([1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25]));
mariosSequenzes([1, 2, 3, 4, 5, 6]).forEach((sequenz) => console.log(sequenz));
exports.default = maxMirror;
