function palindrome(string) {
  let reg = /\W+/g
  let newStr = string.replace(reg, '')
  let halfLength = Math.floor(newStr.length / 2)

  if (string.length === 1) return true
  if (newStr.split('').slice(0, halfLength).join('').toLowerCase() === newStr.split('').slice(-halfLength).reverse().join('').toLowerCase()) {
    return true
  } else {
    return false
  }
}
