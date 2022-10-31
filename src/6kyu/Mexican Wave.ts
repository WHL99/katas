// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example
// wave("hello") => {"Hello", "hEllo", "heLlo", "helLo", "hellO"}

function wave(str: string): Array<string> {
  //   str = str.replace(/(^\s+)|(\s+$)/g, '')
  const strToArr = str.split('')

  const arr = []
  for (let i = 0; i < strToArr.length; i++) {
    if (str[i] === ' ') {
      continue
    }
    arr.push(
      str.substring(0, i) +
        str.substring(i, i + 1).toUpperCase() +
        str.substring(i + 1),
    )
  }
  return arr
}
