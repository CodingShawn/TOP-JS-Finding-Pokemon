import React from "react";

let TargetBox = (props) => {
  let [xCoords, yCoords] = props.targetBoxCoords;
  let coordStyle = {
    top: yCoords.toString() + "px",
    left: xCoords.toString() + "px",
  };

  return <div className="target-box" style={coordStyle}></div>;
};

export default TargetBox;
