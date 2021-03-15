import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
// import { bubbleSort } from "./sortingAlgorithms/bubbleSort.js";
// import { mergeSort } from "./sortingAlgorithms/mergeSort.js";
import { quickSort } from "./sortingAlgorithms/quickSort.js";

import { sleep } from "./helper/sleep.js";

function App() {
  const firstSize = 10;
  const [arr, setArr] = useState([]);
  const [choosedSize, setChoosedSize] = useState(10);

  const [currentIdx, setCurrentIdx] = useState(null);
  const [nextIdx, setNextIdx] = useState(null);

  //페이지가 랜더링 될때 처음 실행됨
  useEffect(() => {
    makeArray(firstSize);
  }, []);

  //선택된 범위를 재사용해서 새로 다시 섞인 배열 생성
  const makeRandomArray = () => {
    makeArray(choosedSize);
  };

  //범위를 선택후 이를 적용시킴
  const rangeChange = () => {
    const range = prompt("5~250까지 입력하실수 있습니다.");
    if (range > 4 && range < 251) {
      makeArray(range);
      setChoosedSize(range);
    } else {
      alert("올바르지 않은 범위입니다.");
      makeArray(10);
      return;
    }
  };

  //범위를 입력받은후 그만큼 크기의 배열생성, 섞기위해 shuffleArray 호출
  const makeArray = (range) => {
    let pureArray = [];
    for (let i = 1; i <= range; i++) {
      pureArray.push(i);
    }
    shuffleArray(pureArray);
  };

  //무작위로 배열내의 숫자를 섞음
  const shuffleArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setArr(array);
  };

  //BubbleSort
  const onBubbleSort = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      setCurrentIdx(i);
      console.log(i);
      for (let j = 0; j < len; j++) {
        // setNextIdx(i + 1);
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          setArr([...arr]);
        }
      }
      await sleep(100);
    }
    setCurrentIdx(null);
  };

  //MergeSort
  const mergeSort = async (array) => {
    if (array.length === 1) return array;

    const middleIdx = Math.floor(array.length / 2);
    const leftHalf = await mergeSort(array.slice(0, middleIdx));
    console.log("leftHalf", leftHalf);
    const rightHalf = await mergeSort(array.slice(middleIdx));
    const sortedArray = [];

    let i = 0;
    let j = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        sortedArray.push(leftHalf[i++]);
      } else {
        sortedArray.push(rightHalf[j++]);
      }
    }
    while (i < leftHalf.length) sortedArray.push(leftHalf[i++]);
    while (j < rightHalf.length) sortedArray.push(rightHalf[j++]);

    console.log("솔로로로로롤", sortedArray);
    return sortedArray;
  };

  const onMergeSort = async () => {
    mergeSort(arr);
    console.log("실행", arr);
  };

  const onQuickSort = () => {
    quickSort(arr, 0, arr.length - 1);
    console.log("퀵소트", arr);
  };

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        makeRandomArray={makeRandomArray}
        onBubbleClick={onBubbleSort}
        onMergeClick={onMergeSort}
        onQuickClick={onQuickSort}
      />
      <Main arr={arr} currentIdx={currentIdx} nextIdx={nextIdx} />
    </div>
  );
}

export default App;
