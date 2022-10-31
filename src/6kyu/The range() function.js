function range(start, stop, step) {
    const resultArr = []
    if (arguments.length === 3 && start < stop && step != 0) {
        for (let i = start; i < stop; i += step) {
            resultArr.push(i)
        }
        return resultArr
    }
    if (arguments.length === 3 && start < stop && step === 0) {
        return Array(stop - start).fill(start)
    }
    if (arguments.length === 2 && start < stop) {
        for (let i = start; i < stop; i++) {
            resultArr.push(i)
        }
        return resultArr
    }
    if ((arguments.length === 1 && start === 0) || (arguments.length === 2 && start > stop) || (start === stop) || (start < 0)) {

        return resultArr
    }
    if (arguments.length === 1 && start > 0) {
        for (let i = 0; i < start; i++) {
            resultArr.push(i)
        }
        return resultArr
    }
}
