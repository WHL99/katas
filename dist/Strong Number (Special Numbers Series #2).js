"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strongNumber = void 0;
const strongNumber = (num) => {
    function factorial(n) {
        if (n <= 0)
            return 1;
        return n * factorial(n - 1);
    }
    return num ===
        num
            .toString()
            .split('')
            .map(Number)
            .map((ele) => {
            return factorial(ele);
        })
            .reduce((a, b) => {
            return a + b;
        })
        ? 'STRONG!!!!'
        : 'Not Strong !!';
};
exports.strongNumber = strongNumber;
