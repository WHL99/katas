function solution(roman) {
    const convertRoman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let romanToArr = roman.split('')
    let allSum = 0
    let shouldBeMinus = 0
    for (let i = 0; i < romanToArr.length; i++) {
        allSum += convertRoman[romanToArr[i]]
        if (convertRoman[romanToArr[i]] < convertRoman[romanToArr[i + 1]]) {
            shouldBeMinus += convertRoman[romanToArr[i]]
        }
    }
    return allSum - 2 * shouldBeMinus
}