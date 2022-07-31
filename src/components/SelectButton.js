import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: "pointer",
        backgroundColor: selected ? "#03DAC6" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 600 : 500,
        "&:hover": {
          backgroundColor: "#03DAC6",
          color: "black",
        },
        width: "22%",
        margin: 5,
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
