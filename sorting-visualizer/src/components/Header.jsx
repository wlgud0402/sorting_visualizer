import React from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

const Header = ({
  rangeChange,
  makeRandomArray,
  onBubbleClick,
  onMergeClick,
  onQuickClick,
  onSelectionClick,
  onInsertionClick,
  onChangeRange,
  choosedSize,
  nowSorting,
}) => {
  const [value, setValue] = useState(choosedSize);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onChangeRange(value);
  };

  const buttonTest = () => {
    console.log("test");
  };

  return (
    <Wrapper>
      <Title>Sorting Visualization</Title>
      <RangeWrapper>
        <Typography gutterBottom>Length</Typography>
        <Slider
          min={10}
          max={150}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
        />
      </RangeWrapper>
      <button className="buttonTest" onClick={buttonTest} disabled={nowSorting}>
        테스트
      </button>
      <Button onClick={makeRandomArray} disabled={true}>
        새 배열
      </Button>
      <Button onClick={rangeChange}>범위 선택</Button>
      <Button onClick={onMergeClick}>Merge Sort</Button>
      <Button onClick={onQuickClick}>Quick Sort</Button>
      <Button onClick={onSelectionClick}>Selection Sort</Button>
      <Button onClick={onBubbleClick}>Bubble Sort</Button>
      <Button onClick={onInsertionClick}>Insertion Sort</Button>
      <select name="choice">
        <option value="first" selected>
          10
        </option>
        <option value="second">20</option>
        <option value="third">30</option>
        <option value="second">40</option>
        <option value="third">50</option>
        <option value="second">60</option>
        <option value="third">70</option>
        <option value="second">80</option>
        <option value="third">90</option>
        <option value="second">100</option>
        <option value="third">110</option>
        <option value="second">120</option>
        <option value="third">130</option>
        <option value="second">140</option>
        <option value="third">150</option>
        <option value="second">160</option>
        <option value="third">170</option>
        <option value="second">180</option>
        <option value="third">190</option>
        <option value="second">200</option>
      </select>
    </Wrapper>
  );
};

export default Header;

const Title = styled.p`
  color: wheat;
  font-size: 19px;
  font-weight: bold;
`;

const Button = styled.p`
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: gray;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-y: hidden;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.33);
  .buttonTest {
    all: unset;
    color: #fff;
    background-color: ${(props) =>
      props.nowSorting === true ? "red" : "black"};
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    &:hover {
      color: gray;
    }
  }
`;

const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: center;
`;
