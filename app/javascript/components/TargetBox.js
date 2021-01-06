import React from "react";

let TargetBox = (props) => {
  let [xCoords, yCoords] = props.targetBoxCoords;
  //Amount of px to offset so that circle will form around clicked point
  let offset = props.offset;
  let coordStyle = {
    top: (yCoords - offset).toString() + "px",
    left: (xCoords - offset).toString() + "px",
  };

  return <div className="target-box" style={coordStyle}></div>;
};

export default TargetBox;
