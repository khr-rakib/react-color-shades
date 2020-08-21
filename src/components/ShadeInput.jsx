import React from "react";

const ShadeInput = (props) => {
  return (
    <div className="shade-search">
      <div className="emojis"></div>

      <input
        type="text"
        className="shade-input"
        value={props.color}
        onChange={(e) => props.onInputChange(e.target.value)}
      />

      <div className="emojis"></div>
    </div>
  );
};

export default ShadeInput;
