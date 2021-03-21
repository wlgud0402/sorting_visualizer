// import { sleep } from "../helper/sleep.js";

export function getMergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const stack = array.slice();
  mergeSortHelper(array, 0, array.length - 1, stack, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, stack, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(stack, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(stack, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, stack, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, stack, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]); // we push them once to change their color.
    animations.push([i, j]); // we push them a second time to revert their color.
    if (stack[i] <= stack[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, stack[i]]);
      mainArray[k++] = stack[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, stack[j]]);
      mainArray[k++] = stack[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, stack[i]]);
    mainArray[k++] = stack[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, stack[j]]);
    mainArray[k++] = stack[j++];
  }
}
