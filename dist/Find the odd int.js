"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
const findOdd = (xs) => {
    let count = 0;
    if (xs.length === 0)
        return 0;
    for (let i = 0; i < xs.length; i++) {
        for (let j = 0; j < xs.length; j++) {
            if (xs[i] === xs[j]) {
                count++;
            }
        }
        if (count % 2 === 1)
            return xs[i];
    }
    throw new Error('found nothing');
};
exports.findOdd = findOdd;
