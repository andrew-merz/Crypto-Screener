import React from "react";
import { useState } from "react";
const SelectButton = ({ children, selected, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid #03DAC6",

        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: "pointer",
        backgroundColor: selected ? "#03DAC6" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 600 : 500,
        backgroundColor: isHovering ? "#03DAC6" : "",
        color: isHovering ? "black" : "",

        width: "22%",
        margin: 5,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default SelectButton;
