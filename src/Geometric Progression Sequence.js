// DESCRIPTION:
// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

function geometricSequenceElements(a, r, n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(a * r ** (i))
  }
  return arr.join(', ')
}