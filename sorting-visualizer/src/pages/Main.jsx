import React from "react";
import styled from "styled-components";

const Main = ({ arr, currentIdx }) => {
  const screen = window.screen;
  const barHeightProPortion = 430 / arr.length;
  const barWidth = screen.width / arr.length;
  return (
    <Container>
      <BlockContinaer>
        {arr.map((size, i) => {
          return (
            <Bar
              key={size}
              height={`${size * barHeightProPortion}px`}
              width={`${barWidth}px`}
              active={currentIdx === i}
            />
          );
        })}
      </BlockContinaer>
      <Step>
        <p>jihyung.kim.dev by 2021</p>
      </Step>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const BlockContinaer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const Bar = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.active ? "#b50002" : "#b36c2f")};
  margin-right: 2px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  border-top: 1px solid white;
  background-color: #b36c2f;
  justify-content: center;
`;
