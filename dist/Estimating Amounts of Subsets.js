"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estSubsets = void 0;
function estSubsets(list) {
    const uniq = [...new Set(list)].length;
    return 2 ** uniq - 1;
}
exports.estSubsets = estSubsets;
