"use strict";
var testArr = [1, 4, 2, 1, 4, 1, 4];
var maxSpanMain = function (arr) {
    var spans = [];
    while (arr.length > 0) {
        var actual = arr.shift();
        var toSave = 0;
        var savedSpan = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === actual) {
                savedSpan = i + 1;
                toSave = savedSpan;
            }
            savedSpan++;
        }
        spans.push(toSave + 1);
    }
    return Math.max.apply(Math, spans);
};
console.log(maxSpanMain(testArr));
