import React from "react";
import styled from "styled-components";
// import { useModal } from "react-modal-hook";
// import RangeModal from "./RangeModal";
// import Slider from "@material-ui/core/Slider";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Header = ({
  rangeChange,
  makeRandomArray,
  onBubbleClick,
  onMergeClick,
  onQuickClick,
  onTestClick,
}) => {
  //   const [showModal, hideModal] = useModal(() => (
  //     <RangeModal hideModal={hideModal} />
  //   ));
  //   const handleSliderChange = (event, newValue) => setValue(newValue);

  return (
    <Wrapper>
      <Title>Sorting Visualization</Title>
      <Button onClick={makeRandomArray}>새 배열</Button>
      <Button onClick={rangeChange}>범위 선택</Button>
      <Button onClick={onMergeClick}>Merge Sort</Button>
      <Button onClick={onQuickClick}>Quick Sort</Button>
      <Button>Heap Sort</Button>
      <Button onClick={onTestClick}>테스트</Button>
      <Button onClick={onBubbleClick}>Bubble Sort</Button>
    </Wrapper>
    // <Button onClick={showModal}>범위선택</Button>
    // <RangeWrapper>
    //   <Typography gutterBottom>Always visible</Typography>
    //   <Slider
    //     value={typeof value === "number" ? value : 0}
    //     onChange={handleSliderChange}
    //   />
    // </RangeWrapper>
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
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.33);
  /* padding-left: 25px;
  padding-right: 25px; */
`;

const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: center;
`;
