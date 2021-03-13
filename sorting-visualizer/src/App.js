import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import { bubbleSort } from "./sortingAlgorithms/bubbleSort.js";

function App() {
  const [size, setSize] = useState(10);
  const [arr, setArr] = useState([]);
  const [choosedSize, setChoosedSize] = useState(10);

  //페이지가 랜더링 될때 처음 실행됨
  useEffect(() => {
    makeArray(size);
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

  const onBubbleSort = () => {
    const sortedArr = bubbleSort(arr);
    const newArr = [...sortedArr];
    setArr(newArr);
  };

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        makeRandomArray={makeRandomArray}
        onBubbleClick={onBubbleSort}
      />
      <Main data={arr} />
    </div>
  );
}

export default App;
