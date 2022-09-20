"use strict";
function predictAge(...ages) {
    return Math.floor(Math.sqrt(ages.map((n) => n * n).reduce((acc, it) => acc + it)) / 2);
}
console.log(predictAge(1, 2, 3, 4, 5));
// -Take a list of ages when each of your great-grandparent died.
// -Multiply each number by itself.
// -Add them all together.
// -Take the square root of the result.
// -Divide by two.
