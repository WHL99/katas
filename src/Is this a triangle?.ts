export function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c ? (a + c > b ? (b + c > a ? true : false) : false) : false
}

isTriangle(7, 2, 2)
