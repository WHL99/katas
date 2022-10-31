function solution(string) {
    let reg = /([A-Z])/g
    return string.replace(reg, ' $1').trim()
}