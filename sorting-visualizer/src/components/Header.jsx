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
      <Button onClick={makeRandomArray} disabled={true}>
        새 배열
      </Button>
      <Button onClick={rangeChange}>범위 선택</Button>
      <Button onClick={onMergeClick}>Merge Sort</Button>
      <Button onClick={onQuickClick}>Quick Sort</Button>
      <Button onClick={onSelectionClick}>Selection Sort</Button>
      <Button onClick={onBubbleClick}>Bubble Sort</Button>
      <Button onClick={onInsertionClick}>Insertion Sort</Button>
    </Wrapper>
  );
};

export default Header;

const Title = styled.p`
  color: black;
  font-size: 15px;
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
  align-content: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.33);
`;

const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: center;
`;
