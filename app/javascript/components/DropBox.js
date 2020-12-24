import React from "react";
import DropBoxCard from "./DropBoxCard";
import MagikarpImage from "../../assets/images/Magikarp.png";
import PorygonImage from "../../assets/images/Porygon.png";
import TogepiImage from "../../assets/images/Togepi.png";

function DropBox(props) {
  let [xCoords, yCoords] = props.targetBoxCoords;
  let coordsStyle = {
    top: yCoords + "px",
    left: xCoords + 65 + "px",
  };
  return (
    <div className="drop-box" style={coordsStyle}>
      <ul>
        <li>
          <DropBoxCard cardImage={MagikarpImage} cardDescription="magikarp" />
        </li>
        <li>
          <DropBoxCard cardImage={PorygonImage} cardDescription="porygon" />
        </li>
        <li>
          <DropBoxCard cardImage={TogepiImage} cardDescription="togepi" />
        </li>
      </ul>
    </div>
  );
}

export default DropBox;
