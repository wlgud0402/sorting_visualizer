import React from "react";
import ReactModal from "react-modal";

const RangeModal = ({ hideModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%,-50%)",
    },
  };

  return (
    <ReactModal isOpen style={customStyles}>
      <p>Modal content</p>
      <button onClick={hideModal}>모달숨기기</button>
    </ReactModal>
  );
};

export default RangeModal;
