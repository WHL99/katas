"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTriangle = void 0;
function isTriangle(a, b, c) {
    return a + b > c ? (a + c > b ? (b + c > a ? true : false) : false) : false;
}
exports.isTriangle = isTriangle;
isTriangle(7, 2, 2);
