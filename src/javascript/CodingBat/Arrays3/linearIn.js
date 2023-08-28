"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearIn = (outer, inner) => {
    for (let i = 0; i < inner.length; i++) {
        if (outer.find((el) => el === inner[i]))
            continue;
        else
            return false;
    }
    return true;
};
//console.log(linearIn([1, 2, 3, 4], [2, 4]));
exports.default = linearIn;
