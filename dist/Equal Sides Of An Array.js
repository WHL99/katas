"use strict";
function findEvenIndex(arr) {
    let left = 0;
    let right = arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < arr.length; i++) {
        right -= arr[i];
        if (right === left)
            return i;
        left += arr[i];
    }
    return -1;
}
