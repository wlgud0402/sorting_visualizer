import { sleep } from "../helper/sleep.js";

// export async function quickSort(arr, start, end) {
//   if (start >= end) {
//     return;
//   }
//   let index = await partition(arr, start, end);

//   await Promise.all([
//     quickSort(arr, start, index - 1),
//     quickSort(arr, index + 1, end),
//   ]);
// }

// async function partition(arr, start, end) {
//   let pivotIndex = start;
//   let pivotVlaue = arr[end];
//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotVlaue) {
//       await swap(arr, i, pivotIndex);
//       pivotIndex++;
//     }
//   }
//   await swap(arr, pivotIndex, end);
//   return pivotIndex;
// }

// async function swap(arr, a, b) {
//   await sleep(100);
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }

export function quickSortIterative(arr) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  let stack = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    let end = stack.pop();
    let start = stack.pop();

    let pivotIndex = partition(arr, start, end);

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}