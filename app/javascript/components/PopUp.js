import React from "react"

function PopUp(props) {
  let [xCoords, yCoords] = props.targetBoxCoords;
  let coordStyle = {
    top: (yCoords - 53).toString() + "px",
    left: xCoords.toString() + "px",
  };

  return (
    <div className="pop-up hidden" style={coordStyle} >

    </div>
  )
}

export default PopUp