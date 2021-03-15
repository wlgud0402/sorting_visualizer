import { sleep } from "../helper/sleep.js";

export const mergeSort = async (array) => {
  if (array.length === 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middleIdx));
  const rightHalf = mergeSort(array.slice(middleIdx));
  const sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      sortedArray.push(leftHalf[i++]);
      await sleep(1000);
    } else {
      sortedArray.push(rightHalf[j++]);
      await sleep;
    }
  }
  while (i < leftHalf.length) sortedArray.push(leftHalf[i++]);
  while (j < rightHalf.length) sortedArray.push(rightHalf[j++]);
  return sortedArray;
};
