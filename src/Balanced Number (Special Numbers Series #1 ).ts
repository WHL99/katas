// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.

export function balancedNum(number: number): string {
  let digitalOfNumber: number = number.toString().length
  let leftSum = 0
  let rightSum = 0
  if (digitalOfNumber === 1 || digitalOfNumber === 2) return 'Balanced'
  for (let i = 0; i < Math.floor(digitalOfNumber / 2) - 1; i++) {
    leftSum += Number(number.toString()[i])
    console.log(leftSum)
    console.log('左邊的i', i)
  }
  for (let i = Math.floor(digitalOfNumber / 2) + 1; i < digitalOfNumber; i++) {
    rightSum += Number(number.toString()[i])
    console.log(rightSum)
    console.log('右邊的i', i)
  }
  return leftSum === rightSum ? 'Balanced' : 'Not Balanced'
}

balancedNum(121)
