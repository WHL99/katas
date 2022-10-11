export const findOdd = (xs: number[]): number => {
  let count = 0
  if (xs.length === 0) return 0

  for (let i = 0; i < xs.length; i++) {
    for (let j = 0; j < xs.length; j++) {
      if (xs[i] === xs[j]) {
        count++
      }
    }
    if (count % 2 === 1) return xs[i]
  }
  throw new Error('found nothing')
}
