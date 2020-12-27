import React from "react";
import { useState } from "react";
import pokeImg from "../../assets/images/pokemon.png";
import TargetBox from "./TargetBox";
import DropBox from "./DropBox";
import PopUp from "./PopUp"

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
    let isFoundStatus = await response.json();
    if (isFoundStatus.checkStatus) {
      let myStyleSheet = document.styleSheets[0];
      myStyleSheet.addRule(
        "#" + pokemon + "-card",
        "background-color: rgba(170,170,170, 0.9)"
      );
      myStyleSheet.addRule(
        "#" + pokemon + "-card",
        "color: rgb(160, 160, 160)"
      );
      let popUpText = `You found ${pokemon}!`
      showPopUp(popUpText, true)
    } else {
      let popUpText = "Opps! That doesn't seem like the right Pokemon";
      showPopUp(popUpText, false)
    }
  }

  function showPopUp(popUpText, isFound) {
    let popUp = document.querySelector(".pop-up");
    isFound ? popUp.classList.add("found") : popUp.classList.add("not-found")
    popUp.textContent = popUpText;
  }

  return (
    <div className="image-container">
      <img className="map" src={pokeImg} onClick={placeTargetBox} />
      {ifTargeted && <PopUp targetBoxCoords={targetBoxCoords} />}
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
