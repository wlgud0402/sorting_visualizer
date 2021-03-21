import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import { getBubbleSort } from "./sortingAlgorithms/bubbleSort.js";
import { getMergeSort } from "./sortingAlgorithms/mergeSort.js";
import { getSelectionSort } from "./sortingAlgorithms/selectionSort.js";
import { getInsertionSort } from "./sortingAlgorithms/insertionSort.js";
import { getQuickSort } from "./sortingAlgorithms/quickSort.js";

function App() {
  const ANIMATION_SPEED_MS = 10;
  const PRIMARY_COLOR = "turquoise";
  const SECONDARY_COLOR = "red";
  const [nowSorting, setNowSorting] = useState("false");

  const firstSize = 10;
  const [arr, setArr] = useState([]);
  const [choosedSize, setChoosedSize] = useState(10);

  const screen = window.screen;
  const barHeightProPortion = (screen.height * 0.7) / arr.length;

  //페이지가 랜더링 될때 처음 실행됨
  useEffect(() => {
    makeArray(firstSize);
  }, []);

  useEffect(() => {
    setNowSorting(nowSorting);
    console.log("바뀜", nowSorting);
  }, [nowSorting]);

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

  //거품정렬
  const onBubbleSort = async () => {
    console.log("솔팅시전", nowSorting);
    setNowSorting("true");
    console.log("솔팅시작눌렀어", nowSorting);
    const [animations, sortedArray] = getBubbleSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "same" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  //병합정렬
  const onMergeSort = async () => {
    const animations = getMergeSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          // barStyle.height = `${newHeight * barHeightProPortion}px`;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  //선택정렬
  const onSelectionSort = async () => {
    let [animations, afterSortedArray] = getSelectionSort(arr);
    console.log(animations, afterSortedArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "same" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  //삽입정렬
  const onInsertionSort = () => {
    const [animations, sortedArray] = getInsertionSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "same" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  //퀵정렬
  const onQuickSort = () => {
    const [animations, sortedArr] = getQuickSort(arr);
    console.log(animations, sortedArr);
    try {
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        if (animations[i][2] === "changed") {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight * barHeightProPortion}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const arrayBars = document.getElementsByClassName("array-bar");
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color =
            animations[i][2] === "after" ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    } catch {
      console.log(
        "inplace quick를 사용하기 때문에 위치 바꿀때 에러나는경우가 있다"
      );
    }
  };

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        makeRandomArray={makeRandomArray}
        onBubbleClick={onBubbleSort}
        onMergeClick={onMergeSort}
        onQuickClick={onQuickSort}
        onSelectionClick={onSelectionSort}
        onInsertionClick={onInsertionSort}
        onChangeRange={makeArray}
        choosedSize={choosedSize}
        nowSorting={nowSorting}
      />
      <Main arr={arr} />
    </div>
  );
}

export default App;
