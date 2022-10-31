export function multiplicationTable(size: number): number[][] {
  const outerArr = []
  for (let i = 1; i <= size; i++) {
    const arr = []
    for (let j = 1; j <= size; j++) {
      arr.push(i * j)
    }
    outerArr.push(arr)
  }
  return outerArr
}
