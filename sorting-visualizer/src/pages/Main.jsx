import React from "react";
import styled from "styled-components";

const Main = ({ arr, currentIdx, nextIdx }) => {
  const screen = window.screen;
  const barHeightProPortion = (screen.height * 0.7) / arr.length;
  const barWidth = screen.width / arr.length;
  return (
    <Container>
      <BlockContinaer>
        {arr.map((size, idx) => {
          // console.log(size, i);
          return (
            <Bar
              className="array-bar"
              key={idx}
              height={`${size * barHeightProPortion}px`}
              width={`${barWidth}px`}
              // active={currentIdx === i}
              // nextIdx={nextIdx === size}
            />
          );
        })}
      </BlockContinaer>
      <Step>
        <p>© 2021 Jihyung Kim CO., LTD. ALL RIGHTS RESERVED.</p>
        <p className="contact">contact: 010-6805-0402</p>
      </Step>
    </Container>

    // <Container>
    //   <BlockContinaer>
    //     {arr.map((size, i) => {
    //       // console.log(size, i);
    //       return (
    //         <Bar
    //           key={size}
    //           height={`${size * barHeightProPortion}px`}
    //           width={`${barWidth}px`}
    //           // active={currentIdx === i}
    //           // nextIdx={nextIdx === size}
    //         />
    //       );
    //     })}
    //   </BlockContinaer>
    //   <Step>
    //     <p>jihyung.kim.dev by 2021</p>
    //   </Step>
    // </Container>
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
  background-color: ${(props) => (props.active ? "red" : "turquoise")};
  /* background-color: ${(props) => (props.nextIdx ? "#b50002" : "#b36c2f")}; */
  margin-right: 2px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  background-color: turquoise;
  text-align: center;
  border: 1px solid white;
  color: white;
  font-weight: bold;

  .contact {
    margin: 0px;
    margin-bottom: 10px;
  }
  /* align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  border-top: 1px solid white;
  justify-content: center; */
`;
