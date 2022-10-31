// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.




Math.round = function (number) {
    return Number(number.toFixed(0))
};

Math.ceil = function (number) {
    let res = 0
    let numStr = number.toString().split('.')
    if (Number(numStr.slice(-1)) > 0) {
        res += 1
    }
    if (numStr.length == 1) {
        return Number(numStr)
    }
    return Number(numStr.slice(0, -1)) + res

};


Math.floor = function (number) {
    let res = 0
    let numStr = number.toString().split('.')
    if (numStr.length == 1) {
        return Number(numStr)
    }
    return Number(numStr.slice(0, -1))
};