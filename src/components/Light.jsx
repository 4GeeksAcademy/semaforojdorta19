import React from "react";

const Light = ({ color, activeLight, colorSet }) => {
  const isSelected = activeLight === color;
  return (
    <>
      <div
        onClick={() => colorSet(color)}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          borderRadius: "50px",
        }}
        className={`${activeLight === color ? "glow" : ""}`}
      ></div>
    </>
  );
};
export default Light;
