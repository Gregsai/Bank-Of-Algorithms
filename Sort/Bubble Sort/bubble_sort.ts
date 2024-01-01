function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - (i + 1); j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function main(): number {
  let array: number[] = [5, 1, 4, 2, 8];
  console.log("Sorted array:\n", bubbleSort(array));
  return 0;
}

main();