import React from "react";
import { useState } from "react";
import pokeImg from "../../assets/images/pokemon.png";
import TargetBox from "./TargetBox";
import DropBox from "./DropBox";

let Map = () => {
  let [ifTargeted, setIfTargeted] = useState(false);
  let [targetBoxCoords, setTargetBoxCoords] = useState(null);

  function placeTargetBox(event) {
    const { pageX, pageY } = event;
    let offset = 25;
    let xCoords = pageX - offset;
    let yCoords = pageY - offset;
    setIfTargeted(!ifTargeted);
    setTargetBoxCoords([xCoords, yCoords]);
  }

  function checkPosition(pokemon) {
    let mapImage = document.querySelector(".map");
    let mapWidth = mapImage.width;
    let mapHeight = mapImage.height;
    let xPercent = (targetBoxCoords[0] / mapWidth) * 100;
    let yPercent = (targetBoxCoords[1] / mapHeight) * 100;
    let urlRequest = `/maps/check${pokemon}?x=${xPercent}&y=${yPercent}`;
    sendCheckRequest(urlRequest, pokemon);
  }

  async function sendCheckRequest(urlRequest, pokemon) {
    let response = await fetch(urlRequest);
    let ifFoundStatus = await response.json();
    if (ifFoundStatus.checkStatus) {
      let myStyleSheet = document.styleSheets[0];
      myStyleSheet.addRule(
        "#" + pokemon + "-card",
        "background-color: rgba(170,170,170, 0.9)"
      );
      myStyleSheet.addRule(
        "#" + pokemon + "-card",
        "color: rgb(160, 160, 160)"
      );
    }
  }

  return (
    <div className="image-container">
      <img className="map" src={pokeImg} onClick={placeTargetBox} />
      {ifTargeted && <TargetBox targetBoxCoords={targetBoxCoords} />}
      {ifTargeted && (
        <DropBox
          targetBoxCoords={targetBoxCoords}
          checkPosition={checkPosition}
        />
      )}
    </div>
  );
};

export default Map;
