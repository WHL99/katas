// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String

export const strongNumber = (num: number): string => {
  function factorial(n: number): number {
    if (n <= 0) return 1
    return n * factorial(n - 1)
  }

  return num ===
    num
      .toString()
      .split('')
      .map(Number)
      .map((ele) => {
        return factorial(ele)
      })
      .reduce((a, b) => {
        return a + b
      })
    ? 'STRONG!!!!'
    : 'Not Strong !!'
}
