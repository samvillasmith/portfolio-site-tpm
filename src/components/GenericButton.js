import React from 'react';

const GenericButton = (props) => {
  return (
    <button
      onClick={props.handleJump}
      style={{
        backgroundColor: "#0077c9",
        color: "#fff",
        fontSize: "1.1em",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1",
        transition: "all 0.3s",
        margin: "40px 5px",
      }}
    >
      {props.genericText}
    </button>
  );
};

export default GenericButton;


