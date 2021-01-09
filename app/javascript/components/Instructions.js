import React from "react";
import Dropbox from "./DropBox";

function Instructions(props) {
  return (
    <div className="centering-wrapper">
      <div className="instructions center-popup">
        <h2>Find the missing Pokemon!</h2>
        <button className="instructions-btn" onClick={props.closeInstructions}>Gotta Catch Them all!</button>
        <Dropbox
          targetBoxCoords={[200, 0]}
          checkPosition={null}
          xOffset={0}
          yOffset={0}
        />
      </div>
    </div>
  );
}

export default Instructions;
