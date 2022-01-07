export function sumArray(arr: number[]): number {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  }, 1);
}
