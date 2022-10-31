export function estSubsets<T>(list: T[]): number {
  const uniq: number = [...new Set(list)].length
  return 2 ** uniq - 1
}
