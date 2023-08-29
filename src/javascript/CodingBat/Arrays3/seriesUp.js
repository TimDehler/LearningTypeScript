"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seriesUp = (n) => {
    let x = [];
    for (let i = 1; i <= n; i++)
        x = [...x, ...createSequenze(i)];
    return x;
};
const createSequenze = (max) => {
    let arr = [];
    for (let i = 0; i < max; i++) {
        arr.push(i + 1);
    }
    return arr;
};
exports.default = seriesUp;
