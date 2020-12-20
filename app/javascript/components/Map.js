import React from "react";
import { useState } from "react";
import pokeImg from "../../assets/images/pokemon.png";
import TargetBox from "./TargetBox";

let Map = () => {
  let [ifTargeted, setIfTargeted] = useState(false);
  let [targetBoxCoords, setTargetBoxCoords] = useState(null)

  function placeTargetBox(event) {
    const { pageX, pageY } = event;
    let offset = 25;
    let xCoords = pageX - offset;
    let yCoords = pageY - offset;
    setIfTargeted(!ifTargeted);
    setTargetBoxCoords([xCoords, yCoords])
  }

  return (
    <div className="image-container">
      <img className="map" src={pokeImg} onClick={placeTargetBox} />
      {ifTargeted && <TargetBox targetBoxCoords={targetBoxCoords} />}
    </div>
  );
};

export default Map;
