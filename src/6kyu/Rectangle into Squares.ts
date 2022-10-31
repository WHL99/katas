// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

//   You can see examples for your language in **"SAMPLE TESTS".**

const sqInRect = (l: number, w: number): null | number[] => {
  const arr = []

  if (l === w) return null

  while (w > 0 && l > 0) {
    arr.push(l > w ? w : l)
    l > w ? (l -= w) : (w -= l)
  }
  return arr
}

console.log(sqInRect(20, 14))
