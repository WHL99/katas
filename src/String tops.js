function tops(msg) {
    const msgArr = msg.split('')
    const resultArr = []
    for (let i = 1, n = 1; i < msgArr.length; i += 1 + 4 * n++) {
        resultArr.push(msgArr[i])
    }
    return resultArr.reverse().join('')
}