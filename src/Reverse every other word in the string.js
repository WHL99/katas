function reverse(str) {
    let strArr = str.split(' ')
    let result = strArr.map((ele, i) => (i % 2 === 0) ? ele : ele.split('').reverse().join(''))
    return str == false ? '' : result.join(' ')
}