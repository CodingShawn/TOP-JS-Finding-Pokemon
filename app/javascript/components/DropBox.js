import React from "react";
import DropBoxCard from "./DropBoxCard";
import MagikarpImage from "../../assets/images/Magikarp.png";
import PorygonImage from "../../assets/images/Porygon.png";
import TogepiImage from "../../assets/images/Togepi.png";

function DropBox(props) {
  let [xCoords, yCoords] = props.targetBoxCoords;
  let coordsStyle = {
    top: yCoords + props.yOffset + "px",
    left: xCoords + props.xOffset + "px",
  };
  return (
    <div className="drop-box" style={coordsStyle}>
      <ul>
        <li>
          <DropBoxCard
            cardImage={MagikarpImage}
            cardDescription="magikarp"
            checkPosition={props.checkPosition}
          />
        </li>
        <li>
          <DropBoxCard
            cardImage={PorygonImage}
            cardDescription="porygon"
            checkPosition={props.checkPosition}
          />
        </li>
        <li>
          <DropBoxCard
            cardImage={TogepiImage}
            cardDescription="togepi"
            checkPosition={props.checkPosition}
          />
        </li>
      </ul>
    </div>
  );
}

export default DropBox;
