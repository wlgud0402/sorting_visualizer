// import { sleep } from "../helper/sleep.js";

// export function quickSortIterative(arr) {
//   let stack = [];

//   // Adding the entire initial array as an "unsorted subarray"
//   stack.push(0);
//   stack.push(arr.length - 1);

//   // There isn't an explicit peek() function
//   // The loop repeats as long as we have unsorted subarrays
//   while (stack[stack.length - 1] >= 0) {
//     // Extracting the top unsorted subarray
//     let end = stack.pop();
//     let start = stack.pop();

//     let pivotIndex = partition(arr, start, end);

//     // If there are unsorted elements to the "left" of the pivot,
//     // we add that subarray to the stack so we can sort it later
//     if (pivotIndex - 1 > start) {
//       stack.push(start);
//       stack.push(pivotIndex - 1);
//     }

//     // If there are unsorted elements to the "right" of the pivot,
//     // we add that subarray to the stack so we can sort it later
//     if (pivotIndex + 1 < end) {
//       stack.push(pivotIndex + 1);
//       stack.push(end);
//     }
//   }
// }

// function partition(arr, start, end) {
//   // Taking the last element as the pivot
//   const pivotValue = arr[end];
//   let pivotIndex = start;
//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotValue) {
//       // Swapping elements
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       // Moving to next element
//       pivotIndex++;
//     }
//   }

//   // Putting the pivot value in the middle
//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//   return pivotIndex;
// }
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// export function getQuickSort(array) {
//   let animations = [];
//   let stack = array.slice();
//   quickSort(stack, animations);
//   array = stack;
//   return [animations, array];
// }

// function quickSort(array, animations) {
//   if (array.length < 2) {
//     return array;
//   }
//   const pivot = [array[0]];
//   const left = [];
//   const right = [];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else if (array[i] > pivot) {
//       right.push(array[i]);
//     } else {
//       pivot.push(array[i]);
//     }
//   }
//   console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
//   return quickSort(left).concat(pivot, quickSort(right));
// }

export function getQuickSort(array) {
  let animations = [];
  let stack = array.slice();
  let left = 0;
  let right = stack.length - 1;
  QuickSort(stack, left, right, animations);
  array = stack;
  return [animations, array];
}

function QuickSort(array, left, right, animations) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot, animations);
  QuickSort(array, left, partition - 1, animations);
  QuickSort(array, partition, right, animations);
  return array;
}

function divide(array, left, right, pivot, animations) {
  console.log(
    `array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`
  );
  while (left <= right) {
    while (array[left] < pivot) {
      animations.push([pivot, left, "before"]);
      console.log(left, "레프트 이동중!!!");
      left++;
      animations.push([pivot, left, "after"]);
      animations.push([pivot, left, "before"]);
    }
    while (array[right] > pivot) {
      animations.push([pivot, right, "before"]);
      console.log(left, "라이트 이동중!!!");
      right--;
      animations.push([pivot, right, "after"]);
      animations.push([pivot, right, "before"]);
    }
    if (left <= right) {
      console.log("스왑됨!!!", left, right, array[left], array[right]);
      swap(array, left, right);
      animations.push([left, array[left], "changed"]);
      animations.push([right, array[right], "changed"]);
      left++;
      right--;
    }
  }
  return left;
}

// [arr[i],arr[j]] = [arr[j],arr[i]]
function swap(stack, firstIdx, secondIdx) {
  let tmp = stack[firstIdx];
  stack[firstIdx] = stack[secondIdx];
  stack[secondIdx] = tmp;
}
